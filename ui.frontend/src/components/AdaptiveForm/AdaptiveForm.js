import React, { useEffect, useState } from 'react';
import { MapTo, ResponsiveGrid } from '@adobe/aem-react-editable-components';
import { createFormInstance } from '@aemforms/af-core';
import { FormContext } from '@aemforms/af-react-renderer';

// edit config
const FormContainerEditConfig = {
  emptyLabel: 'Adaptive Form Container',
  isEmpty(params) {
    return params.cqItems == null || params.cqItems.length === 0;
  },
};

const AdaptiveFormContainer = (formJson) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    const form = createFormInstance({ ...formJson })
    const localState = { model: form, id: form.getUniqueId() };
    setState(localState);

    // submit success handler
    form.subscribe((action) => {
      const body = action.payload?.body;
      if (body) {
        if (body.redirectUrl) {
          window.location.href = body.redirectUrl;
        } else if (body.thankYouMessage) {
          const formContainerElement = document.querySelector(`[data-cmp-path='${formPath}']`);
          const thankYouMessage = document.createElement('div');
          thankYouMessage.setAttribute('class', 'tyMessage');
          thankYouMessage.innerHTML = body.thankYouMessage;
          formContainerElement.replaceWith(thankYouMessage);
        } else {
          // if anything else, then it should be an error
          window.alert('Error during form submission'); // todo localize this
        }
      }
    }, 'submitSuccess');

    // submit error handler
    form.subscribe((action) => {
      const defaultSubmissionError = 'Error during form submission'; // todo localize this
      window.alert(defaultSubmissionError);
    }, 'submitError');

  }, []);

  if (!state) {
    return null;
  }
  const formState = state?.model?.getState();
  const formPath = formState?.properties?.['fd:path'];
  return (
    <FormContext.Provider value={{ form: state.model, modelId: state.model.id }}>
      <form data-cmp-path={formPath} data-cmp-is="adaptiveFormContainer">
        {formState?.label?.value ? <h2>{formState.label.value}</h2> : null}
        <ResponsiveGrid config={FormContainerEditConfig} {...formState} />
      </form>
    </FormContext.Provider>
  );
}

export default MapTo('wknd-spa-react-latest/components/adaptiveForm/formcontainer')(AdaptiveFormContainer, FormContainerEditConfig);

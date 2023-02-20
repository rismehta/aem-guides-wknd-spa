import React from 'react';
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

const AdaptiveFormContainer = (props) => {

  const form = createFormInstance({...props});
  const state = form.getState();
  const formPath = state?.properties?.['fd:path'];

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

  return (
    <FormContext.Provider value={{ form: form, modelId: form.getUniqueId() }}>
      <form data-cmp-path={formPath} data-cmp-is="adaptiveFormContainer">
        {state?.label?.value ? <h2>{state.label.value}</h2> : null}
        <ResponsiveGrid config={FormContainerEditConfig} {...state} />
      </form>
    </FormContext.Provider>
  );
}

export default MapTo('wknd-spa-react-latest/components/adaptiveForm/formcontainer')(AdaptiveFormContainer, FormContainerEditConfig);

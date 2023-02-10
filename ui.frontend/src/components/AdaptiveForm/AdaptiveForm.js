import React from 'react';
import {MapTo, ResponsiveGrid} from '@adobe/aem-react-editable-components';
import { createFormInstance } from '@aemforms/af-core';
import { FormContext } from '@aemforms/af-react-renderer';

// edit config
const FormContainerEditConfig = {
  emptyLabel: 'Adaptive Form Container',
  isEmpty(params) {
    return params.cqItems == null || params.cqItems.length === 0;
  },
};

// eslint-disable-next-line react/prefer-stateless-function
class AdaptiveFormContainer extends React.Component {
  /*
  constructor(props) {
    super(props);
    // const { model } = props;
    // create runtime form state from json
  }
  */

  render() {
    const newProps = this.props;
    const model = { ...newProps };
    this.form = createFormInstance(model);
    this.state = { model: this.form.getState() };
    const formPath = this.state?.model?.properties?.['fd:path'];
    // submit success handler
    this.form.subscribe((action) => {
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
    this.form.subscribe((action) => {
      const defaultSubmissionError = 'Error during form submission'; // todo localize this
      window.alert(defaultSubmissionError);
    }, 'submitError');
    return (
        <FormContext.Provider value={{ form: this.form, modelId: this.form.getUniqueId() }}>
          <form data-cmp-path={formPath} data-cmp-is="adaptiveFormContainer">
            {this.state?.model?.label?.value ? <h2>{this.state.model.label.value}</h2> : null}
            <ResponsiveGrid config={FormContainerEditConfig} {...this.state.model} />
          </form>
        </FormContext.Provider>
    );
  }
}

export default MapTo('wknd-spa-react-latest/components/adaptiveForm/formcontainer')(AdaptiveFormContainer, FormContainerEditConfig);

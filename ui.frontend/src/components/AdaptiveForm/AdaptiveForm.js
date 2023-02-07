
import {
    MapTo,
    ResponsiveGrid
} from '@adobe/aem-react-editable-components';
import React from 'react';
import {EditableComponent} from "@adobe/aem-react-editable-components";
import {createFormInstance} from "@aemforms/af-core";
import {FormContext} from "@aemforms/af-react-renderer";

const EditableAdaptiveForm = (props) => {
    const FormContainerEditConfig = {
        emptyLabel:  'Adaptive Form Container',
        isEmpty: function (props) {
            return props.cqItems == null || props.cqItems.length === 0;
        }
    };
    const {model} = props;
    // create runtime form state from json
    const form = createFormInstance(model);
    props.model = form.getState();
    // data-cmp-path and data-cmp-is required for some editor functionality to work
    // check github documentation
    // EditableComponent is required to make the component editable (ie) refresh in case of dialog changes
    return (
        <EditableComponent config={FormContainerEditConfig} {...props}>
            <FormContext.Provider value={{form: form, modelId: form.getUniqueId()}}>
                <form
                    data-cmp-path={props?.model?.properties?.["fd:path"]}
                    data-cmp-is="adaptiveFormContainer">
                    {props?.model?.label?.value ?<h2>{props.model.label.value}</h2> : null}
                    <ResponsiveGrid
                        config={FormContainerEditConfig} {...props}>
                    </ResponsiveGrid>
                </form>
            </FormContext.Provider>
        </EditableComponent>);
};


export default MapTo("wknd-spa-react-latest/components/adaptiveForm/formcontainer")(EditableAdaptiveForm);

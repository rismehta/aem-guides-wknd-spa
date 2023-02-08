import React from "react";
import { Select, Text, FormControl, FormLabel } from "@chakra-ui/react";
import {useRuleEngine} from "@aemforms/af-react-renderer";
import {AuthoringUtils} from "@adobe/aem-spa-page-model-manager";
import {EditableComponent, MapTo} from "@adobe/aem-react-editable-components";

const DropDownComponent = (props) => {
    const changeHandler = (event) => {
        props.onChange(parseInt(event.target.value));
    };

    const dropdownData =
        props.enumNames && props.enumNames.length
            ? props.enumNames
            : props.enum || [];
    const {label, id, required} = props;
    const isVisible = typeof props.visible === 'undefined' || props.visible;
    return isVisible ? (
        <>
            <FormControl isInvalid={props.errorMessage}>
                <FormLabel htmlFor={id}>
                    {label.value} {label.value && required ? "*" : ""}
                </FormLabel>
                <Select onChange={changeHandler} size="lg" mt={2}>
                    {/* <option value=""></option> Comment this to see default error on validate() */}
                    {dropdownData?.length > 0
                        ? dropdownData.map((optionText, index) => (
                            <option value={index + 1} key={index + 1}>
                                {optionText}
                            </option>
                        ))
                        : null}
                </Select>
                <Text mb="8px" color={"crimson"}>
                    {props.errorMessage}
                </Text>
            </FormControl>
        </>
    ) : null;
};

// af specific drop down which interacts with rule engine of adaptive form SDK
const AFDropDownComp = props => {
    const {isInEditor} = props;
    let convertedProps = {...props}; // we add some default values in the model which is required here
    if (!isInEditor) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [state, handlers] = useRuleEngine(props);
        // don't add form change or blur listeners in authoring, so that AEM listeners work
        convertedProps = {
            onChange: handlers.dispatchChange,
            selectedKey: state?.value != null ? state.value + "" : state.value,
            ...state
        };
    }
    return (
        <DropDownComponent {...convertedProps} />
    );
}

// editable drop down
const EditableDropDown = (props) => {
    const DropDownEditConfig = {
        emptyLabel: 'Drop Down',
        isEmpty: function (props) {
            return !props;
        }
    };
    let isInEditor = AuthoringUtils.isInEditor();
    const newProps = {
        isInEditor,
        ...props
    };
    return (
        <EditableComponent config={DropDownEditConfig} {...newProps}>
            <AFDropDownComp {...newProps} />
        </EditableComponent>
    );
};

export default MapTo('wknd-spa-react-latest/components/adaptiveForm/dropdown')(EditableDropDown);

import React from 'react';
import {  Input, FormControl, FormLabel, Text, Tooltip, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import {useRuleEngine} from '@aemforms/af-react-renderer';
import {EditableComponent, MapTo} from "@adobe/aem-react-editable-components";
import { AuthoringUtils} from "@adobe/aem-spa-page-model-manager";

const InputWrapper = (props) => {
    const {
        id,
        size = "lg",
        showPassword = true,
        autoComplete = "off",
        errorBorderColor = "crimson",
    } = props;
    return (
        <Input
            id={id}
            size={size}
            autoComplete={autoComplete}
            errorBorderColor={errorBorderColor}
            type={showPassword ? "text" : "password"}
            {...props}
        />
    );
};

const InputGroupWrapper = (props) => {
    const {
        showPassword = false,
        inputTypePassword = false,
        handlerShowHidePassword = () => {},
    } = props;
    return inputTypePassword ? (
        <InputGroup>
            <InputWrapper {...props} />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handlerShowHidePassword}>
                    {showPassword ? "Hide" : "Show"}
                </Button>
            </InputRightElement>
        </InputGroup>
    ) : (
        <InputWrapper {...props} />
    );
};

const TextFieldComponent = (props) => {
    const {
        id,
        error,
        label,
        value,
        format,
        required,
        readOnly,
        maxLength,
        properties,
        placeholder,
        description,
        errorMessage,
    } = props;

    const { inputType } = properties || {};
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const keyChangeFn = (event) => {
        let thisVal = event.target.value;
        const textValLen = thisVal?.length;
        if (format === "date") {
            if (event?.keyCode && event.keyCode !== 8) {
                if (textValLen === 4 || textValLen === 7) {
                    thisVal += "-";
                    event.target.value = thisVal;
                }
            }
        } else if (properties?.format === "ssn" || properties?.format === "zip") {
            if (event?.keyCode && event.keyCode !== 8) {
                const zipCheck = properties.format === "zip" && textValLen === 5;
                const ssnCheck =
                    properties.format === "ssn" && (textValLen === 3 || textValLen === 7);
                if (ssnCheck || zipCheck) {
                    thisVal += "-";
                }
                event.target.value = thisVal;
            }
            const newVal = thisVal.replace(/-/g, "");
            props.onChange(newVal);
            return true;
        }
        props.onChange(thisVal);
    };

    const handleChange = (event) => {
        let thisVal = event.target.value;
        if (maxLength && thisVal.length === maxLength + 1) {
            return;
        }
        keyChangeFn(event);
    };

    const handleKeyDown = (event) => {
        keyChangeFn(event);
    };

    const handleBlur = (event) => {
        props.onBlur(event.target.value);
    };

    const checkIsValidField =
        errorMessage !== undefined ? errorMessage.length > 0 : false;

    const component = (
        <InputGroupWrapper
            value={value}
            onBlur={handleBlur}
            isReadOnly={readOnly}
            isRequired={required}
            onChange={handleChange}
            placeholder={placeholder}
            onKeyDown={handleKeyDown}
            isInvalid={checkIsValidField}
            handlerShowHidePassword={handleClick}
            inputTypePassword={inputType === "password"}
            showPassword={inputType === "password" ? !!show : true}
        />
    );

    return props.visible ? (
        <FormControl isInvalid={error} mb={30}>
            <FormLabel htmlFor={id}>
                {label.value} {label.value && required ? "*" : ""}
            </FormLabel>
            {description?.length ? (
                <Tooltip label={description}>{component}</Tooltip>
            ) : (
                component
            )}
            <Text mb="8px" color={"crimson"}>
                {errorMessage}
            </Text>
        </FormControl>
    ) : null;
};



const TextFieldComp = props => {
    const {isInEditor} = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, handlers] = useRuleEngine(props);
    let convertedProps = state; // we add some default values in the model which is required here
    if (!isInEditor) {
        // don't add form change or blur listeners in authoring, so that AEM listeners work
        convertedProps = {
            onChange: handlers.dispatchChange,
            onBlur: handlers.dispatchChange,
            ...state
        };
    }
    return (
        <TextFieldComponent {...convertedProps} />
    );
}

const TextFieldEditConfig = {
    emptyLabel: 'Text Field',
    isEmpty: function (props) {
        return !props;
    }
};

const EditableTextField = (props) => {
    let isInEditor = AuthoringUtils.isInEditor();
    const newProps = {
        isInEditor,
        ...props
    };
    return (
        <EditableComponent config={TextFieldEditConfig} {...newProps}>
            <TextFieldComp {...newProps} />
        </EditableComponent>
    );
};

export default MapTo('wknd-spa-react-latest/components/adaptiveForm/textinput')(EditableTextField);

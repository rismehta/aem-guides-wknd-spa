import React from 'react';
import { Input, FormControl, FormLabel, Text, Tooltip, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { MapTo } from "@adobe/aem-react-editable-components";
import { withRuleEngine } from '../RuleEngineHook';

// Customer's component
class InputGroupWrapper extends React.Component {
  render() {
    const {
      showPassword = false, inputTypePassword = false, handlerShowHidePassword = () => { },
      size = 'lg', autoComplete = 'autoComplete', errorBorderColor = 'crimson'
    } = this.props;
    const inputProps = {
      ...this.props,
      id: this.props.id,
      size: size,
      autoComplete: autoComplete,
      errorBorderColor: errorBorderColor,
      type: showPassword ? 'text' : 'password'
    }
    return inputTypePassword ? (
      <InputGroup>
        <Input {...inputProps} />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handlerShowHidePassword}>{showPassword ? "Hide" : "Show"}</Button>
        </InputRightElement>
      </InputGroup>
    ) : (
      <Input {...inputProps} />
    )
  }
}

class TextFieldComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false
    };
  }

  handleClick() {
    setState((prevState) => ({ show: !prevState.show }));
  }

  keyChangeFn(event) {
    const { format, properties, onChange } = this.props;
    let thisVal = event?.target?.value;
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
        const ssnCheck = properties.format === "ssn" && (textValLen === 3 || textValLen === 7);
        if (ssnCheck || zipCheck) {
          thisVal += "-";
        }
        event.target.value = thisVal;
      }
      const newVal = thisVal.replace(/-/g, "");
      onChange(newVal);
      return true;
    }
    onChange(thisVal);
  };

  handleChange(event) {
    const { maxLength } = this.props;
    let thisVal = event.target.value;
    if (maxLength && thisVal.length === maxLength + 1) {
      return;
    }
    this.keyChangeFn(event);
  };

  handleKeyDown(event) {
    this.keyChangeFn(event);
  };

  handleBlur(event) {
    this.props.onBlur(event.target.value);
  };

  render() {
    const {
      id, error, label, value, required, readOnly, properties,
      placeholder, description, errorMessage, visible
    } = this.props
    const { inputType } = properties || {};
    const isVisible = typeof visible === 'undefined' || visible;
    const checkIsValidField = errorMessage !== undefined ? errorMessage.length > 0 : false;
    const { show } = this.state
    const inputProps = {
      value: value,
      onBlur: this.handleBlur,
      isReadOnly: readOnly,
      isRequired: required,
      onChange: this.handleChange,
      placeholder: placeholder,
      onKeyDown: this.handleKeyDown,
      isInvalid: checkIsValidField,
      handlerShowHidePassword: this.handleClick,
      inputTypePassword: inputType === "password",
      showPassword: inputType === "password" ? !!show : true
    }

    return isVisible ? (
      <FormControl isInvalid={error} mb={30}>
        <FormLabel htmlFor={id}>
          {label.value} {label.value && required ? "*" : ""}
        </FormLabel>
        {description?.length ? (
          <Tooltip label={description}>
            <InputGroupWrapper {...inputProps} />
          </Tooltip>
        ) : (
          <InputGroupWrapper {...inputProps} />
        )}
        <Text mb="8px" color={"crimson"}>
          {errorMessage}
        </Text>
      </FormControl>
    ) : null;
  }
}

// wrapper component for props's mapping
class TextFieldComponentWrapper extends React.Component {
  render() {
    const { handlers, ...restProps } = this.props;
    return <TextFieldComponent {...restProps} onChange={handlers.dispatchChange} onBlur={handlers.dispatchChange} />
  }
}
// to get updated props
const AdaptiveTextField = withRuleEngine(TextFieldComponentWrapper);
const TextFieldEditConfig = {
  emptyLabel: 'Text Field',
  isEmpty: function (props) {
    return !props;
  }
};
export default MapTo('wknd-spa-react-latest/components/adaptiveForm/textinput')(AdaptiveTextField, TextFieldEditConfig);

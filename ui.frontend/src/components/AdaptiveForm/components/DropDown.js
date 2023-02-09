import React from "react";
import { Select, Text, FormControl, FormLabel } from "@chakra-ui/react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { withRuleEngine } from '../RuleEngineHook';

// Customer's component
class DropDownComponent extends React.Component {
  changeHandler(event) {
    this.props.onChange(parseInt(event.target.value));
  }
  render() {
    const { label, id, required, enumNames, enum: enums, visible, errorMessage } = this.props;
    const dropdownData = enumNames && enumNames.length ? enumNames : enums || [];
    const isVisible = typeof visible === 'undefined' || visible;

    return isVisible ? (
      <FormControl isInvalid={errorMessage}>
        <FormLabel htmlFor={id}>{label.value} {label.value && required ? "*" : ""}</FormLabel>
        <Select onChange={this.changeHandler} size="lg" mt={2}>
          {dropdownData?.length > 0
            ? dropdownData.map((optionText, index) => (
              <option value={index + 1} key={index + 1}>
                {optionText}
              </option>
            ))
            : null}
        </Select>
        <Text mb="8px" color={"crimson"}>{errorMessage}</Text>
      </FormControl>
    ) : null
  }
};

// wrapper component for props's mapping
const DropDownComponentWrapper = (props) => {
  const { handlers, ...restProps } = props;
  const selectedKey = props?.value != null ? props.value + "" : props.value
  return <DropDownComponent {...restProps} selectedKey={selectedKey} onChange={handlers.dispatchChange} />
}
// to get updated props
const AdaptiveDropDown = withRuleEngine(DropDownComponentWrapper);
const DropDownEditConfig = {
  emptyLabel: 'Drop Down',
  isEmpty: function (props) {
    return !props;
  }
};
export default MapTo('wknd-spa-react-latest/components/adaptiveForm/dropdown')(AdaptiveDropDown, DropDownEditConfig);

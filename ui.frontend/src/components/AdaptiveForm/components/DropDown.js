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
class DropDownComponentWrapper extends React.Component {
  render() {
    const { handlers, ...restProps } = this.props;
    const selectedKey = this.props?.value != null ? this.props.value + "" : this.props.value
    return <DropDownComponent {...restProps} selectedKey={selectedKey} onChange={handlers.dispatchChange} />
  }
}
const DropDownEditConfig = {
  emptyLabel: 'Drop Down',
  isEmpty: function (props) {
    return !props;
  }
};
export default MapTo('wknd-spa-react-latest/components/adaptiveForm/dropdown')( withRuleEngine(DropDownComponentWrapper), DropDownEditConfig);

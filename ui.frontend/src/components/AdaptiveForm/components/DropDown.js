/* eslint-disable max-classes-per-file */
import React from 'react';
import { Select, Text, FormControl, FormLabel } from '@chakra-ui/react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { withRuleEngine } from '../RuleEngineHook';

// Customer's component
// eslint-disable-next-line react/prefer-stateless-function
class DropDownComponent extends React.Component {
  changeHandler = (event) => {
    this.props?.onChange(parseInt(event.target.value, 10));
  };

  render() {
    const { label, id, required, enumNames, enum: enums, visible, errorMessage } = this.props;
    const dropdownData = enumNames && enumNames.length ? enumNames : enums || [];
    const isVisible = typeof visible === 'undefined' || visible;

    return isVisible ? (
        <FormControl isInvalid={errorMessage}>
          <FormLabel htmlFor={id}>
            {label.value} {label.value && required ? '*' : ''}
          </FormLabel>
          <Select onChange={this.changeHandler} size="lg" mt={2}>
            {dropdownData?.length > 0
                ? dropdownData.map((optionText, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <option value={index + 1} key={index + 1}>
                      {optionText}
                    </option>
                ))
                : null}
          </Select>
          <Text mb="8px" color="crimson">
            {errorMessage}
          </Text>
        </FormControl>
    ) : null;
  }
}

// wrapper component to wrap adaptive form capabilities
// eslint-disable-next-line react/prefer-stateless-function
class AdaptiveFormDropDown extends React.Component {
  render() {
    // during authoring, handlers won't be available to avoid overlap of editor and AF functionalities
    const { handlers, ...restProps } = this.props;
    const selectedKey = this.props?.value != null ? `${this.props.value}` : this.props.value;
    return <DropDownComponent {...restProps} selectedKey={selectedKey} onChange={handlers?.dispatchChange} />;
  }
}
const DropDownEditConfig = {
  emptyLabel: 'Drop Down',
  isEmpty(props) {
    return !props;
  },
};
export default MapTo('wknd-spa-react-latest/components/adaptiveForm/dropdown')(withRuleEngine(AdaptiveFormDropDown), DropDownEditConfig);

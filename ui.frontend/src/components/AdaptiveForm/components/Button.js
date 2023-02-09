import { Button } from "@chakra-ui/react";
import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { withButtonRuleEngineHook } from '../RuleEngineHook';

class ButtonComponent extends React.Component {
  handleClick(event) {
    this.props.onClick(event);
  };
  render() {
    const { label, enabled, className, properties, visible } = this.props;
    const isVisible = typeof visible === 'undefined' || visible;
    return isVisible ? (
      <Button
        size="md"
        height="48px"
        width={properties?.marginTnB === false ? "25%" : "100%"}
        border="2px"
        colorScheme="blue"
        onClick={handleClick}
        className={className}
        disabled={!enabled}
        mt={properties?.marginTnB === false ? "0" : "30"}
        mb={properties?.marginTnB === false ? "0" : "30"}
      >
        {label.value}
      </Button>
    ) : null
  }
}

const EditableButton = withButtonRuleEngineHook(ButtonComponent);
const ButtonEditConfig = {
  emptyLabel: 'Button',
  isEmpty: function (props) {
    return !props;
  }
};
export default MapTo('wknd-spa-react-latest/components/adaptiveForm/button')(EditableButton, ButtonEditConfig);
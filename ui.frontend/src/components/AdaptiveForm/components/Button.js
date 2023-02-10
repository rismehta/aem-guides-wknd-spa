import { Button } from "@chakra-ui/react";
import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { withRuleEngine } from '../RuleEngineHook';

// Customer's component
class ButtonComponent extends React.Component {
  handleClick = (event) => {
    this.props.onClick(event);
  };
  render() {
    const { label, enabled, className, properties, visible} = this.props;
    const isVisible = typeof visible === 'undefined' || visible;
    return isVisible ? (
      <Button
        size="md"
        height="48px"
        width={properties?.marginTnB === false ? "25%" : "100%"}
        border="2px"
        colorScheme="blue"
        onClick={this.handleClick}
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

// wrapper component for props's mapping
class ButtonComponentWrapper extends React.Component {
  render() {
    const { handlers, ...restProps } = this.props;
    return <ButtonComponent {...restProps} onClick={handlers.dispatchClick} />
  }
}
const ButtonEditConfig = {
  emptyLabel: 'Button',
  isEmpty: function (props) {
    return !props;
  }
};
export default MapTo('wknd-spa-react-latest/components/adaptiveForm/button')(withRuleEngine(ButtonComponentWrapper), ButtonEditConfig);
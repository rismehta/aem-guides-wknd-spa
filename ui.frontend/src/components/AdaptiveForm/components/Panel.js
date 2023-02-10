import { SimpleGrid } from '@chakra-ui/react'
import React from 'react';
import { MapTo, ResponsiveGrid } from "@adobe/aem-react-editable-components";
import { withRuleEngine } from '../RuleEngineHook';

// Customer's component
class PanelComponent extends React.Component {
  render() {
    return (
      <SimpleGrid columnGap={10} colorScheme="blue">
        <ResponsiveGrid config={PanelEditConfig} {...this.props} />
      </SimpleGrid>
    )
  }
}

// wrapper component for props's mapping
class PanelComponentWrapper extends React.Component {
  render() {
    const { handlers, ...restProps } = this.props;
    return <PanelComponent {...restProps} />
  }
}

const PanelEditConfig = {
  emptyLabel: 'Adaptive Form Panel',
  isEmpty: function (props) {
    return props.cqItems == null || props.cqItems.length === 0;
  }
};
export default MapTo("wknd-spa-react-latest/components/adaptiveForm/panelcontainer")(withRuleEngine(PanelComponentWrapper), PanelEditConfig);

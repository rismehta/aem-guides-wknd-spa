import { SimpleGrid } from '@chakra-ui/react'
import React from 'react';
import { MapTo, ResponsiveGrid } from "@adobe/aem-react-editable-components";
import { withPanelRuleEngineHook } from '../RuleEngineHook';

class PanelWrapper extends React.Component {
  render() {
    return (
      <SimpleGrid columnGap={10} colorScheme="blue">
        <ResponsiveGrid config={PanelEditConfig} {...this.props} />
      </SimpleGrid>
    )
  }
}

const EditablePanel = withPanelRuleEngineHook(PanelWrapper);

const PanelEditConfig = {
  emptyLabel: 'Adaptive Form Panel',
  isEmpty: function (props) {
    return props.cqItems == null || props.cqItems.length === 0;
  }
};
export default MapTo("wknd-spa-react-latest/components/adaptiveForm/panelcontainer")(EditablePanel, PanelEditConfig);

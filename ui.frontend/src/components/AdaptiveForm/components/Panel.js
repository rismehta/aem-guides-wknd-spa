/* eslint-disable max-classes-per-file */
import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import {MapTo, ResponsiveGrid} from '@adobe/aem-react-editable-components';
import { withRuleEngine } from '../RuleEngineHook';

const PanelEditConfig = {
  emptyLabel: 'Adaptive Form Panel',
  isEmpty(props) {
    return props.cqItems == null || props.cqItems.length === 0;
  },
};

// Customer's component
// eslint-disable-next-line react/prefer-stateless-function
class PanelComponent extends React.Component {
  render() {
    return (
        <SimpleGrid columnGap={10} colorScheme="blue">
          <ResponsiveGrid config={PanelEditConfig} {...this.props} />
        </SimpleGrid>
    );
  }
}

// wrapper component to wrap adaptive form capabilities
// eslint-disable-next-line react/prefer-stateless-function
class AdaptiveFormPanel extends React.Component {
  render() {
    const { handlers, ...restProps } = this.props;
    return <PanelComponent {...restProps} />;
  }
}
export default MapTo('wknd-spa-react-latest/components/adaptiveForm/panelcontainer')(withRuleEngine(AdaptiveFormPanel), PanelEditConfig);

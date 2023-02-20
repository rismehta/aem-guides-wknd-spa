import Button from '@material-ui/core/Button';
import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { useRuleEngine } from '@aemforms/af-react-renderer';

// Customer's component
const ButtonComponent = (props) => {
  const { label, enabled, className, visible, onClick } = props;
  const isVisible = typeof visible === 'undefined' || visible;
  return isVisible ? (
    <Button
      variant="contained"
      color="primary"
      size="medium"
      onClick={onClick}
      className={className}
      disabled={!enabled}
    >
      {label?.value}
    </Button>
  ) : null;

}

// wrapper component to wrap adaptive form capabilities
const AdaptiveFormButton =(props)=>{
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, handlers] = useRuleEngine(props);
  return <ButtonComponent {...state} onClick={handlers?.dispatchClick} />;
}
const ButtonEditConfig = {
  emptyLabel: 'Button',
  isEmpty(props) {
    return !props;
  },
};
export default MapTo('wknd-spa-react-latest/components/adaptiveForm/button')(AdaptiveFormButton, ButtonEditConfig);

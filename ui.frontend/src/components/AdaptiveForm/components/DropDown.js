import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { MapTo } from '@adobe/aem-react-editable-components';
import { useRuleEngine } from '@aemforms/af-react-renderer';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
// Customer's component
const DropDownComponent = (props) => {
  const {
    label, id, required, enumNames, enum: enums,
    visible, errorMessage, value, onChange, description
  } = props;
  const dropdownData = enumNames && enumNames.length ? enumNames : enums || [];
  const isVisible = typeof visible === 'undefined' || visible;
  const classes = useStyles();

  const changeHandler = (event) => {
    onChange(parseInt(event.target.value, 10));
  };

  return isVisible ? (
    <FormControl required={required} error={errorMessage ? true : false} className={classes.formControl}>
      <InputLabel id={`${id}-label`}>{label?.value}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={value}
        onChange={changeHandler}
        displayEmpty
        className={classes.selectEmpty}
      >
        {
          dropdownData.map((text, index) => (
            <MenuItem value={enums[index]} key={enums[index]}>{text}</MenuItem>
          ))
        }
      </Select>
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
      {description && !errorMessage && <FormHelperText>{description}</FormHelperText>}
    </FormControl>
  ) : null;
}

// wrapper component to wrap adaptive form capabilities
const AdaptiveFormDropDown = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, handlers] = useRuleEngine(props);
  const selectedKey = state?.value != null ? `${state.value}` : state.value;
  return <DropDownComponent {...state} selectedKey={selectedKey} onChange={handlers?.dispatchChange} />;
}
const DropDownEditConfig = {
  emptyLabel: 'Drop Down',
  isEmpty(props) {
    return !props;
  },
};
export default MapTo('wknd-spa-react-latest/components/adaptiveForm/dropdown')(AdaptiveFormDropDown, DropDownEditConfig);

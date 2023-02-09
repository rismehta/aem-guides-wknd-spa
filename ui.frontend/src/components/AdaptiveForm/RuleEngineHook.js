import React from 'react';
import { useRuleEngine } from '@aemforms/af-react-renderer';
import { AuthoringUtils } from "@adobe/aem-spa-page-model-manager";

export function withRuleEngineHook(Component) {
  return function WrappedComponent(props) {
    const { isInEditor } = props;
    let convertedProps = { ...props };
    if (!isInEditor) {
      const [state, handlers] = useRuleEngine(props);
      convertedProps = {
        onChange: handlers.dispatchChange,
        onBlur: handlers.dispatchChange,
        ...state
      };
    }
    return <Component {...convertedProps} />;
  }
};

export function withPanelRuleEngineHook(Component) {
  return function WrappedComponent(props) {
    let { model } = props;
    let isInEditor = AuthoringUtils.isInEditor();
    if (!isInEditor) {
      const [state] = useRuleEngine(model);
      model = { ...state };
    }
    const visible = typeof model.visible === 'undefined' || model.visible;
    return visible ? <Component {...props} /> : null;
  }
};

export function withDropDownRuleEngineHook(Component) {
  return function WrappedComponent(props) {
    const { isInEditor } = props;
    let convertedProps = { ...props };
    if (!isInEditor) {
      const [state, handlers] = useRuleEngine(props);
      convertedProps = {
        onChange: handlers.dispatchChange,
        selectedKey: state?.value != null ? state.value + "" : state.value,
        ...state
      };
    }
    let isInEditorUpdated = AuthoringUtils.isInEditor();
    return <Component isInEditor={isInEditorUpdated} {...convertedProps} />;
  }
};

export function withButtonRuleEngineHook(Component) {
  return function WrappedComponent(props) {
    const { isInEditor } = props;
    let convertedProps = { ...props };
    if (!isInEditor) {
      const [state, handlers] = useRuleEngine(props);
      convertedProps = {
        onClick: handlers.dispatchClick,
        ...state
      };
    }
    let isInEditorUpdated = AuthoringUtils.isInEditor();
    return <Component isInEditor={isInEditorUpdated} {...convertedProps} />;
  }
};
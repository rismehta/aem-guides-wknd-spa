import { Button } from "@chakra-ui/react";
import React from "react";
import {useRuleEngine} from "@aemforms/af-react-renderer";
import {AuthoringUtils} from "@adobe/aem-spa-page-model-manager";
import {EditableComponent, MapTo} from "@adobe/aem-react-editable-components";

// chakra button
const ButtonComponent = ({
                             label,
                             onClick,
                             enabled,
                             className,
                             properties,
                             visible
                         }) => {

    const handleClick = (event) => {
        onClick(event);
    };
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
    ) : null;
};

// adaptive form button wrapper
// abstract business logic to interact with adaptive form rules
const AFButtonComp = props => {
    const {isInEditor} = props;
    let convertedProps = {...props}; // we add some default values in the model which is required here
    if (!isInEditor) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [state, handlers] = useRuleEngine(props);
        // don't add form change or blur listeners in authoring, so that AEM listeners work
        convertedProps = {
            onClick: handlers.dispatchClick,
            ...state
        };
    }
    return (
        <ButtonComponent {...convertedProps} />
    );
}


// editable button
// abstracts business logic to interact with aem editor
const EditableButton = (props) => {
    const ButtonEditConfig = {
        emptyLabel: 'Button',
        isEmpty: function (props) {
            return !props;
        }
    };
    let isInEditor = AuthoringUtils.isInEditor();
    const newProps = {
        isInEditor,
        ...props
    };
    return (
        <EditableComponent config={ButtonEditConfig} {...newProps}>
            <AFButtonComp {...newProps} />
        </EditableComponent>
    );
};

export default MapTo('wknd-spa-react-latest/components/adaptiveForm/button')(EditableButton);
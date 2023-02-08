import { SimpleGrid } from '@chakra-ui/react'
import React from 'react';
import {EditableComponent, MapTo, ResponsiveGrid} from "@adobe/aem-react-editable-components";
import {useRuleEngine} from '@aemforms/af-react-renderer';
import { AuthoringUtils} from "@adobe/aem-spa-page-model-manager";

const EditablePanel = (props) => {
    let {model} = props; // get the adaptive form json from props
    let isInEditor = AuthoringUtils.isInEditor();
    if (!isInEditor) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [state, handlers] = useRuleEngine(model);
        const {
            layout
        } = state?.properties || {};
        // update the model with the state at runtime
        model = {
            ...state
        }
    }
    const PanelEditConfig = {
        emptyLabel:  'Adaptive Form Panel',
        isEmpty: function (props) {
            return props.cqItems == null || props.cqItems.length === 0;
        }
    };
    if (typeof model.visible === 'undefined' || model.visible) {
        return (<EditableComponent config={PanelEditConfig} {...props}>
            <SimpleGrid
                columnGap={10}
                colorScheme="blue">
                <ResponsiveGrid
                    config={PanelEditConfig} {...props}>
                </ResponsiveGrid>
            </SimpleGrid>
        </EditableComponent>);
    } else {
        return null;
    }
};

export default MapTo("wknd-spa-react-latest/components/adaptiveForm/panelcontainer")(EditablePanel);

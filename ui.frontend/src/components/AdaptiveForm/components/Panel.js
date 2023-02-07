import { SimpleGrid } from '@chakra-ui/react'
import React from 'react';
import {EditableComponent, MapTo, ResponsiveGrid} from "@adobe/aem-react-editable-components";
import {useRuleEngine} from '@aemforms/af-react-renderer';

const EditablePanel = (props) => {
    const {model} = props; // get the adaptive form json from props
    const [state, handlers] = useRuleEngine(model);
    const {
        layout
    } = state?.properties || {};
    const { columns = "", className = "" } = layout || {};
    const {id} = state;
    const PanelEditConfig = {
        emptyLabel:  'Adaptive Form Panel',
        isEmpty: function (props) {
            return props.cqItems == null || props.cqItems.length === 0;
        }
    };
    if (model.visible) {
        return (<EditableComponent config={PanelEditConfig} {...props}>
            <SimpleGrid
                columnGap={10}
                columns={columns}
                colorScheme="blue"
                className={className}>
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

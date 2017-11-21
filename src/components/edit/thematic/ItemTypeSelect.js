import React from 'react';
import i18next from 'i18next';
import SelectField from 'd2-ui/lib/select-field/SelectField';
import { dimConf } from '../../../constants/dimension';

const ItemType = (props) => {

    // TODO: Avoid creating on each render (needs to be created after i18next conatins transaltions
    const items = [
        { id: dimConf.indicator.objectName, name: i18next.t('Indicator') },
        { id: dimConf.dataElement.objectName, name: i18next.t('Data element') },
        { id: dimConf.dataSet.objectName, name: i18next.t('Reporting rates') },
        { id: dimConf.eventDataItem.objectName, name: i18next.t('Event data items') },
        { id: dimConf.programIndicator.objectName, name: i18next.t('Program indicators') },
    ];

    return (
        <SelectField
            label={i18next.t('Item type')}
            items={items}
            value={dimConf.indicator.objectName} // TODO: Use config value
            // style={{ marginRight: 24 }}
            onChange={console.log}
        />
    );

};

export default ItemType;
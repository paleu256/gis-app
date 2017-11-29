import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PeriodTypeSelect from './PeriodTypeSelect';
import RelativePeriodSelect from './RelativePeriodSelect';
import PeriodSelect from './PeriodSelect';
import { getPeriodFromFilters } from '../../util/analytics';
import { setPeriodType, setPeriod } from '../../actions/layerEdit';

const styles = {
    container: {
        flex: '100%',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
    },
};

const ThematicPeriodSelect = ({ periodType, period, setPeriodType, setPeriod, style}) => (
    <div style={styles.container}>
        <PeriodTypeSelect
            key='type'
            value={periodType}
            onChange={type => setPeriodType(type.id)}
            style={style}
        />
        {periodType === 'relativePeriods' ?
            <RelativePeriodSelect
                key='relative'
                period={period ? period.id : null}
                onChange={setPeriod}
                style={style}
            />
            : periodType ?
                <PeriodSelect
                    key='periods'
                    periodType={periodType}
                    period={period ? period.id : null}
                    onChange={setPeriod}
                    style={style}
                />
                : null}
    </div>
);


ThematicPeriodSelect.propTypes = {
    period: PropTypes.object,
};

export default connect(
    ({ layerEdit }) => ({
        periodType: layerEdit.periodType,
        period: getPeriodFromFilters(layerEdit.filters),
    }),
    { setPeriodType, setPeriod }
)(ThematicPeriodSelect);
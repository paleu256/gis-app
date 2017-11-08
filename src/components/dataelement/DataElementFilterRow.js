import React, { Component } from 'react';
import DataElementSelect from './DataElementSelect';
import DataElementFilter from '../../containers/DataElementFilter';
import IconButton from 'material-ui/IconButton';
import RemoveIcon from 'material-ui/svg-icons/navigation/close';

// https://react.rocks/example/react-redux-test

const styles = {
    container: {
        height: 64,
        marginTop: 8,
        padding: '0px 8px',
        background: '#f4f4f4',
        position: 'relative',
        clear: 'both',
    },
    select: {
        marginTop: -8,
        marginRight: 24,
        float: 'left',
    },
    removeBtn: {
        position: 'absolute',
        top: 8,
        right: 8,
    }
};

class DataElementFilterRow extends Component {

    onChange(dimension, filter) {
        const { index, dataElements, onChange } = this.props;
        const name = dataElements.filter(d => d.id === dimension)[0].name;

        if (dimension !== this.props.dimension) { // New dimension
            onChange(index, {
                dimension,
                name,
                filter: null,
            });
        } else {
            onChange(index, {
                dimension,
                name,
                filter,
            });
        }
    }

    render() {
        const { dataElements, dimension, filter, index, onRemove } = this.props;
        let dataElement;

        if (dataElements && dimension) {
            dataElement = dataElements.filter(d => d.id === dimension)[0];
        }

        return (
            <div style={styles.container}>
                {dataElements ?
                    <DataElementSelect
                        label='Data item'
                        items={dataElements}
                        value={dataElement ? dataElement.id : null}
                        onChange={dimension => this.onChange(dimension.id, filter)}
                        style={styles.select}
                    />
                : null}

                {dataElement ?
                    <DataElementFilter
                        {...dataElement}
                        filter={filter}
                        onChange={filter => this.onChange(dimension, filter)}
                    />
                : null}
                <IconButton
                    tooltip="Remove filter"
                    style={styles.removeBtn}
                    onClick={() => onRemove(index)}
                >
                    <RemoveIcon/>
                </IconButton>
            </div>
        )

    }

}

export default DataElementFilterRow;
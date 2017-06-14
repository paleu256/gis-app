import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from 'material-ui/svg-icons/navigation/cancel';
import ResizeHandle from './ResizeHandle';
import DataTable from '../../containers/DataTable';
import { LAYERS_PANEL_WIDTH, HEADER_HEIGHT } from '../../constants/layout';
import './BottomPanel.css';

const styles = {
  closeIcon: {
      width: 16,
      height: 16,
  },
};

// Container for DataTable
class BottomPanel extends Component {

    render() {
        const {
            layersPanelOpen,
            dataTableOpen,
            dataTableHeight,
            width,
            height,
            resizeDataTable,
            closeDataTable,
        } = this.props;

        if (dataTableOpen) {
            const maxHeight = height - HEADER_HEIGHT - 20;
            const tableHeight = dataTableHeight < maxHeight ? dataTableHeight : maxHeight;
            const tableWidth = width - (layersPanelOpen ? LAYERS_PANEL_WIDTH : 0);

            const style = {
                left: layersPanelOpen ? LAYERS_PANEL_WIDTH : 0,
                height: tableHeight,
            };

            return (
                <div
                    ref={node => this.node = node}
                    className='BottomPanel'
                    style={style}
                >
                    <CloseIcon
                        className='BottomPanel-close'
                        onClick={closeDataTable}
                        style={styles.closeIcon}
                        color='#777'
                        hoverColor='#333'
                    />
                    <ResizeHandle
                        maxHeight={maxHeight}
                        onResize={(height) => this.onResize(height)}
                        onResizeEnd={(height) => resizeDataTable(height)}
                    />
                    <DataTable
                        width={tableWidth}
                        height={tableHeight}
                    />
                </div>
            );
        }

        return null;
    }

    // Called from resize handle
    onResize(height) {
        this.node.style.height = `${height}px`;
    }
}

BottomPanel.propTypes = {
    layersPanelOpen: PropTypes.bool.isRequired,
    dataTableOpen: PropTypes.bool.isRequired,
    dataTableHeight: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    resizeDataTable: PropTypes.func.isRequired,
    closeDataTable: PropTypes.func.isRequired,
};

export default BottomPanel;

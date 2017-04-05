import { connect } from 'react-redux';
import ContextMenu from '../components/map/ContextMenu';
import { closeContextMenu, openCoordinatePopup } from '../actions/map';
import { drillOverlay } from '../actions/overlays';
import { openOrgUnit } from '../actions/orgUnit';

const mapStateToProps = state => ({
    ...state.contextMenu
});

const mapDispatchToProps = (dispatch) => ({
    onRequestClose: () => dispatch(closeContextMenu()),
    onDrill: (layerId, parentId, parentGraph, level) => dispatch(drillOverlay(layerId, parentId, parentGraph, level)),
    onShowInformation: attr => {
        dispatch(closeContextMenu());
        dispatch(openOrgUnit(attr));
    },
    showCoordinate: coord => {
        dispatch(closeContextMenu());
        dispatch(openCoordinatePopup(coord));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(ContextMenu);

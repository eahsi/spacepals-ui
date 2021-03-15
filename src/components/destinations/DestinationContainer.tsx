import {connect} from 'react-redux';
import {DestinationComponent} from './DestinationComponent';
import {IState} from '../../reducers';
import {getAllPlanets} from '../../action-mappers/planet-action'

const mapStateToProps = (state: IState) => {

    return {
        allDestinations: state.planetState.allDestinations
    }
}

const mapDispatchToProps = {
    getAllPlanets
}

export default connect (mapStateToProps, mapDispatchToProps)(DestinationComponent)
import { IState } from '../../reducers';
import { connect } from 'react-redux';
import {CreateFlightComponent} from './CreateFlightComponent'
import {getAllPlanets} from '../../action-mappers/planet-action'
const mapStateToProps = (state: IState) => {
    return {
        currentUser: state.userState.currentUser,
        destinations: state.planetState.allDestinations
    }
}
const mapDispatchToProps = {
    getAllPlanets
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateFlightComponent)
import { IState } from '../../reducers/index'
import { connect } from 'react-redux';
import {CreateAircraftComponent} from './CreateAircraftComponent'

const mapStateToProps = (state: IState) => {
    return {
        currentUser:state.userState.currentUser
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAircraftComponent)
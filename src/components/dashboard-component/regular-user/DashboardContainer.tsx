import { IState } from '../../../reducers/index'
import { connect } from 'react-redux';
import  {DashboardComponent}  from './DashboardComponent';

const mapStateToProps = (state: IState) => {
    return {
        currentUser:state.userState.currentUser
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent)
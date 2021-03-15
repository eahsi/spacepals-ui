
import { IState } from '../../reducers';
import { connect } from 'react-redux';
import  {Dashboard}  from './index';

const mapStateToProps = (state: IState) => {
    return {
        currentUser:state.userState.currentUser
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
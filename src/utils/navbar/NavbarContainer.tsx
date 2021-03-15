import { IState } from '../../reducers/index'
import { connect } from 'react-redux';
import  NavbarComponent from './Navbar';

const mapStateToProps = (state: IState) => {
    return {
        currentUser:state.userState.currentUser
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)
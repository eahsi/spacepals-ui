import React from 'react'
import { connect } from "react-redux"
import {IState} from "../../reducers"
import {LogoutComponent} from "./LogoutComponent"

const mapStateToProps = (state:IState) => {
    return {

    }
}

const mapDispatchToProps = {

}

export default connect (mapStateToProps, mapDispatchToProps)(LogoutComponent)
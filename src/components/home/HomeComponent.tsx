import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

// our landing page

interface IHomeState {

}

export class HomeComponent extends React.Component {
    //constructor(props:any) {super(props);}

    render() {
        return (
            // <div>
            // <Navbar/>
            <div style={{ paddingTop: "30px" }}>
                <div className="row" style={{ margin: "0, auto", textAlign: "center", height: "100%" }}>
                    <div className="container col-12">
                        <div className="jumbotron text-center" style={{
                            background: "inherit",
                            borderStyle: "solid",
                            borderColor: "white",
                            borderRadius: "25px",
                            width: "70%", margin: "auto", color: "white", height: "100%", fontStyle: "italic"
                        }}>
                            <h3>Enabling inter-planetary travels</h3>

                            <blockquote className="lead"><h4>
                                "It’s one small step for man, one giant leap for mankind."</h4>
                                <p className="btn btn-primary">- Neil Armstrong</p>
                            </blockquote>
                            <h1 className="display-4 text-danger" style={{ fontWeight: 700, fontSize: "90px" }}>SpacePals</h1>

                        </div>
                    </div>
                </div>
                <div className="row" style={{ paddingTop: "3%" }}>
                    <div className="col-12">
                        <div className="card bg-dark" style={{
                            borderRadius: "25%", borderStyle: "solid",
                            width: "50%", margin: "auto", borderColor: "white", color: "white"
                        }}>
                            <div className="card-body text-center">
                                <p className="btn btn-primary"><Link to="/login" style={{ color: "white" }} >Login</Link></p>
                                <h4>New user? Click <Link to='/register' style={{ color: "red" }}>here</Link> to register</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            // </div>
        )
    }
}
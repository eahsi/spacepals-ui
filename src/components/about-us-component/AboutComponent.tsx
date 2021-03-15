import React from 'react'
import { Link } from 'react-router-dom'




export class AboutComponent extends React.Component<any,any> {

    render() {
        return(
            <div>
                {/* <Navbar/> */}
                {/* <SpaceNav/> */}
                <div className = "jumbotron text-center" 
                style = {{
                width:"70%", margin:"auto", paddingTop:"25px"
                
        
                }}>
                    <h1 className="display-4 text-danger" style = {{fontWeight: 800, fontSize: "90px"}}>SpacePals</h1>
                    <h1 className="lead">Enabling inter-planetary travels</h1>
                    <hr></hr>
                    <blockquote className = "lead">
                    <h2>"Spacepals is a platform designed to make inter-planetary travel accessible to everyone.</h2>
                    <h2>We connect you with high quality spaceflight providers, making your dream destination a reality."</h2>
                    <h4 className = "lead">- Bosco said this</h4>
                    </blockquote>

                    <br/>
                <Link to= "/dashboard">Back to dashboard</Link>
                </div>
                
            </div>
        )
    }


}
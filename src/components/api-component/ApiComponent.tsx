import React, { SyntheticEvent } from 'react'
import { Form, Button } from 'reactstrap'
import { getPlanets } from '../../remote/api-clients/api-clients'

export class ApiComponent extends React.Component<any,any> {


    apiTest = (event: SyntheticEvent) => {
        event.preventDefault();
        let response = getPlanets('');
        console.log(response);
        
    }

    render() {
        return (<div>
            <Form onSubmit={this.apiTest}>
                <Button color="primary">Test</Button>
            </Form>
        </div>
        )
    }
}
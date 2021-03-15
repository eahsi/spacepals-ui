import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, CardSubtitle} from 'reactstrap';

interface IRentalDisplayProps {
    id: number
    availableSeats: number
    name: string
}

export class BrowseRentalDisplayComponent extends React.PureComponent<IRentalDisplayProps> {
    render() {
        console.log(this.props);

        return(
            <Card>
                <CardBody>
                    <CardImg/>
                    <CardTitle>{this.props.name}</CardTitle>
                    <CardSubtitle>{this.props.id}</CardSubtitle>
                    <CardText>This carrier contains {this.props.availableSeats} of seats. Purchase your rental below!</CardText>
                    <Button>Rent</Button>
                </CardBody>
            </Card>
        )
    }
}
import * as React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

interface Props {
  techs: string[]
}

export default class Home extends React.Component<Props, {}> {
  render() {

    const techs = this.props.techs.map((tech) => {
      return <ListGroupItem color="info">{tech}</ListGroupItem>
    })


    return (
    <div>
      <h1> Welcome to our awesome app</h1>
      <h2>This app has been built using below tech stack </h2>
      <ListGroup>{techs}</ListGroup>
    </div>);
  }
}

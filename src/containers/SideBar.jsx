import React from 'react';
import { Segment } from 'semantic-ui-react'

export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state  = {
      notes: []
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log("State is set");
    this.setState({notes: nextProps.notes});
  }
  render() {
    return (
      <Segment.Group>
        {this.state.notes.map(n => <Segment key={n._id}>{n.message}</Segment>)}
      </Segment.Group>
    );
  }
}

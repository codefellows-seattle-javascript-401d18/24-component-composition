import React from 'react';
import NoteCreateForm from '../note-create-form';
import NoteList from '../note-list';
import uuid from 'uuid/v4';
import Modal from '../modal';

let renderIf = (test, componentTrue, componentFalse = undefined) => test ? componentTrue : componentFalse;

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrors: false,
    };
    // this.handleCreate= this.handleCreate.bind(this);
  }

  handleCreate(note) {
    note.id = uuid;
    this.props.app.setState(prevState => ({
      notes: [...prevState.notes, note],
    })
);
  }

  componentDidUpdate() {
    console.log('__DASHBOARD_APP_STATE__', this.props.app.state);
  }

  render() {
    console.log('This is the dash props', this.props.app);
    return (
      <div className = "dashboard-container">
        <h2>Create a Note!</h2>

        <NoteCreateForm app = {this.props.app} onComplete={this.handleCreate}/>
        <NoteList app = {this.props.app}/>
      </div>
    );
  }
}

export default DashboardContainer;

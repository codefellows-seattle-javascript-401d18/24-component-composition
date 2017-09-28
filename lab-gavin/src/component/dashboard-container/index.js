import React from 'react';
import uuid from 'uuid/v4';
import NoteCreateForm from '../note-create-form';
import ListContainer from '../note-item-container';
import NoteUpdateForm from '../note-update-form';
import './_dashboard-container.scss';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.noteCreate = this.noteCreate.bind(this);
    this.noteDelete = this.noteDelete.bind(this);
    this.noteUpdate = this.noteUpdate.bind(this);
  }

  componentDidUpdate() {
    console.log('__APP_STATE_FROM_DASHBOARD__', this.props.app.state);
  }

  noteCreate(note) {
    note.id = uuid();
    this.props.app.setState(prevState => ({
      notes: [...prevState.notes, note],
    }));
  }
  noteDelete(note){
    this.props.app.setState(prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !== note.id;
      }),
    }));
  }

  noteUpdate(note) {
    this.props.app.setState(prevState => ({
      notes: prevState.notes.map((item) => {
        return item.id === note.id ? note : item;
      }),
    }));
  }


  render() {
    return (
      <div className="dashboard-container">
        <h2>Add a new note!</h2>
        <NoteCreateForm
          handleNoteCreate={this.noteCreate}/>
        <ListContainer
          get={this.props.app}
          handleNoteDelete={this.noteDelete}
        />
        {
        // <NoteUpdateForm
        //   get={this.props.app}
        //   handleNoteUpdate={this.noteUpdate}/>
        }
      </div>
    );
  }
}
export default DashboardContainer;

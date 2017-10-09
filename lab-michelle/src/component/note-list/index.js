import React from 'react';
import NoteCreateForm from '../note-create-form';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesList: this.props.app.state.notesArr,
      editing: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
  }

  handleDelete(e, id) {
    this.props.app.setState(prevState => ({
      expenses: prevState.notesArr.filter(note => note.id !== id),
    }));
  }

  toggleUpdate(e) {
    this.setState({editing: !this.state.editing});
  }

  render() {
    return (
      <section className="notesList">
        {this.state.notesList.length ?
          <ul>
            {this.state.notesList
            .map(note => <li key={note.id}>
            {note.title}: {note.content}
            <button onClick={(event) => this.handleDelete(event, note.id)}>x</button>
            <button key={note.id} onClick={this.toggleUpdate}>edit</button>
            {this.state.editing ?
              <NoteUpdateForm
                key = {note.id}
                note = {note}
                app = {this.props.app}
                toggle = {this.toggleUpdate} /> :
              undefined
          }
          </li>)}
          </ul>
          :
          <h2>You do not have any notes</h2>
        }
      </section>
    );
  }
}

export default NoteList;

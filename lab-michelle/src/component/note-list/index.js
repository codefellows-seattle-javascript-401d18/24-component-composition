import React from 'react';
import NoteCreateForm from '../note-create-form';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: this.props.app.state.notes,
      noteEdit: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.handleUpdate =  this.handleUpdate.bind(this);
  }

  handleDelete(e, id) {
    this.props.app.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id),
    }));
  }

  handleUpdate(note, id) {
    note.id = id;
    let notes = this.props.app.state.notes;
    notes = notes.map(prevNote => {
      return id === prevNote.id ? note : prevNote;
    });
    this.props.app.setState({notes: notes});
    this.setState({noteEdit : false });
  }


  toggleUpdate(e) {
    console.log(e.target);
    this.setState({noteEdit: !this.state.notesEdit});
  }

  render() {
    console.log(this.props.app);
    return (
      <div className="notes_list">
        {this.state.noteList.length ?
          <ul>
            {this.state.noteList
              .map(note =>
                <li key={note.id}>
                  {note.title}: {note.content}
                  <button onClick={(event) => this.handleDelete(event, note.id)}>X</button>
                  <button key={note.id} onClick={this.toggleUpdate}>edit</button>
                  {this.state.noteEdit ?
                    <NoteCreateForm
                    key={note.id}
                    note={this.props.app.state.notes}
                    noteUpdate={this.props.app.state.notes}
                    app={this.props.app}
                    onComplete={this.handleUpdate}/> :
                    undefined
                  }
                  </li>)}
            </ul> :
            <h2>No Notes</h2>
          }
          </div>
    );
  }
}

export default NoteList;

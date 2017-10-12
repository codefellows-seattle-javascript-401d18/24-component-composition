import React from 'react';
import NoteUpdateForm from '../note-update-form';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesList: this.props.app.state.notes,
      noteEdit: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
  }

  handleDelete(e, id) {
    this.props.app.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id),
    }));
  }

  toggleUpdate(e) {
    console.log(e.target);
    this.setState({expenseEdit: !this.state.expenseEdit});
  }

  render() {
    return (
      <div className="notes_list">
        {this.state.notesList.length ?
          <ul>
            {this.state.notesList
              .map(note =>
                <li key={note.id}>
                  {note.title}: {note.content}
                  <button onClick={(event) => this.handleDelete(event, note.id)}>X</button>
                  <button key={note.id} onClick={this.toggleUpdate}>edit</button>
                  {this.state.noteEdit ?
                    <NoteUpdateForm
                    key={note.id}
                    note={note}
                    app={this.props.app}
                    toggle={this.toggleUpdate}/> :
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

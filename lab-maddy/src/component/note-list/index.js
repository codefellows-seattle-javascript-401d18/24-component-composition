import React from 'react';
import NoteUpdateForm from '../note-update-form';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: this.props.app.state.notes,
      noteEdit: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
    // this.handleUpdate =  this.handleUpdate.bind(this);
  }

  handleDelete(e, id) {
    this.props.app.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id),
    }));
  }



  toggleUpdate(e) {
    console.log(e.target);
    this.setState({noteEdit: !this.state.noteEdit});
  }

  render() {
    return (
      <div className="note_list">
        {this.state.noteList.length ?
          <ul>
            {this.state.noteList
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

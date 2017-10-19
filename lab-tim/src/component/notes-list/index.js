import './_notes-list.scss';

import React from 'react';
import NoteUpdateForm from '../note-update-form';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: this.props.notes,
      noteEdit: false,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
    console.log('__NOTE_LIST_STATE__', this.state.noteList);
    console.log('__NOTE_LIST_PROPS__', this.props);
  }

  // componentWillMount() {
  //   console.log('__APP_STATE_FROM_NOTES_LIST__', this.props);
  // }

  handleDelete(e, id) {
    this.props.app.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id),
    }));
  }

  toggleUpdate(e) {
    this.setState({noteEdit: !this.state.noteEdit});
  }

  render() {
    return (
      <div className="note-list">
        {this.state.noteList.state.notes.length ?
          <ul>
            {this.state.noteList.state.notes
              .map(note =>
                <li key={note.id}>
                Note: {note.content}
                  <button onClick={(e) => this.handleDelete(e, note.id)}>X</button>
                  <button key={note.id} onClick={this.toggleUpdate}>edit note</button>
                  {this.state.noteEdit ?
                    <NoteUpdateForm
                      key={note.id}
                      note={note}
                      app={this.props.app}
                      toggle={this.toggleUpdate}/>
                    :
                    undefined
                  }
                </li>)}
          </ul> :
          <h2>There are no notes</h2>
        }
      </div>
    );
  }
}

export default NoteList;

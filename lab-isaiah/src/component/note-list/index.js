import React from 'react';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: this.props.notes,
    };

  }

  render() {
    console.log(this.state.noteList);
    return (
      <div className="note-list">
        {this.state.noteList.length ?
          <div>
            <h2>Checkout the map jazz</h2>
            <ul>
              {this.state.noteList
                .map(NoteForm => <li key={NoteForm.id}>{NoteForm.NoteForm}: {NoteForm.noteText}</li>)};
              }
            </ul>
          </div>
          :
          <h2>There are no notes</h2>
        }
      </div>
    );
  }
}

export default NoteList;

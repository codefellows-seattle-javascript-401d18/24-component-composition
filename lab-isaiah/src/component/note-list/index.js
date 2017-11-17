import React from 'react';
import NoteItem from '../note-item';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="note-list">
        <ul>
          {this.props.notes.map((item, i) => {
            return (
              <NoteItem key={i} note = {item}
                deleteNote = {this.props.deleteNote}
                app = {this.props.app}
                notes = {this.props.app.state.notes}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NoteList;

import './note-list.scss';
import React from 'react';
import NoteItem from '../note-item';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul className="notes-list">
        <NoteItem app={this.props.app}/>
      </ul>
    );
  }
}

export default NoteList;

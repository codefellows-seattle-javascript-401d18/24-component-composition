import React from 'react';
import NoteCreateForm from '../note-create-form';
//I think this one is static

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesList: this.props.app.state.notesArr.map(item => <li key={item.id}>(item.title)</li>),
    };
    //Bind things//
  }

  render() {
    return (
      <section className="notesList">
        {this.state.notesList.length ?
          <ul>
            {this.state.notesList}
          </ul>
          :
          <h2>You do not have any notes</h2>
        }
      </section>
    );
  }
}

export default NoteList;

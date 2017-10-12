import React from 'react';
import NoteCreateForm from '../note-create-form';

//double clicking on a note's content should switch to "Edit View" aka show NoteUpdateForm with a cancel button
//Otherwise, show view that is the note and delete button that gets rid of the note from App

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: null,
    };
  }

  render() {
    return (
      <li onDoubleClick={this.setTrue}>
      {
        this.state.editing == true ?
          <section className ="update">
            <NoteCreateForm/>
          </section>
          :
          <section>
            <section>
              <h2>{this.props.note.title}</h2>
            </section>
            <p>{this.props.note.content}</p>
          </section>
      }
      </li>
    );
  }
}

export default NoteItem;

import React from 'react';
import NoteForm from '../note-form';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: null,
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.setTrue = this.setTrue.bind(this);
  }

  handleUpdate(note, id) {
    note.id = id;
    let notes = this.props.notes;
    notes = notes.map(prevNote => {
      return id === prevNote.id ? note : prevNote;
    });
    this.props.app.setState({ notes: notes});
    this.setState({ editing: false });
  }

  handleDelete() {
    this.props.deleteNote(this.props.note.id);
  }

  setTrue() {
    this.setState({ editing: true });
  }

  render() {
    return (
      <li onClick={this.setTrue}>
       {
         this.state.editing == true ?
           <section className="update">
             <NoteForm
               noteUpdate={this.props.note}
               buttonLabel='Update Note'
               handleSubmit={this.handleUpdate}
             />
           </section>
           :
           <section>
             <section>
               <h2>*{this.props.note.title}*</h2>
             </section>
             <span>
               <section>
                 <p>{this.props.note.noteText}</p>
               </section>
             </span>
             <section>
               <button>Edit</button>
             </section>
             <button className='button' onClick={this.handleDelete}>X</button>
           </section>
       }
     </li>

    );
  }
}

export default NoteItem;

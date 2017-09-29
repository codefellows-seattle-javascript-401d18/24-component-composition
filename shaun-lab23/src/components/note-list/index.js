import React from 'react';

class NoteList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    <section>
      { this.props.notes.length === 0 ?
        <div>
          <p>Add a Note!</p>
        </div> :
        <ul>
        {this.props.notes.map((note, i) => {
          return (
            <li key={i}>
              <button onClick={() => this.props.deleteNote(note)}>X</button>
              <h2>{note.title}</h2>
              <p>{note.content}</p>

            <NoteCreateForm
              buttonText='Update Note'
              handleSubmit={(noteItem) => {
                noteItem.id = note.id;
                this.props.updateNote(noteItem);
              }}
              />
            </li>
          );
        })}
        </ul>
      }
    </section>
  );
}
}

export default NoteList;

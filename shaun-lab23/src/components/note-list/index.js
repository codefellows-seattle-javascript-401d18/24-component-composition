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
            </div> :
            <ul>
            {this.props.notes.map((note, i) => {
              console.log('NOTE?', note);

              return (
                <li key={i}>
                  <button onClick={() => this.props.deleteNote(note)}>X</button>
                  <h2>{note.title}</h2>
                  <p>{note.content}</p>
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

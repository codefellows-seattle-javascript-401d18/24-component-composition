import './note-item.scss';
import React from 'react';
import NoteUpdateForm from '../note-update-form';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.app.state.notesArray,
      note: {},
      noteEdit: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
  }

  handleDelete(e, id) {
    this.props.app.setState(prevState => ({
      notesArray: prevState.notesArray.filter(note => note.id !== id),
    }));
  }

  toggleUpdate(e) {
    this.setState({
      noteEdit: !this.state.noteEdit,
      note: this.props.app.state.notesArray.filter(note => note.id === e.target.id),
    });
  }

  getItem() {
    return{
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render() {
    return(
      <div>
        {this.state.items.length ?
          this.state.items.map(note =>
            <li className="note-item" key={note.id} id={note.id} onDoubleClick={this.toggleUpdate}>
              {note.content}
              <button onClick={event => this.handleDelete(event, note.id)}>delete</button>
              {this.state.noteEdit && note.id === this.state.note[0].id ?
                <NoteUpdateForm
                  key={this.state.note[0].id}
                  note={this.state}
                  app={this.props.app}
                  item={this.getItem()}
                  toggle={this.toggleUpdate} /> :
                undefined
              }
            </li>) :
          <h3>There are no notes to be displayed yet!!!</h3>}
      </div>
    );
  }
}

export default NoteItem;

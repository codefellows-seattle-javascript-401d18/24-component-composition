import React from 'react';
import NoteCreateForm from '../NoteUpdateForm';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteEdit: false,
      notesList: this.props.notesArr.map(item => <li key={item.id}>(item.title)</li>),
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
  }

  handleDelete(e, id) {
    this.props.app.setState(prevState => ({
      notesArr: prevState.notesArr.filter(note => note.id !== id)
    }));
  }

  toggleUpdate(e) {
    console.log(e.target);
    this.setState({expenseEdit: !this.state.expenseEdit});
  }

  render() {
    return (
      <section className="notes-list">
        {this.state.notesList.length ?
          <ul>
            {this.state.notesList
              .map(expense =>
                <li key={expense.id}>
                  {note.)
            }
          </ul>
          :
          <h2>You do not have any notes</h2>
        }
      </section>
    );
  }
}

export default NoteList;

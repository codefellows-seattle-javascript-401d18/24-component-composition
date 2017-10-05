import React from 'react';

class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.note.note[0].id,
      editing: this.props.note.note[0].editing,
      completed: this.props.note.note[0].completed,
      content: this.props.note.note[0].content,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this. handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.item.setState({noteEdit: !this.props.note.noteEdit});
    this.props.app.setState(prevState => ({
      notesArray: prevState.notesArray.map(note => {
        if(note.id === this.state.id) note = this.state;
        return note;
      }),
    }));
  }

  handleReset(e) {
    this.props.item.setState({noteEdit: !this.props.note.noteEdit});
  }

  render() {
    return(
      <form
        className="note-form"
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
      >
        <input
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type="submit">Update Note</button>
        <button type="reset">Cancel</button>
      </form>
    );
  }
}
export default NoteUpdateForm;

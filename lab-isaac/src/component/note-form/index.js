import React from 'react';
import uuid from 'uuid/v1';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      editing: false,
      completed: false,
      content: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.app.setState(prevState => ({
      notesArray: [...prevState.notesArray, this.state],
    }));
  }

  render() {
    return(
      <form
        className="note-form"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          name="content"
          placeholder="Type Here to Create Your Note"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type="submit">Save Note</button>
      </form>
    );
  }
}

export default NoteCreateForm;

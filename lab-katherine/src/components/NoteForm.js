import React from 'react';
import uuid from 'uuid/v4';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      content: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.app.setState(prevState => ({
      content: [...prevState.content, this.state],
    }));
  }

  render() {
    return (
      <form
        className="note-form"
        onSubmit={this.handleSubmit}>

        <input
          type="text"
          name="content"
          placeholder="content"
          value={this.state.content}
          onChange={this.handleChange} />

        <button
          className="submit-button"
          type="submit"
          disabled={!this.state.content}>
            Add
        </button>
      </form>
    );
  }
}

export default NoteForm;

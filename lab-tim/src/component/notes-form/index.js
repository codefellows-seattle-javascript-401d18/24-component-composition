import './_notes-form.scss';

import React from 'react';
import uuid from 'uuid/v4';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      content: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log('__NOTE_FORM_STATE__', this.state);
    console.log('__NOTE_FORM_PROPS__', this.props);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.app.setState(prevState => ({
      notes: [...prevState.notes, this.state],
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
          placeholder=" ... "
          value={this.state.content}
          onChange={this.handleChange}/>

        <button type="submit">add note</button>
      </form>
    );
  }
}

export default NoteCreateForm;

import React from 'react';
import uuid from 'uuid/v4';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      title: '',
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
      notes: [...prevState.notes, this.state],
    }));
  }

  componentDidUpdate() {
    console.log('__APP_STATE_FROM_DASH__', this.props.app.state);
  }

  render() {
    return (
      <div className ="note-container">
        <h2>Yay notes</h2>

        <form
          className = "note-create-form"
          onSubmit = {this.handleSubmit}>

        <input
          type = "text"
          name = "content"
          placeholder = "Today was..."
          value = {this.state.content}
          onChange = {this.handleChange}/>

          <button type="submit">Commit a note to your journal</button>
        </form>
        <NoteList/>
      </div>
    );
  }
}

export default NoteCreateForm;

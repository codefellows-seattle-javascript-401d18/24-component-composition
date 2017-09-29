import React from 'react';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      editing: false,
      completed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleNoteCreate(this.state);
  }

  render() {
    return (
      <div className='note-create'>
      <form onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='Title'
          value={this.state.title}
          onChange={this.handleChange}
          />

        <input
          name='content'
          type='text'
          placeholder='Content'
          value={this.state.content}
          onChange={this.handleChange}
          />

        <button type='submit'>Add Note</button>
      </form>
    </div>
    );
  }
}

export default NoteCreateForm;

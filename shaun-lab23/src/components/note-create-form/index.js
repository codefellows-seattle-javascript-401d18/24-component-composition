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
    let {name, value} = e.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
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

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}


export default NoteCreateForm;

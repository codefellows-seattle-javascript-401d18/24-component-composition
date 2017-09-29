import React from 'react';

class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


    handleSubmit(e) {
      e.preventDefault();
    }

    render() {
      return (
        <form className='note-update-form'>
          <input
            name='title'
            type='text'
            placeholder='update title'
            value={this.state.title}
            onChange={this.handleChange}
            />

          <input
            name='content'
            type='text'
            placeholder='update content'
            value={this.state.content}
            onChange={this.handleChange}
            />

          <button onClick=
        </form>
      );
    }
  }

  export default NoteUpdateForm;

import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    let title = props.noteUpdate ? props.noteUpdate.title: '';
    let noteText = props.noteUpdate ? props.noteUpdate.noteText : '';
    this.state = {
      title,
      editing: false,
      completed: false,
      noteText,
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
    if(this.props.buttonLabel == 'Update Note') {
      this.props.handleSubmit(this.state, this.props.noteUpdate.id);
    }else{
      this.props.handleSubmit(this.state);
    }
  }

  render() {
    return (
      <form onSubmit
        className="note-form"
        onSubmit={this.handleSubmit}>

        <input
          name="title"
          type="text"
          placeholder="Note Title"
          value={this.state.title}
          onChange={this.handleChange}/>

        <input
          type="text"
          name="noteText"
          placeholder="Note Text"
          value={this.state.noteText}
          onChange={this.handleChange}/>

        <button className="button" type="submit">{this.props.buttonLabel}</button>
      </form>
    );
  }
}

export default NoteForm;

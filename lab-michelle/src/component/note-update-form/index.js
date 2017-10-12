import React from 'react';

class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.note.id,
      title: this.props.note.title,
      content: this.props.note.content,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.app.setState(prevState => ({
      notes: prevState.notes.map(note => {
        if(note.id === this.state.id) note = this.state;
        return note;
      }),
    }));
    this.props.toggle();
  }

  render() {
    return (
      <form
        className="update-form"
        onSubmit={this.handleSubmit}>

        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}/>

        <input
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}/>

        <button type="Submit">update</button>

      </form>
    );
  }
}

export default NoteUpdateForm;

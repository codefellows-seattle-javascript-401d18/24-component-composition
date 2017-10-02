import React from 'react';

class NoteUpdate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.note.id,
      content: this.props.note.content,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.app.setState(prevState => ({
      content: prevState.content.map(note => {
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
          name="content"
          value={this.state.content}
          onChange={this.handleChange} />

        <button type="submit">update</button>
      </form>
    );
  }
}

export default NoteUpdate;

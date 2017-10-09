import React from 'react';
//NoteUpdateForm inherits the props for note through props on submit
//OnSubmit updates the app's state with a new note
// Edit view: submit or cancel (an X) brings back to "default view" aka

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
    })
  }

  handleSubmit(e) {
    e.preventDefault;
    this.props.app.setState(prevState => ({
      notesArr: prevState.notesArr.map(note => {
        if(note.id === this.state.id) note = this.state;
        return note;
      }),
    }));
    this.props.toggle();
  }

  render() {
    return (
      <form
        className = "update-form"
        onSubmit = {this.handleSubmit}
        >

        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange = {this.handleChange}/>

        <input
          type = "number"
          name = "price"
          value = {this.state.price}
          onChange = {this.handleChange}/>

          <button type="Submit">Update note</button>
          </form>
    );
  }
}

export default NoteUpdateForm;

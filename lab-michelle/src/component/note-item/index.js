import React from 'react';

//double clicking on a note's content should switch to "Edit View" aka show NoteUpdateForm with a cancel button
//Otherwise, show view that is the note and delete button that gets rid of the note from App

//

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //state
      content: '',
    };
    //Binding things
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
      notesArr: [...prevState.notesArr, this.state],
    }));
  }

  render() {
    return {
      //some things
    };
  }
}

export default NoteItem;

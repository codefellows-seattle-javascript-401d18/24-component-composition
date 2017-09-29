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


  export default NoteUpdateForm;

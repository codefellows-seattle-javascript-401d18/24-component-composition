import React from 'react';

class NoteUpdate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.app.state.id,
      content: this.props.app.state.content,
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
      content: prevState.content.map(item => {
        console.log(item.id)
        console.log(this.state.id)
        console.log(this.props.app.state.id)
        if(item.id === this.props.app.state.id) item = this.state;
        return item;
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

        <button className="update-button" type="submit">update</button>
      </form>
    );
  }
}

export default NoteUpdate;

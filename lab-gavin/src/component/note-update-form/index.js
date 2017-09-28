import React from 'react';
import NoteCreateForm from '../note-create-form';

class NoteUpdateForm extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };


    this.handleChange = this.handleChange.bind(this);
  }




  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }



  noteUpdate(note) {
    this.props.get.setState(prevState => ({
      notes: prevState.notes.map((item) => {
        return item.id === note.id ? note : item;
      }),
    }));
  }




  render() {
    return (
      <section className='note-update-form'>
        <ul>
          {this.props.get.state.notes.map((item, i) =>
            <li key={i}>

              <form
                className="update-form"
                onSubmit={() => this.noteUpdate(item)}>

                <input
                  type="text"
                  name="title"
                  placeholder="updatedTitle"
                  value={this.state.title}
                  onChange={() => this.handleChange()}/>
                <br/>

                <textarea
                  type="text"
                  name="content"
                  placeholder="Updated Content"
                  value={this.state.content}
                  onChange={() => this.handleChange()}/>

                <button type="submit">UpdateInForm</button>
              </form>

            </li>
          )}
        </ul>
      </section>
    );
  }
}

export default NoteUpdateForm;

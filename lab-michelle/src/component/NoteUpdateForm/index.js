import React from 'react';
//NoteUpdateForm inherits the props for note through props on submit
//OnSubmit updates the app's state with a new note
// Edit view: submit or cancel (an X) brings back to "default view" aka

class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //state
    };
    //Bind things//
    //onsubmit binding//
  }

  //onSubmit//

  render() {
    return {
      <section className="noteModal">
        <button onClick={this.props.close}x</button>
        <main>
          {this.props.children}
        </main>
      </section>
      //some things
    };
  }
}

export default NoteUpdateForm;

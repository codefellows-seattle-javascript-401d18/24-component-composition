//I now think this is going to be our modal//

import React from 'react';

//double clicking on a note's content should switch to "Edit View" aka show NoteUpdateForm with a cancel button
//Otherwise, show view that is the note and delete button that gets rid of the note from App

//

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  render() {
    return(
      <section className ="note">
        <button onClick={this.props.close}>x</button>
        <main>
          {this.props.children}
        </main>
      </section>
    );
  }
}

export default NoteItem;

import React from 'react';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: this.props.entries,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e, id) {
    this.props.app.setState(prevState => ({
      entries: prevState.entries.filter(note => note.id !== id),
    }));
  }

  render() {
    console.log(this.props);
    return (
      <div className="note-list">
        {this.state.noteList.length ?
          <div>
            <h2>Checkout the map jazz</h2>
            <ul>
              {this.state.noteList
                // .map(entries => <li key={entries.id}>{entries.entries}: {entries.noteText}<button onClick={(event) =>
                // this.handleDelete(event, entries, id)}d</li>)}; //++++++++ Finish this out!!!
              }
            </ul>
          </div>
          :
          <h2>There are no entries</h2>
        }
      </div>
    );
  }
}

export default NoteList;

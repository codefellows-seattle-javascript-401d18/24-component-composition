import React from 'react';
import NoteUpdate from './NoteUpdate';

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      noteList: this.props.app.state.content,
      noteUpdate: false,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
  }

  handleDelete(event, id) {
    this.props.app.setState(prevState => ({
      content: prevState.content.filter(note => note.id !== id),
    }));
  }

  toggleUpdate(event) {
    console.log(event.target);
    this.setState({noteUpdate: !this.state.noteUpdate});
  }

  render() {
    return (
      <div className="note-list">
        {this.state.noteList.length ?
          <ul>
            {this.state.noteList
              .map(item =>
                <li key={item.id}>
                  {item.content}
                  <button onClick={(event) => this.handleDelete(event, item.id)}>x</button>
                  <button className={item.id} onClick={this.toggleUpdate}>edit</button>
                  {this.state.noteUpdate ?
                    <NoteUpdate
                      key={item.id}
                      content={item.content}
                      app={this.props.app}
                      toggle={this.toggleUpdate}/> :
                    undefined
                  }

                </li>)}
          </ul>
          :
          <h2>there are no notes</h2>
        }
      </div>
    );
  }
}
export default NoteList;

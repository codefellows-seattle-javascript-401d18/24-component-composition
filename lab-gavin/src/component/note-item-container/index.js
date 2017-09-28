import React from 'react';
import NoteUpdateForm from '../note-update-form';
import './_note-item-container.scss';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      edit: false,
      noteList:
      this.props.get.state.notes.map(item =>
        <li key={item.id}>
          <h2>{item.title}:</h2>{item.content}
          <button onClick={() => this.props.handleNoteDelete(item)}>Delete</button>
          {
          }
        </li>

      ),
    };

    this.handleEditToggle = this.handleEditToggle.bind(this);

  }

  handleEditToggle(){
    this.setState({
      edit: true,
    });
  }


  handleChange(e){
    this.props.get.setState({
      [e.target.name]: e.target.value,
    });
  }




  render() {
    return (
      <div onDoubleClick={() => this.handleEditToggle()} className="note-list">
        {this.state.noteList.length ?
          <ul>
            {this.state.noteList}
          </ul> :
          <h2>There are no notes</h2>

        }
        {this.state.edit ?
          <ul>
            <NoteUpdateForm
              get={this.props.get} />
          </ul> :
          <h2>Not yet toggled</h2>
        }
      </div>
    );
  }
}

export default ListContainer;

import React from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    // this.noteCreate = this.noteCreate.bind(this);
  }

  componentDidUpdate() {
    console.log('__APP_STATE_FROM_DASHBOARD__', this.props.app.state);
  }

  // noteCreate(note) {
  //   note.id = uuid();
  //   this.props.app.setState(prevState => ({
  //     content: [...prevState.content, note],
  //   }))
  // }

  render () {
    return (
      <div className="dashboard-container">
        <h1>Notes</h1>
        <NoteForm app={this.props.app}/>
        <NoteList content={this.props.app}/>
      </div>
    );
  }
}

export default Dashboard;

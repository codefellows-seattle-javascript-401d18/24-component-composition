import React from 'react';
import NoteCreateForm from '../component/note-create-form';
import NoteList from '../component/note-list';

let renderIf = (test, componentTrue, componentFalse=undefined) => test ? componentTrue : componentFalse;

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrors: false,
    };
  }

  componentDidUpdate() {
    console.log('__DASHBOARD_APP_STATE__', this.props.app.state);
  }

  render() {
    return (
      <div className="dashboard">
        <h2>We Are In The Dashboard</h2>
        <aside>
          <p>Note List</p>
        </aside>

        <NoteList app={this.props.app} />
      </div>
    );
  }
}

export default DashboardContainer;

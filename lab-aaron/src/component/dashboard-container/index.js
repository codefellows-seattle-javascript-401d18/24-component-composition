import React from 'react';
import NoteCreateForm from '../note-create-form';
import NoteUpdateForm from '../note-update-form';
import Modal from '../modal';

let renderIf = (test, component) => test ? component : undefined;

class DashBoardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrors: false,
    };
  }

  componentDidUpdate() {
    console.log('__DASHBOARD_STATE', this.props.app.state);
  }

  render() {

  }
}

export default DashBoardContainer;

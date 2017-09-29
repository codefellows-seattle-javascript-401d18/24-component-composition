include the following behavior:
  * [] DOUBLE CLICK:if the user double clicks on a note's content, it should switch to the edit view

* default view
  * [] display the note content and a delete button
  * [] the delete button should remove the note from the application's state

* edit view
  * [] show the `NoteUpdateForm` and a cancel button
  * [] `onNoteUpdateForm` submit (or click of the cancel button) should switch back to the default view

import React from 'react';

![cf](https://i.imgur.com/7v5ASc8.png) 24: Component Composition
======
#### Project Description


## Learning Objectives
* We will be able to utilize proper component composition constructs
* We will be able to compose react components through the use of props

#### Configuration  
* [x]`README.md`
* [x]`.babelrc`
* [x]`.gitignore`
* [x]`package.json`
* [x]`webpack.config.js`
* [x]`src/**`
* [x]`src/main.js`
* [x]`src/style`
* [x]`src/style/main.scss`

#### Requirements  
#### Feature Tasks
refactor and add the following components:

###### NoteUpdateForm
* [x]create a `NoteUpdateForm` component
    - [] that inherits a note through props
  * []on submit, this should update the App's state with an updated note

###### Refactor the NoteItem Component
* [x] add a NoteItem component
* include the following behavior:
  * [] if the user double clicks on a note's content, it should switch to the edit view  
* default view
  * [] display the note content and a delete button
  * [] the delete button should remove the note from the application's state
* edit view
  * [] show the `NoteUpdateForm` and a cancel button
  * [] `onNoteUpdateForm` submit (or click of the cancel button) should switch back to the default view

###### App Component Tree
Your components should be nested in the following layout  
```
[x]App
  [x][Dashboard] optional
  [x]NoteCreateForm
  [x]NoteList
    [x]NoteItem
      [x]NoteUpdateForm
```

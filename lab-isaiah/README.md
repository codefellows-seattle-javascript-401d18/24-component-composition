![cf](https://i.imgur.com/7v5ASc8.png) 22: Forms and Props
======

# Lab22-Isaiah

### Completed Following Featured Tasks:
+ [x] App Component
  * [x] should contain all of the **application state**
  * [x] should contain methods for modifying the application state
  * [x] the state should have a topics array for holding the results of the search

+ [x] SearchForm Component
  * [x] should contain a text input for the user to supply a reddit board to look up
  * [x] should contain a number input for the user to limit the number of results to return
    * [x] the number must be greater than 0 and less than 100
  * [x] `onSubmit` the form should make a request to reddit
    * [x] it should make a get request to `http://www.reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`
    * [x] on success, it should pass the results to the application state
    * [x] on failure, it should add a class to the form called "error"
      * [x] this should apply a red border to the form elements (shows a visual user validation error)

+ [x] SearchResultList Component
  * [x] should inherit all search results through `props`
    * [x] this component does not need to have its own state!
  * [x] if there are topics listed in the application state, it should display an unordered list of topics
  * [x] each list item should contain the following
    * [x] an `<a>` tag with an `href` that points to the `topic.url`
    * [x] inside the `<a>` tag, include an `<h2>` tag with the `topic.title`
    * [x] after the `<a>` tag (*not nested as a child*), include a `<span>` tag with the number of `topic.ups` (topic upvotes)

### Documentation:
The purpose of this app is to obtain a better understanding of how React can be used to render html elements to the DOM. This exercise brief introduces scraping as a concept and allows the flexibility to take different approaches(ie. localStorage()).

##### The following is the assignment as presented:

```md
![cf](https://i.imgur.com/7v5ASc8.png) 22: Forms and Props
======

## Submission Instructions
  * fork this repository & create a new branch for your work
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Learning Objectives  
* students will be able to manage controlled inputs
* students will learn to pass data from parent components to child components through the use of `props`

## Requirements  
#### Configuration  
* `README.md`
* `.gitignore`
* `.eslintrc.json`
* `.babelrc`
* `package.json`
* `webpack.config.js`
* `src/**`
  * `src/main.js`
  * `src/index.html`
  * `src/style`
  * `src/style/main.scss`

#### Feature Tasks
* create the following components and structure them according to the diagram below:
```
![cf](https://i.imgur.com/7v5ASc8.png) 23: Components and Routing
======

## Submission Instructions
  * fork this repository & create a new branch for your work
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Learning Objectives
* students will be able to create front end routes through the use of `react-router-dom`
* students will be able to restructure their applications to use modular components
* students will be able to differentiate between view state and application state
* students will be able to lift application state to better control one way data flow

#### Configuration  
* `README.md`
* `.babelrc`
* `.gitignore`
* `.eslintrc.json`
* `package.json`
* `webpack.config.js`
* `src/**`
* `src/main.js`
* `src/index.html`
* `src/style`
* `src/style/main.scss`

#### Feature Tasks
* create the following component and structure it according to the diagram below:
```
App
  NoteCreateForm
```
###### App Component
* the app component should manage the entire **application state**
* the state should contain a notes array
* each note should have the following data
  * `id` - always should contain the result of `uuid.v1()`
  * `editing` - false by default
  * `completed` - false by default
  * `content` - user provided content

###### NoteCreateForm Component
* `onSubmit` - the `NoteCreateForm` component should add a note to the application state
* **note:** in your app component, create a method for logging the state of your application when a note is added (ie: `componentDidUpdate`)
  * this should show an array of all notes that have been added to the state

#### Stretch Goals

###### NoteList Component
* should display an unordered list of NoteItem components

###### NoteItem Component
* should display the note content
* should display a delete button
  * `onClick` the note should be removed from the application state
```

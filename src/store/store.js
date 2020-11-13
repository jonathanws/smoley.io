import { createStore } from 'redux'
import rootReducer from './index'

// You can pre-populate things on load, like if
// you had something already stored in localstorage

// let preloadedState
// const persistedTodosString = localStorage.getItem('todos')

// if (persistedTodosString) {
//   preloadedState = {
//     todos: JSON.parse(persistedTodosString)
//   }
// }

const store = createStore(rootReducer) // (rootReducer, preloadedState)

export default store

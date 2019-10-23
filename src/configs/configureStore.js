import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import monitorReducersEnhancer from './monitorReducers'
import loggerMiddleware from './logger'
import rootReducer from '../reducers/rootReducer'

//seperating our store creation keeps our index.js clean
export default function configureStore(preloadedState) {
  //creating our middleware as an array allows us to easiliy add 
  //or remove middleware based on certain conditions, in this case 
  //its common to add a logger for only while in development mode
  const middlewares = []
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware, thunkMiddleware)
  }
  const middlewareEnhancer = applyMiddleware(...middlewares)

  //Same concept could be used for enhancers
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = compose(...enhancers)
  
  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}

import * as React from 'react';

import { connect } from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';

import SearchBar from './SearchBar'

const store = createStore(rootReducer);

class App extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <>
        <SearchBar/>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      ...state,
  }
}

export default connect(mapStateToProps, null)(App);

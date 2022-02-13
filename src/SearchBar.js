import React from 'react';
import {connect} from 'react-redux';
import {searchUser} from './actions/searchUser';
import UserList from './UserList';
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
     searchKeyword: '' 
    };
  }

  onSearchUser=(event)=> {
    this.setState({ 
      searchKeyword: 
      event.target.value 
    },()=>{
      searchUser(this.state.searchKeyword);
    });
    
  }

  render() {
    return (
      <div>
        <input type='text'
          placeholder = "Search"
          onChange={this.onSearchUser}
          value={this.state.searchKeyword} 
        />
        <UserList searchKeyword={this.state.searchKeyword}></UserList>
        </div>
    );
  }
} 
const mapStateToProps = (state) => {
  return {
      ...state,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    searchUser: () => dispatch(searchUser()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
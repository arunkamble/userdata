import * as React from 'react';
import {connect} from 'react-redux';
import data from './data.json';

class UserList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const filteredData = data.filter((data) => {
            //if searched value is blank
            if (this.props.searchKeyword === '') {
                return data;
            }
            //else return user name as per searched string
            else {
                return data.name.toLowerCase().includes(this.props.searchKeyword)
            }
        })
        return(
            <div>{filteredData.map((user,index)=>{
                return(
                    <div key={index}>{user.name}</div>
                )
            })}</div>
        )
    }
} 
const mapStateToProps = (state) => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps, null)(UserList);
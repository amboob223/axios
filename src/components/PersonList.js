// in this component we are using an axios get request to render the data from the backend to the screen like on express 
// first we set up state then a lifecyle component to work during the life cycle of a componenet there are three stages in an apps life
//mounting updating and unmounting
//then we render the infor by mapping through the state

import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component{
    state={
        persons:[]// the brackets is the res.data from axios that we set the state to 
    }

    // in here we put the life cylce component did mount that will only work if the compoennet mounted
    // called imedeatley after a component renders
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(
            res =>{
                console.log(res)
        this.setState({persons:res.data}) 
            } 
             )
      
    }

    render(){
        return <ul>{this.state.persons.map(person=><li key={person.id}>{person.name}</li>)}</ul>
    }//because its return in there we ca chanfe the arrow function 
}
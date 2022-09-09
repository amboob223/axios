// ok in this file we are rendering the input of a user from the api
// we use the class component shit in axios and the this means innside this componenet with the react class so we don got to inmport the state and shit 
// here the state is the actual name and not the collection of names

import React from "react";
import Axios from "axios";

export default class PersonInput extends React.Component{
    
    state ={
        name:""
    }///instead of needing a hook imported we can make it in the class compomnenet

    //now we need a handlesubmit function on the form
    handleSubmit = event =>{
        event.preventDefault(); // we do prevent default in this method when we submit to the browser so it doesnt re render the browser

        const user = {
            name:this.state.name
        } // we making a vairble called user that is class that takes name key anf the value comes from the state we made above
    
        // now we make post request to api

        Axios.post(`https://jsonplaceholder.typicode.com/users`,{user}).then(
            res=>{
                console.log(res)
                console.log(res.data)//res is an object from axios and data is a key inside it we pulled res out by using tghe then promise
             
            })}

        handleChange = event =>{
            this.setState({name:event.target.value})
        } // the event is an object with the parameters name target and value we setting the state name to the value in the text field
            //this.setState coresponds the the state above
    //this is how you declare a function in ES6 but when we call function we got to put this before hand
    //this is how we write a render return render(){}
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Person Name:
                        <input type="text" name="name" onChange={this.handleChange}/>
                </label>
                <button>submit</button>
            </form>
        )}}
    
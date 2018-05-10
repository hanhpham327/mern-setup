import React, {Component} from 'react';
import axios from 'axios';
class Test extends Component {
    componentDidMount(){
        this.getUserData();
    }
    async getUserData(){
        const response= await axios.get('http://localhost:9000/user-data');
        // we have to put await in front of axios
        //don't forget a sync in front of the function
        console.log('User Data Response:  ', response )
    }
    render(){
        return <h1> Test Component </h1>
    }
}
export default Test;
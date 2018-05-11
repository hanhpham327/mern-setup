import React, {Component} from 'react';
import axios from 'axios';
class Test extends Component {
    componentDidMount(){
        this.getUserData();
        this.getArticle();
        this.sendData();

    }
    async getArticle(){
        const response = await axios.get('/api/get-article');
        console.log("Article Data: ",response);
    }

    async sendData(){
        const dataToSend = {
            something:"Here is something",
            anotherthing:"Here is another thing",
            stuff:"What is all this then?"
        }
        const response = await axios.post('/api/send-data',dataToSend);
        console.log("Send Data: ",response)
    }

    async getUserData(){
        const response= await axios.get('/api/user-data');
        // we have to put await in front of axios
        //don't forget a sync in front of the function
        console.log('User Data Response:  ', response )
    }
    render(){
        return <h1> Test Component </h1>
    }
}
export default Test;
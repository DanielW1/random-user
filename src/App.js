import React, { Component } from 'react';

import './App.css';
import ListItem from './components/ListItem/ListItem';

const HOST_URL ="https://randomuser.me/api/";

class App extends Component {

  state={
    users:[],
  }
    componentDidMount(){
      this.getUsers().then(resp=>resp.json()).then(({results}) => {
        this.setState({users:results});
      });
    }

    getUsers(){
     return fetch(HOST_URL +"?results=10");
    }

  render() {
    const {users}= this.state;
    return (
      <div className="App">
        <div>
          {
            users.map((user)=><ListItem key={user.login.uuid} data={user}></ListItem>)
          }
        </div>
      </div>
    );
  }
}

export default App;

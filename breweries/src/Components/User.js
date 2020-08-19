import React from 'react';
import '../App.css';
import Fire from './Fire';

class User extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      messages:[]
    }
  }
  componentWillMount=()=>{
    let messageRef = Fire.database().ref('messages').orderByKey().limitToLast(100);
    messageRef.on('child_added',snapshot => {
      let message = { text : snapshot.val(),id : snapshot.key};
      this.setState({ messages : [message].concat(this.state.message)});
    })
  }
  addMessage=(e)=>{
    e.preventDefault();
    Fire.database().ref('messag').push(this.inputEl.value);
    this.inputEl.value = '';
  }
  render(){
  return (
 <form onSubmit={this.addMessage.bind(this)}>
   <input type ='text' ref={el => this.inputEl = el }/>
   <input type ='submit'/>
   <ul>
          {
            this.state.messages.map( message => <li key={message.id}>{message.text}</li>)
          }
        </ul>
 </form>
  );
}
}
export default User;
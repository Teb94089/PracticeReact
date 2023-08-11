import React, {Component} from 'react';
import './App.css'
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Messsage from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import Classclick from './components/Classclick';
import EventBind from './components/EventBind';

class App extends Component {
 render(){
  return (
    <div className='App'>
      <EventBind/>
    
      {/*
      <Classclick></Classclick>
      <FunctionClick/>
      <Counter/>
      <Messsage/>
      *<Greet name="By" heroName="Bartman">
      <p>This is children props</p></Greet>
      <Greet name="Bu" heroName="Superman" ><button>Action</button></Greet>
      <Greet name="Br"heroName="Spiderman" />
      <Welcome name="Bunny" heroName="Bartman"/>
      <Welcome name="Culture" heroName="Superman"/>
      <Welcome name="Khethelo" heroName="Spiderman"/>
      {/*<Hello></Hello>
  */}
  {/*Desturing props
      <Greet name="By" heroName="Wonder Woman"></Greet>
      <Welcome name="Bunny" heroName="Bartman"/>*/}
      </div>
       
  );
}
}

export default App;

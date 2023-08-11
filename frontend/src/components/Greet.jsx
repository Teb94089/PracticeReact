import React from "react";
//Function
/*function Greet(){
    return <h1>Hello Yolz</h1>
}*/
//ES6 function
/*const Greet = (props) => {
    console.log(props)
    return(
        <div>
    <h1>Hello {props.name} a.k.a {props.heroName} 
    </h1>
    {props.children}
    </div>
    )   

}*/
{/*Destructuring props and state
const Greet = ({name, heroName}) => {
   
    return(
        <div>
    <h1>Hello {name} a.k.a {heroName} 
    </h1>
    
    </div>
    )   

}*/}
/*Destructuring props and state*/
const Greet = (props) => {
    const {name, heroName} = props
    return(
    <div>
    <h1>Hello {props.name} a.k.a {props.heroName} 
    </h1>
    {props.children}
    </div>
    )   

}
export default Greet
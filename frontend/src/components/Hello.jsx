import React from "react";

const Hello = () => {
   /* return(
        <div classsName= 'dummyClass'>
            <h1>Hello Yolie</h1>
        </div>
    )*/
    return React.createElement('div',
     {id: 'Hello', className: 'dummyClass'}, 
    React.createElement('h1','null', 'Hello Yolanda' ))
}
export default Hello
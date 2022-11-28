import React, { useState, useEffect } from 'react'
//useEffect controls what happens depending on the components stage in the lifecycle. 

const Text = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        console.log("component mounted")
        //it console logs twice bc of the strict mode
        //only console logs when the component is mounted. Exactly when the component mounts.
        //so when you make an api call it only does it when the component appears
        //whenever the "Text" component rerenders, whether that is a prop or a state like text state, it will keep console logging.
        //you can specify when you want state to change by specifying it in an empty array
        return () => {
            console.log("component unmounted")
            //this is useful for when you want to make the logic for api call disappear. 
        }
    }, [text]);

  return (
    <div>
        <input onChange={(e) =>{
            setText(e.target.value)
        }}
        />
    <h1>{text}</h1>

    </div>
  )
}

export default Text
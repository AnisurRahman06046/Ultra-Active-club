import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div>
             <h1>Questions and Answers</h1>  
        <details>  
            <summary>How does Reac Work ?</summary>  
            <h3>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</h3>  
        </details>  
        <details>  
            <summary>Difference between props and state</summary>  
            <h3>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly. On the contrary , Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</h3>  
        </details>  
        <details>  
            <summary>Use of useEffect except fetching data from API</summary>  
            <h3>Except loading or fetching data from API , useEffect do : <strong>Running on state change:</strong>  validating input field, live filtering, trigger animation on new array value
            <strong>Running on props change:</strong> update paragraph list on fetched API data update, updating fetched API data to get BTC updated price</h3>  
        </details>  
        </div>
    );
};

export default Questions;
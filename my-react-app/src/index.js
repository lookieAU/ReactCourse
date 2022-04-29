import React from 'react';
import ReactDOM from 'react-dom/client';

class Car extends React.Component{
  render(props){
    return <h1>Hello {props.color}</h1>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color = "blue"/>);


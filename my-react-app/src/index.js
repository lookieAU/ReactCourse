import React from 'react';
import ReactDOM from 'react-dom/client';

class Car extends React.Component{
  constructor(props){
    super(props);
    this.state ={year: "2022", brand: "TVS"};

  }
  changefunc = () => {
    this.setState({year: "2010"});
  }
  render(){
    return(
      <>
      <div>
        <h1>Car list {this.state.year} and {this.state.brand}</h1>
        <button type="button" onClick={this.changefunc}>Change Year</button>
      </div>
      <form >
        <label for = "name">Enter your Name:</label>
        <input type = "text"  name = "name"/>
        <button type = "submit">Submit the form</button>
      </form>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color = "blue"/>);


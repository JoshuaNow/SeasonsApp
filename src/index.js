import React from "react";
import ReactDOM from "react-dom";

// rules of creating a class components
// 1. Must be a JavaScript Class // not classes like oop
// 2. must extend( subclass) React.Component
// 3. Must define a 'RENDER' Method that returns some amount of JSX

// const App = () => {
//   // this takes a while to get invoked
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err),
//   );

//   return <div>hello there</div>;
// };

// Rules of state
//1. state is a JS object that contains data relevant to a component
//2/ updating 'state' on a component causes the components to almost instantly rerender
//3. state must be initialized when a component is created
// 4. STATE CAN ONLY BE UPDATED USING THE FUNCTION 'setState

//TODO
// initialize state
// render state
// update state
class App extends React.Component {
  // this is not required by react it is specific to javaScript not react

  constructor(props) {
    super(props); // super a reference to the parents constructor functions
    // this is the only time we do a direct assingment to this.state
    this.state = { lat: null }; // we don't know the latitude yet so we need a place holder number with null

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called setState
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err),
      // we do not do this.
      //this.state.lat = position.coords.latitude;
    );
  }

  // React says we haver to define render!!
  render() {
    return <div>{this.state.lat} </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

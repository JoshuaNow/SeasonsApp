import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

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

  //   constructor(props) {
  //     super(props); // super a reference to the parents constructor functions
  //     // this is the only time we do a direct assingment to this.state
  //     // must be called this.state
  //     this.state = { lat: null, errMessage: "" }; // we don't know the latitude yet so we need a place holder number with null
  //   }

  state = { lat: null, errorMessage: "" }; // this  is the same as the code above since babel takes care of it

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      // we called setState this does not run untill after we fetch our information

      (err) => this.setState({ errMessage: err.message }),
    );
    // we do not do this.
    //this.state.lat = position.coords.latitude;
  }
  // life cycle methods
  //   componentDidMount() { // single update
  //     console.log("My component was rendered to the screen");
  //   }
  //   componentDidUpdate() { // gets called every time right after rerender
  //     console.log("my component was just updated = it rerendered!");
  //   }

  // React says we have to define render and must return jsx!!

  // helper function
  renderContent() {
    if (this.state.errMessage && !this.state.lat) {
      return <div> err: {this.state.errMessage}</div>;
    }
    if (!this.state.errMessage && this.state.lat) {
      return (
        <div>
          {" "}
          <SeasonDisplay lat={this.state.lat} />{" "}
        </div>
      );
    }
    return <Spinner message="Please accept location request" />;
  }
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

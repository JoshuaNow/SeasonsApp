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

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err),
    );
    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

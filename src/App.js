// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   render() {
//     // can pass a variable to DOM
//     const message = `Hello from Ironhack`
//     return (
//       <div className="App">
//         <h1> Hello Ironhackers! </h1>
//       {/* passing variable to DOM with {} */}
//         <h1>{message}</h1>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import "./App.css";
import User from "./User.js";
import ReactPlayer from "react-player";
import WelcomeDialog from './Dialog';

class App extends Component {

  logger2 = () => {
    console.log(`This is the second logger`);
  };

  render() {
    const formatName = user => {
      return `${user.firstName} ${user.lastName}`;
    };

    const user = {
      firstName: "Christopher",
      lastName: "Vazquez",
      avatarUrl:
        "https://assets.pernod-ricard.com/nz/media_images/test.jpg?hUV74FvXQrWUBk1P2.fBvzoBUmjZ1wct"
    };

      // unlikely
      const logger = () => {
        console.log(`I'm playing`);
      };

    // const displayAvartar = (user) => {
    //   if(user.avatarUrl){
    //     return <img src={user.avatarUrl} />
    //   } else {
    //     return <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300'/>
    //   }
    // }

    
    // refactored above code with es6
    const displayAvartar = user => {
      const { avatarUrl } = user;
      return avatarUrl ? (
        <img src={avatarUrl} />
      ) : (
        <img
          src="https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
          width="300"
          height="300"
        />
      );
    };

    const element = <h2>Hello, {formatName(user)}!</h2>;

    return (
      <div className="App">
        {/* functional  */}
        <User firstName="Chris" lastName="Vazquez"/>
        {/* can use 2 users with same functional component */}
        <User firstName="Elliot"/>
        <User lastName="Vazquez"/>

        {/* HTML */}
        <h1> Hello Ironhackers! </h1>
        {/* const formatName */}
        {element}
        {displayAvartar(user)}


        {/* react player -- npm install react-player -- */}
        <ReactPlayer url="https://vimeo.com/channels/top/22439234" />

        {/* youtube player */}
        <ReactPlayer
          url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
          playing
          controls
          volume='0.5'
          onPlay={logger}
          onStart={this.logger2}
        />

        {/* Composition in React */}
        <WelcomeDialog />
      </div>
    );
  }
}

export default App;

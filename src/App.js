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

class App extends Component {
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
        <h1> Hello Ironhackers! </h1>
        {element}
        {displayAvartar(user)}
      </div>
    );
  }
}

export default App;

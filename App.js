import React from 'react';
class App extends React.Component {
  render(){
    return <h1>Hello World!</h1>
  }
}

// other way to create an element with class extention
// class App extends React.Component {
//   render() {
//     return React.createElement('h1', null , 'Hello World!')
//   }
// }

// create an element with a const
//const App = () => <h1>Hello World!</h1>
export default App

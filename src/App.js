import React,{ Component } from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>
//           Welcome to Firebase
//         </h2>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  componentDidMount() {
    console.log('setup firebase')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            Welcome to Firebase
          </h2>
        </header>
      </div>
    );
  }
  
}

export default App;

import React,{ Component } from 'react';
import './App.css';
import firestore from '../firebase';
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
    const posts = firestore.collection().get();
    console.log(posts);

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

import React,{ Component } from 'react';
import './App.css';
import { firestore } from './firebase';
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

  componentDidMount = async () => {
    const snapshot = await firestore.collection('posts').get();
    const posts = snapshot.docs.map(doc => { return {id: doc.id, ...doc.data() } });
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

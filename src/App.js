import React,{ Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'bulma/css/bulma.css'
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Posts from './Posts';
import { firestore } from './firebase';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts : []
    }
  }

  // componentDidMount = async () => {
  //   const snapshot = await firestore.collection('posts').get();
  //   const posts = snapshot.docs.map(doc => { return {id: doc.id, ...doc.data() } });
  //   this.setState({ posts })
  // }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/posts" component={Posts} />
          </Switch>
        </div>
      </Router>
    );
    
  }
  
}

export default App;

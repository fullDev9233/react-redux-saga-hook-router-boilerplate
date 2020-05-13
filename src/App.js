import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <h1>App</h1>
//       <button onClick={}></button>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return(
      <div className='App'>
        <Router>
          <button>
            <Link to='/abs'>
              Search
            </Link>
          </button>
        </Router>
        
      </div>
    );
  }
}

export default App;

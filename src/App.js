import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Posts />
        </div>
      </header>
    </div>
  );
}

export default App;

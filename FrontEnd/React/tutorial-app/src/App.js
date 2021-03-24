import './App.css';
import MyComponent from './components/MyComponent';
import Card from './components/Card/Card';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="hello-world">Hello World!</h1>
        <Card header="Header" text="Hello World" />
        <Card header="Header 2" text="New text" />
      </header>
    </div>
  );
};

export default App;

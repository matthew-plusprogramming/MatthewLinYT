import './App.css';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
      </header>
    </div>
  );
};

export default App;

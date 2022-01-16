import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

function App(user) {
  return (
    <div className="App">
      <div id="root">{user.firstName + ' ' + user.lastName}</div>
    </div>
  );
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

const element = <h1>Hello, {App(user)}!</h1>;

ReactDOM.render(element, document.getElementById('root'));

export default App;

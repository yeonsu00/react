import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez',
// };

// function App(user) {

//   return (
//     <div className="App">
//       {/* <div id="root">{user.firstName + ' ' + user.lastName}</div> */}
//       <div id="root"></div>
//       <div id="root2"></div>
//     </div>
//   );
// }

// const element = (
//   <h1>
//     {/* Hello, {App(user)}! */}
//     Hello, world!
//   </h1>
// );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello world</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

function App(props) {
  return <h1>Hello, {props.name}</h1>
}

const element = <App name="Yeonsu" />;

ReactDOM.render(element, document.getElementById('root'));

// export default App;

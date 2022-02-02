import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';

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

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Yeonsu" />
//       <Welcome name="Sara" />
//     </div>
//   );
// }
// //const element = <Welcome name="Yeonsu" />;

// ReactDOM.render(<App />, document.getElementById('root'));

// export default App;


/*컴포넌트 추출*/
// function Component(props) {
//   return (
//     <Comment user={props.author}/>
//   );
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.author}/>
//       <div className="UserInfo-name">
//         {props.author.name}
//       </div>
//     </div>
//   );
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author}/>
//       <div className="Comment-text"> 
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }


/*state와 생명주기*/
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
  
//   componentDidMount() {
//     this.timerId = setInterval(
//       () => this.tick(), 1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerId);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );


/*이벤트 처리하기*/
// function Form() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log('You clicked submit');
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//     <button type="submit">
//       Submit
//     </button>
//     </form>
//   );
// }

// ReactDOM.render(
//   <Form />,
//   document.getElementById('root')
// );

// function App() {
// // function Form() {
// //   function handleSubmit(e) {
// //     e.preventDefault();
// //     console.log('You clicked submit');
// //   }

// //   return (
// //     <form onSubmit={handleSubmit}>
// //     <button type="submit">
// //       Submit
// //     </button>
// //     </form>
// //   );
// // }

// // ReactDOM.render(
// //   <Form />,
// //   document.getElementById('root')
// // );
// }


/*이벤트처리하기 ON OFF*/
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);





























// import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {

//   //ES6 desturcturing 문법
//   //let [글제목,글제목변경] = useState('남자 코트 추천');
//   let [글제목2,글제목변경2] = useState(['남자 코트 추천','여자 코트 추천','바지 추천']);
//   // 이렇게 state로 해야 html이 재렌더링이 된다

//   let [따봉, 따봉변경] = useState(0);

//   let posts = '강남 고기 맛집';
//   function 함수(){
//     return 100;
//   }

//   function 제목바꾸기(){
//     let newArray = [...글제목];
//     newArray = '여자코트 추천';
//     글제목변경(newArray);
//   }

//   function 제목여러개바꾸기(){
//     글제목변경2(['곱창 맛집','아구찜 맛집','강남 우동 맛집']);
//   }

//   function 제목여러개중하나바꾸기(){
//     let newArray = [...글제목2];
//     newArray[0] = '바뀜~~';
//     글제목변경(newArray[0]);
//   }


  
//   return (
//     <div className='App'>
//       {/* <div className='black-nav'>
//         <div>개발 Blog</div>
//       </div> */}
//       {/* <div>
//         <img src={logo} className="App-logo" alt="logo" />
//       </div> */}
//       {/* <div>
//         <button onClick={ 제목바꾸기 }>버튼1</button>
//         <button onClick={ 제목여러개바꾸기 }>버튼2</button>
//         <button onClick={ 제목여러개중하나바꾸기 }>버튼3</button>
//       </div> */}
//       {/* <h4 style={{color:'blue', fontStyle:'italic'}}> {posts}</h4>
//       <h4> {함수()}</h4>
//       <div className='list'>
//         <h3> { 글제목 } </h3>
//         <p>2월 17일 발행</p>
//         <hr/>
//       </div> */}
//       {/* <div className='list'>
//         <h3> { 글제목2[0] } <span onClick={ 함수() }>♥</span> 0 </h3>
//         <p>2월 17일 발행</p>
//         <hr/>
//       </div> */}
//       {/* <div className='list'>
//         <h3> { 글제목2[1] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>♥</span> {따봉}  </h3>
//         <p>2월 17일 발행</p>
//         <hr/>
//       </div> */}
//       {/* <div className='list'>
//         <h3> { 글제목2[2] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>♥</span> 0  </h3>
//         <p>2월 17일 발행</p>
//         <hr/>
//       </div> */}
//       {/* Modal 컴포넌트 삽입 */}
//       {/* <Modals></Modals> */}
//     </div>
//   );
// }

// // function Modals(){
// //   //Component의 이름은 항상 대문자로 시작해야한다.
// //   //return 속 태그는 반드시 하나로 묶어야함 (연속되게 등장 못함)
// //   //의미없는 div 같은걸로 묶기 싫으면 <> </>와 같이 fragment로 묶어도 ㄱㅊ
// //   return(
// //     //Component 안에 Component 넣기
// //     <>
// //       <Modal title="hihi"></Modal>
// //       <Modal title="wowow"></Modal>
// //     </>
// //   )
// // }

// // function Modal(props){
// //   return(
// //     <div className='modal'>
// //       <h2>{props.title}</h2>
// //       <p>날짜</p>
// //       <p>상세내용</p>
// //     </div>
// //   )
// // }

// export default App;
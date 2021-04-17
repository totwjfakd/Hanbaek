/* eslint-disable */
// warning이 뜨지 않음
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom' //****

//import { Route } from 'workbox-routing';



function PostComponent() {
  return (

    <div>새로운 컴포넌트, 글이 자리잡을 컴포넌트 입니다.</div>
  );
}
function PostList() {
  let [postName, postNameChange] = useState(['남자 코트 추천', '1', '2']); // [a, b] array 생성  [state 데이터, state 데이터 변경 함수]
  // state의 장점 : react를 웹 앱처럼 동작하게 만들경우
  // 데이터를 변경해도 바로바로 바뀜. 새로고침 없이 재랜더링 가능
  let [like, likeChange] = useState(0);
  return (
    
    <div>
      <div className="list">
        <h3> {postName[0]} <button onClick={() => { likeChange(like + 1) }}>👍</button> {like} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {postName[1]} <span>👍</span> 0 </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {postName[2]} <span>👍</span> 0 </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}
function App() { //component





  function changePostName() {
    let newArray = [...postName];
    newArray[0] = '여자 코트 추천';


    postNameChange(newArray);
  }




  return (
    <div className="App">
      <div className="black-nav">
        <div >
          개발 Blog
            </div>
      </div>

      
      <BrowserRouter>
        <header>
        <Link to="/">
            <button>
              홈
          </button>
          </Link>
          <Link to="/page">
            <button>
              글이동
          </button>
          </Link>
          
        </header>
        <hr/>
        <body>
          <Route exact path="/" component={PostList} />
          <Route path="/page" component={PostComponent} />
        </body>
      </BrowserRouter>


    </div>
  );
}

function Modal() { //component
  return (
    <div className="modal"> 
      <h2>제목</h2>
      <p>날씨</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;

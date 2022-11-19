const { createStore } = require("redux");

const reducer = (prevState, action) => {
  //디스패치 된 액션은 미리 만든 reducer에 걸려서 다음 state를 만듬
  //새로운 state를 만들어준다.
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        user: null,
      };
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};
const initialState = {
  user: null,
  posts: [],
};
//처음 상태

// const nextstate = {
//     ...initialState
//     post: [action.data],
// };
// 다음 상태
//
// const nextstate2 = {
//     ...initialState
//     post: [...initialState.post, action.data],
// };
// 다음 다음 상태

const store = createStore(reducer, initialState);
console.log(store.getState());

const logIn = (data) => {
  // action
  return {
    type: "LOG_IN",
    data,
  };
};

const logOut = () => {
  //action
  return {
    type: "LOG_OUT",
  };
};

const addPost = (data) => {
  //action
  return {
    type: "ADD_POST",
    data,
  };
};

// 위에는 미리 작성해야하는 코드이다.
//___________________________________
// 아래는 리액트에서 실행하는 코드
// 디스패치 부분은 리액트에서 작성한다,

store.dispatch(
  logIn({
    id: 1,
    name: "seongjun",
    admin: true,
  })
);
//디스패치

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "안녕하세요 첫번째 게시글",
  })
);
//디스패치

store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: "안녕하세요 두번째 게시글",
  })
);
//디스패치

store.dispatch(
  addPost({
    userId: 1,
    id: 3,
    content: "안녕하세요 세번째 게시글",
  })
);
//디스패치

store.dispatch(logIn());
//디스패치

console.log(store.getState());

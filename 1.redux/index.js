const { createStore } = require("redux");

const reducer = (prevState, action) => {
  //디스패치 된 액션은 미리 만든 reducer에 걸려서 다음 state를 만듬
  //새로운 state를 만들어준다.
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: action.data,
      };
    case "CHANGE_COMP_B":
      return {
        ...prevState,
        compB: action.data,
      };
    case "CHANGE_COMP_C":
      return {
        ...prevState,
        compC: action.data,
      };
    default:
      return prevState;
  }
};

const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};
//처음 상태

const store = createStore(reducer, initialState);

store.subscribe(() => {
  // react-redux 안에 들어있다.
  console.log("changed"); //화면 바꿔주는 코드 여기서
});

console.log("1nd", store.getState());

const changeCompA = (data) => {
  return {
    //action
    type: "CHANGE_COMP_A",
    data,
  };
};
//액션 만들기

//이런 중복을 피하고자 위에 changeCompA라는 함수 설정
// store.dispatch({
//     type:'CHANGE_COMP_A',
//     data:'b',
// })
//
// store.dispatch({
//     type:'CHANGE_COMP_A',
//     data:'c',
// })
//
// store.dispatch({
//     type:'CHANGE_COMP_A',
//     data:'d',
// })

store.dispatch(changeCompA("b"));
//디스패치

console.log("2nd", store.getState());

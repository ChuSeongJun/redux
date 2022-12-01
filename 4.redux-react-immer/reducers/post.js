// const initialState = [];
//
// const postReducer = (prevState = initialState, action) => {
//   // 새로운 state 만들어주기
//   switch (action.type) {
//     case "ADD_POST":
//       return [...prevState, action.data];
//     default:
//       return prevState;
//   }
// };
//
// module.exports = postReducer;

//위에 코드가 immer를 써서 변경

const { produce } = require("immer");

const initialState = [];

const postReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    //이것을 작성하고 사이에 넣으면된다.
    // 새로운 state 만들어주기
    switch (action.type) {
      case "ADD_POST":
        draft.push(action.data);
        break;
      default:
        break;
    }
  });
};

module.exports = postReducer;

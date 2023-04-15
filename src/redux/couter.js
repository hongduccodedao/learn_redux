const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREMENT_BY = "increment_by";

// khởi tạo store ban đầu: là một object có property là count và giá trị là 0
const initialStore = {
  count: 0,
};

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const incrementBy = (value) => ({
  type: INCREMENT_BY,
  payload: value,
  // payload là tên mặc định của redux, nếu muốn đổi tên thì phải đổi tên trong reducer
})

function counterReducer(state = initialStore, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      }
    }

    case INCREMENT_BY: {
      return {
        ...state,
        count: state.count + action.payload,
      }
    }

    default:
      return state;
  }
}

export default counterReducer;

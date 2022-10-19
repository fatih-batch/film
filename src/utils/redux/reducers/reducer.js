const initialState = {
  favorites: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "start":
      return {
        ...state,
        loading: true,
      };
    case "getFavorites":
      return {
        ...state,
        favorites: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

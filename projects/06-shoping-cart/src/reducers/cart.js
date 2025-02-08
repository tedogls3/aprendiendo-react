export const cartInitialState = [];

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const productInCartIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        return newState;
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "REMOVE_FROM_CART": {
      return state.filter((item) => item.id !== action.payload.id);
    }

    case "CLEAR_CART": {
      return cartInitialState;
    }
  }

  return state;
};

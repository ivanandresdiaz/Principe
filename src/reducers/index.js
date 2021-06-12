const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CARRITO':
      return {
        ...state,
        carrito: [...state.carrito, action.payload],
      };
    case 'DELETE_CARRITO':
      return { ...state,
        carrito: state.carrito.filter((item) => {
          return (item.id !== action.payload.id);
        }) };
    case 'SET_PURCHASE':
      alert('compra exitosa');
      return { ...state, purchase: action.payload, carrito: [] };
    default:
      return state;
  }

};
export default reducer;

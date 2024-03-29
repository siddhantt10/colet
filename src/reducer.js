export const initialState = {
    cart: [],
    user: null,
};

export const getCartTotal = (cart) =>
cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case "set_user":
            return{
                ...state,
                user: action.user,
            };
        case "add_to_cart":
            return {
                ...state,
                cart: [...state.cart, action.item]
            };
        case "remove_from_cart":
            let newCart = [...state.cart];

            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id)
            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.log(index);
            }

            return {...state, cart: newCart};
    
        default:
            return state;
    }
}

export default reducer;
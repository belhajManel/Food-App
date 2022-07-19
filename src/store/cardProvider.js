import React , {useReducer} from "react";
import CartContext from "./card-context";

const defaultCartState = {
    items: [],
    totalAmount : 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updateItems = state.items.concat(action.item);
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount ;
        return {
            items : updateItems,
            totalAmount : updateTotalAmount
        };
    }
    return defaultCartState;
}


const cardProvider = (props) =>  {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemCartHnadler = (item) => {
        dispatchCartAction({
            type : 'ADD',
            item : item
        });
    };

    const removeItemCartHnadler = (id) => {
        dispatchCartAction({
            type : 'REMOVE',
            id : id
        });
    };


    const cartContext = {
        items : cartState.items,
        totalAmount : cartState.totalAmount,
        addItem :addItemCartHnadler ,
        removeItem: removeItemCartHnadler
    };

    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default cardProvider;
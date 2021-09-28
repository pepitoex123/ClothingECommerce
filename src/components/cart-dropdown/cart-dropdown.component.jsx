import React from "react";
import {connect} from "react-redux";
import { Link, withRouter} from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";


const CartDropdown = ({cartItems,dispatch}) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem}/>) : <span className="empty-message">YOUR CART IS EMPTY</span>
                }
            </div>
            <Link to={"/checkout"} onClick={() => dispatch(toggleCartHidden())}>
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </Link>
        </div>
    )
}


const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
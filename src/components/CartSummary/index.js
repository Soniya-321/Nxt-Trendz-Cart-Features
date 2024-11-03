// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = props => {
  const {totalSum} = props
  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        return (
          <div className="cart-summary-container">
            <h1 className="order-total">
              Order Total: <span>Rs {totalSum}/-</span>
            </h1>
            <p className="items-in-cart">{cartList.length} Items in cart</p>
            <button className="check-btn">Checkout</button>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartSummary

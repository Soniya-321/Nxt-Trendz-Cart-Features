import Header from '../Header'
import CartListView from '../CartListView'
import CartSummary from '../CartSummary'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      const pricesList = cartList.map(each => each.price * each.quantity)
      const totalSum = pricesList.reduce(
        (acc, currentValue) => acc + currentValue,
        0,
      )

      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart

      const OnClickRemoveAllBtn = () => {
        removeAllCartItems()
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  className="remove-all-btn"
                  onClick={OnClickRemoveAllBtn}
                >
                  Remove All
                </button>
                <CartListView />
                <CartSummary totalSum={totalSum} />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart

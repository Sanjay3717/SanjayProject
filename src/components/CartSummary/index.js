// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(element => {
        total += element.price * element.quantity
      })
      return (
        <div className="cart-summary-container">
          <h1>
            Order Total: <span>RS {total}/-</span>
          </h1>
          <p>{cartList.length} items in cart</p>
          <button type="button" className="check-out-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary

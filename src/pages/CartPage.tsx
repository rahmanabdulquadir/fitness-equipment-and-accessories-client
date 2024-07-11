import CartCard from "../components/ui/cart/CartCard";
import { removeFromCart, updateCartQuantity } from "../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const CartPage = () => {
    //grab cart data from local state
    const cart = useAppSelector((state: RootState) => state.cart);
    const dispatch = useAppDispatch();
    // calculate total price
    const totalPrice = () => {
      return cart.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    };
    // handle remove from cart
    const handleRemoveFromCart = (id: string) => {
      if (
        window.confirm("Are you sure you want to remove this item from the cart?")
      ) {
        dispatch(removeFromCart(id));
      }
    };
    //handle update quantity
    const handleUpdateQuantity = (id: string, quantity: number) => {
      dispatch(updateCartQuantity({ id, quantity }));
    };
    return (
      <CartCard
        cart={cart}
        handleUpdateQuantity={handleUpdateQuantity}
        handleRemoveFromCart={handleRemoveFromCart}
        totalPrice={totalPrice}
      ></CartCard>
    );
};

export default CartPage;

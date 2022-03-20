import { useContext } from "react";
import { ContextType } from "../interfaces";
import { CartContext } from "../CartContext";
import { CartContainer, Button } from "../styledComponents/Cart.styled";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, deleteToCart } = useContext<ContextType>(CartContext);

  const navigate = useNavigate();

  const reduce = items.reduce(
    (acc, val) => Number((acc + val.price).toFixed(2)),
    0
  );

  return (
    <CartContainer>
      {items.length > 0 && <h2>Your cart</h2>}
      <div className="cart-wrapper">
        {items.length > 0 ? (
          <>
            {items.map((item) => {
              return (
                <div key={item.id} className="cart">
                  <div className="cart-title-image">
                    <img src={item.url} alt={item.title} />
                    <h5>{item.title}</h5>
                  </div>
                  <p>X{item.quantity}</p>
                  <p>TOTAL ${item.price}</p>
                  <button onClick={() => deleteToCart(item.id)}>
                    <DeleteOutlineIcon />
                  </button>
                </div>
              );
            })}
          </>
        ) : (
          <div className="empty-cart">
            <h1>Your cart is empty</h1>
            <Button onClick={() => navigate("/drinks")}>
              Continue shopping
            </Button>
          </div>
        )}
      </div>
      {items.length > 0 && (
        <h1>
          <span>Subtotal</span> ${reduce}
        </h1>
      )}
    </CartContainer>
  );
};

export default Cart;

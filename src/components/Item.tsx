import { FC, useContext } from "react";
import { ConfigAllDrinks, ContextType } from "../interfaces";
import { Button } from "../styledComponents/ItemPreview.styled";
import { CartContext } from "../CartContext";

interface Props {
  preview: Array<ConfigAllDrinks>;
  priceDecrementHandler: (idx: number) => void;
  priceIncrementHandler: (idx: number) => void;
}

const Item: FC<Props> = ({
  preview,
  priceDecrementHandler,
  priceIncrementHandler,
}) => {
  const { addToCart } = useContext<ContextType>(CartContext);

  return (
    <>
      {preview.map((item) => {
        return (
          <div className="item-preview-wrapper" key={item.id}>
            <div className="image-side">
              <img src={item.url} alt={`${item.title}`} />
            </div>
            <div className="info-side">
              <div className="info-side-title">
                <h2>{item.title}</h2>
              </div>
              <div className="info-side-price">
                <p>Price: ${item.price}</p>
              </div>
              <div className="info-side-quantity">
                <span>Quantity</span>
                <div className="info-side-quantity-buttons">
                  <button onClick={() => priceDecrementHandler(item.id)}>
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => priceIncrementHandler(item.id)}>
                    +
                  </button>
                </div>
              </div>
              <div className="info-side-purchase-buttons">
                <Button onClick={() => addToCart(item)}>Add to cart</Button>
                <Button>Buy it now</Button>
              </div>
              <div className="info-side-paragraph">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  mollitia, sapiente ipsa maiores labore voluptatibus repellat,
                  aut et magni laboriosam expedita quibusdam consequatur illum
                  veritatis eaque numquam nemo perferendis beatae?
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Item;

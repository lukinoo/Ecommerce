import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ConfigAllDrinks, ConfigFaq } from "../interfaces";
import allDrinksData from "../datas/allDrinks.json";
import { StyledItemPreviewContainer } from "../styledComponents/ItemPreview.styled";
import { fullData } from "../full-data/fullData";
import Faq from "./Faq";
import Item from "./Item";

const ItemPreview = () => {
  const [preview, setPreview] = useState<ConfigAllDrinks[]>([]);
  const [faq, setFaq] = useState<ConfigFaq[]>([]);

  const params = useParams();
  const FULL_DATA = fullData();

  useEffect(() => {
    const filteredData: Array<ConfigAllDrinks> = allDrinksData.filter(
      (el: ConfigAllDrinks) => el.id === Number(params.id)
    );

    setPreview(filteredData);
    setFaq(filteredData[0].faq);

    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [params.id]);

  // quantity decrement function
  const priceDecrementHandler = (idx: number): void => {
    if (preview[0].quantity <= 1) return;

    const priceDecrement: Array<ConfigAllDrinks> = preview.map(
      (item: ConfigAllDrinks) => {
        if (item.id === idx) {
          return {
            ...item,
            quantity: item.quantity - 1,
            price: Number((item.price - FULL_DATA[idx - 1].price).toFixed(2)),
          };
        }
        return item;
      }
    );

    setPreview(priceDecrement);
  };

  // quantity increment function
  const priceIncrementHandler = (idx: number): void => {
    if (preview[0].quantity >= 10) return;

    const priceIncrement: Array<ConfigAllDrinks> = preview.map(
      (item: ConfigAllDrinks) => {
        if (item.id === idx) {
          return {
            ...item,
            quantity: item.quantity + 1,
            price: Number((item.price + FULL_DATA[idx - 1].price).toFixed(2)),
          };
        }
        return item;
      }
    );

    setPreview(priceIncrement);
  };

  // accordion active handler
  const faqActiveHandler = (idx: number): void => {
    const activeFaq: Array<ConfigFaq> = faq.map((item) => {
      if (item.id === idx) {
        return {
          ...item,
          active: !item.active,
        };
      }
      return item;
    });

    setFaq(activeFaq);
  };

  return (
    <StyledItemPreviewContainer>
      <Item
        preview={preview}
        priceDecrementHandler={priceDecrementHandler}
        priceIncrementHandler={priceIncrementHandler}
      />
      <Faq faq={faq} faqActiveHandler={faqActiveHandler} />
    </StyledItemPreviewContainer>
  );
};

export default ItemPreview;

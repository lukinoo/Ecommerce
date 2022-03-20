import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { ContextState, ContextType } from "./interfaces";

export const CartContext = createContext({} as ContextType);

interface Props {
  children: ReactNode;
}

export const CartProvider: FC<Props> = ({
  children,
}: React.PropsWithChildren<Props>): any => {
  const [items, setItems] = useState<ContextState[]>([]);
  const [animation, setAnimation] = useState<boolean>(false);
  const [navBar, setNavBar] = useState<boolean>(false);

  useEffect(() => {
    const cart = localStorage.getItem("cart");

    if (cart === null) {
      localStorage.setItem("cart", JSON.stringify([]));
    } else {
      setItems(JSON.parse(cart));
    }
  }, []);

  const addToCart = (item: ContextState): void => {
    // if item already is in the cart
    if (items.some((e) => e.id === item.id)) return;

    const newItem: Array<ContextState> = [...items, item];

    setItems(newItem);

    setAnimation((c) => !c);

    setTimeout(() => {
      setAnimation((c) => !c);
    }, 400);

    localStorage.setItem("cart", JSON.stringify(newItem));
  };

  const deleteToCart = (idx: number): void => {
    const deleteItems: Array<ContextState> = items.filter(
      (el) => el.id !== idx
    );

    setItems(deleteItems);

    localStorage.setItem("cart", JSON.stringify(deleteItems));
  };

  const navBarHandler = (state: boolean): void => {
    setNavBar(state);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        deleteToCart,
        animation,
        navBar,
        navBarHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

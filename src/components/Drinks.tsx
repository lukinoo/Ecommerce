import {
  StyledAllDrinks,
  StyledAllDrink,
  NavLinks,
} from "../styledComponents/AllDrinks.styled";
import AllDrinksData from "../datas/allDrinks.json";
import { useEffect, useState } from "react";
import { ConfigAllDrinks } from "../interfaces";

const Drinks = () => {
  const [allDrinks, setAllDrinks] = useState<ConfigAllDrinks[]>([]);

  useEffect(() => {
    setAllDrinks(AllDrinksData);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <StyledAllDrinks>
      <h2>All Drinks</h2>
      <StyledAllDrink>
        {allDrinks.map((item: ConfigAllDrinks) => {
          return (
            <NavLinks to={`/preview/${item.id}`} key={item.id}>
              <div className="all-drinks">
                <img src={item.url} alt={item.title} />
                <h3>{item.title}</h3>
                <p>From ${item.price}</p>
              </div>
            </NavLinks>
          );
        })}
      </StyledAllDrink>
    </StyledAllDrinks>
  );
};

export default Drinks;

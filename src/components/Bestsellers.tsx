import { useEffect, useState } from "react";
import bestsellersData from "../datas/bestsellers.json";
import { ConfigBestsellers } from "../interfaces";
import {
  StyledBestsellers,
  StyledBestsellersWrapper,
} from "../styledComponents/Bestsellers";

const Bestsellers = () => {
  const [bestsellers, setBestsellers] = useState<ConfigBestsellers[]>([]);

  useEffect(() => {
    setBestsellers(bestsellersData);
  }, []);

  return (
    <StyledBestsellersWrapper>
      <h2>Meet our bestsellers</h2>
      <StyledBestsellers>
        {bestsellers.map((item: ConfigBestsellers) => {
          return (
            <div key={item.id} className="bestseller">
              <img src={item.url} alt={item.title} />
              <h2>{item.title}</h2>
              <p>From ${item.price}</p>
            </div>
          );
        })}
      </StyledBestsellers>
    </StyledBestsellersWrapper>
  );
};

export default Bestsellers;

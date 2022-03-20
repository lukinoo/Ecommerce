import {
  StyledBundleUpWrapper,
  StyledBundleUp,
} from "../styledComponents/BundleUp.styled";
import BundleUpData from "../datas/bundleup.json";
import { ConfigBundleup } from "../interfaces";
import { useEffect, useState } from "react";

const BundleUp = () => {
  const [bundleUp, setBundleUp] = useState<ConfigBundleup[]>([]);

  useEffect(() => {
    setBundleUp(BundleUpData);
  }, []);

  return (
    <StyledBundleUpWrapper>
      <h2>Meet our bestsellers</h2>
      <StyledBundleUp>
        {bundleUp.map((item: ConfigBundleup) => {
          return (
            <div key={item.id} className="bundle-up">
              <img src={item.url} alt={item.title} />
              <h3>{item.title}</h3>
              <p>From ${item.price}</p>
            </div>
          );
        })}
      </StyledBundleUp>
    </StyledBundleUpWrapper>
  );
};

export default BundleUp;

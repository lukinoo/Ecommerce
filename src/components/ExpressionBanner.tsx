import { StyledExpression } from "../styledComponents/ExpressionBanner.styled";

const ExpressionBanner = () => {
  return (
    <StyledExpression>
      <div className="expression-title">
        <h3>
          “This spicy, pocket-sized booster is the healthy kickstart I need to
          start my day.”
        </h3>
        <em>- JANE S.</em>
      </div>
      <div className="expression-image">
        <img
          src={`https://cdn.shopify.com/s/files/1/0598/0572/8790/files/Screenshot_2022-02-03_at_2.24.52_PM.png?v=1645127289&width=750`}
          alt=""
        />
      </div>
    </StyledExpression>
  );
};

export default ExpressionBanner;

import { useNavigate } from "react-router-dom";
import {
  StyledPreviewContainer,
  Button,
  Title,
} from "../styledComponents/PreviewContainer.styled";

const PreviewContainer = () => {
  const navigate = useNavigate();

  return (
    <StyledPreviewContainer>
      <div className="preview-container-image"></div>
      <div className="preview-container-info">
        <Title>Take a Sip</Title>
        <p>
          Sweet, tart, and oh-so-refreshing, our low-sugar, probiotic lemonades
          taste like summer in a bottle.
        </p>
        <Button onClick={() => navigate("/drinks")}>Shop Lemonades</Button>
      </div>
    </StyledPreviewContainer>
  );
};

export default PreviewContainer;

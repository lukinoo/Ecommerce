import { StyledFooter, Title, Logo } from "../styledComponents/Footer.styled";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-header">
        <div className="footer-header-info">
          <Title>Our mission</Title>
          <p>We offer sustainable access to delicious plant-based nutrition.</p>
        </div>
        <Logo>taste</Logo>
      </div>
      <div className="footer-email-send">
        <div className="footer-email-wrapper">
          <Title>We send delicious emails.</Title>
          <Box>
            <TextField id="filled-basic" label="Email" variant="filled" />
          </Box>
        </div>
        <div className="footer-social-media">
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>TikTok</p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;

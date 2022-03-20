import styled from "styled-components";

export const StyledFooter = styled.footer`
  min-height: 60vh;
  background: #020912;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }
  .footer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin: 0 auto;
    padding: 2rem 0;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .footer-header-info {
      p {
        font-family: "Anonymous Pro", monospace;
        font-size: 1rem;
        color: #fcfcfc;
      }
    }
  }
  .footer-email-send {
    width: 95%;
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      padding: 1rem 0;
    }
    .footer-email-wrapper {
      .MuiFormControl-root {
        .MuiInputLabel-root {
          color: #fcfcfc;
          font-family: "Anonymous Pro", monospace;
          &.Mui-focused {
            color: #fcfcfc;
          }
        }
        .css-cio0x1-MuiInputBase-root-MuiFilledInput-root {
          border: 1px solid #020912;
          border-radius: 0;
          background: none;
          &::after {
            border: none;
          }
          &::before {
            border: none;
          }
        }
      }
      input {
        border: 1px solid #fcfcfc;
        color: #fcfcfc;
      }
    }
    .footer-social-media {
      @media screen and (max-width: 768px) {
        margin-top: 1rem;
      }
      p {
        font-family: "Anonymous Pro", monospace;
        font-size: 1rem;
        color: #fcfcfc;
        letter-spacing: 1.25px;
        padding: 0.2rem 0;
        @media screen and (max-width: 768px) {
          padding: 0.5rem 0;
        }
      }
    }
  }
`;

export const Title = styled.h3`
  font-family: "Lato", sans-serif;
  font-size: 1.5rem;
  letter-spacing: 1.25px;
  color: #fcfcfc;
  margin-bottom: 1rem;
`;

export const Logo = styled.h2`
  font-size: 1.5rem;
  padding: 0.3rem 0.6rem;
  border: 1px solid #fcfcfc;
  font-family: "Anonymous Pro", monospace;
  letter-spacing: 1.25px;
  color: #fcfcfc;
  @media screen and (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

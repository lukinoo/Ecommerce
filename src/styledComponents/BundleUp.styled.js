import styled from "styled-components";

export const StyledBundleUpWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  h2 {
    margin: 2rem 0;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    letter-spacing: 1.25px;
    font-size: 2rem;
  }
`;

export const StyledBundleUp = styled.div`
  min-height: 55vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1.5rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-row-gap: 1.5rem;
  }
  .bundle-up {
    text-align: center;
    &:hover {
      h3 {
        text-decoration: underline;
      }
    }
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    h3 {
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-size: 1.1rem;
      letter-spacing: 1.25px;
      padding: 1.5rem 0;
    }
    p {
      font-family: "Anonymous Pro", monospace;
      font-weight: 100;
      font-size: 1rem;
      padding: 0.5rem 0;
      letter-spacing: 1.25px;
    }
  }
`;

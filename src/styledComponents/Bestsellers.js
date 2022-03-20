import styled from "styled-components";

export const StyledBestsellersWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  h2 {
    margin: 1.5rem 0;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    letter-spacing: 1.25px;
    font-size: 2rem;
  }
`;

export const StyledBestsellers = styled.div`
  min-height: 50vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 1rem;
  .bestseller {
    text-align: center;
    img {
      width: 100%;
      transition: transform 0.3s ease;
    }
    h2 {
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-size: 1.1rem;
      letter-spacing: 1.25px;
    }
    p {
      font-family: "Anonymous Pro", monospace;
      font-weight: 100;
      font-size: 1rem;
      padding: 0 0 1.5rem 0;
      letter-spacing: 1.25px;
    }
  }
`;

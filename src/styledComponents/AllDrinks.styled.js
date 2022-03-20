import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledAllDrinks = styled.div`
  width: 95%;
  margin: 0 auto;
  h2 {
    margin: 2rem 0;
    font-family: "Lato", sans-serif;
    letter-spacing: 1.25px;
    font-size: 3rem;
  }
`;

export const StyledAllDrink = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1.5rem;
  @media screen and (max-width: 376px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .all-drinks {
    text-align: center;
    &:hover {
      h3 {
        text-decoration: underline;
      }
      img {
        transform: scale(1.03);
      }
    }
    img {
      width: 100%;
      transition: transform 0.2s ease;
      object-fit: cover;
    }
    h3 {
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
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

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  color: #020912;
`;

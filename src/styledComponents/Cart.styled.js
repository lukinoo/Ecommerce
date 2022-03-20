import styled from "styled-components";

export const CartContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  h1 {
    margin: 4rem 0;
    text-align: right;
    font-family: "Anonymous Pro", monospace;
    font-weight: 100;
    letter-spacing: 1.25px;
    font-size: 1.7rem;
    span {
      font-family: "Lato", sans-serif;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
  h2 {
    margin: 1.5rem 0;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    letter-spacing: 1.25px;
    font-size: 2.5rem;
  }
  .cart-wrapper {
    height: auto;
    .empty-cart {
      width: 100%;
      min-height: 50vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 3.2rem;
        font-family: "Lato", sans-serif;
        font-weight: 400;
        margin-bottom: 3rem;
        @media screen and (max-width: 768px) {
          text-align: center;
        }
      }
    }
    .cart {
      width: 100%;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0.3rem;
      font-family: "Anonymous Pro", monospace;
      @media screen and (max-width: 376px) {
        flex-direction: column;
      }
      &:nth-child(1) {
        border-top: 1px solid #ddd;
      }
      .cart-title-image {
        display: flex;
        align-items: center;
        img {
          width: 100px;
          height: 140px;
          object-fit: cover;
        }
        h5 {
          font-size: 1.4rem;
          font-family: "Lato", sans-serif;
        }
      }
      button {
        line-height: 1.2em;
        padding: 0.4rem;
        background: none;
        border: none;
        transition: all 0.1s ease;
        cursor: pointer;
        &:hover {
          svg {
            transform: scale(1.05);
          }
        }
        &:focus {
          outline: none;
        }
      }
    }
  }
`;

export const Button = styled.button`
  border: 1px solid #020912;
  color: #020912;
  line-height: 1.2em;
  padding: 0.8rem 1.7rem;
  background: none;
  font-family: "Anonymous Pro", monospace;
  font-size: 16px;
  letter-spacing: 1.25px;
  transition: all 0.1s ease;
  cursor: pointer;
  background: #020912;
  color: #fff;
  &:first-child {
    background: none;
    color: #020912;
  }
  &:hover {
    background: none;
    color: #020912;
  }

  &:focus {
    outline: none;
  }
`;

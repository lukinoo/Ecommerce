import styled from "styled-components";

export const StyledExpression = styled.div`
  min-height: 55vh;
  width: 95%;
  margin: 2rem auto;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  .expression-title {
    width: 70%;
    height: 55vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    border: 1px solid #020912;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    h3 {
      font-size: 2.5rem;
      font-family: "Lato", sans-serif;
      font-weight: 400;
      line-height: 1.2em;
      @media screen and (max-width: 768px) {
        font-size: 2rem;
      }
    }
    em {
      font-family: "Anonymous Pro", monospace;
      padding: 0.5rem 0;
      color: #888;
    }
  }
  .expression-image {
    width: 30%;
    height: 55vh;
    border: 1px solid #020912;
    border-left: none;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      width: 100%;
      border-left: 1px solid #020912;
      border-top: none;
    }
    img {
      width: 100%;
      height: 100%;
      transition: transform 4s ease;
      object-fit: cover;
    }
    &:hover {
      img {
        transform: scale(1.3);
      }
    }
  }
`;

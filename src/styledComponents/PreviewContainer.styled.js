import styled from "styled-components";

export const StyledPreviewContainer = styled.div`
  min-height: 83vh;
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  .preview-container-image {
    width: 50%;
    height: 80vh;
    background: url("https://cdn.shopify.com/s/files/1/0598/0572/8790/files/Screenshot_2022-01-18_at_1.49.34_PM_1070x_1070x_e5f771b3-b41d-4f09-9d1a-ae510790a180.png?v=1645124644&width=750");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid #020912;
    border-right: none;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 60vh;
      border-right: 1px solid #020912;
    }
  }
  .preview-container-info {
    width: 50%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #020912;
    padding: 2rem 4rem;
    @media screen and (max-width: 768px) {
      width: 100%;
      border-top: none;
    }
    p {
      font-size: 1.2rem;
      text-align: center;
      line-height: 1.2em;
      font-family: "Anonymous Pro", monospace;
      @media screen and (max-width: 376px) {
        font-size: 1rem;
      }
    }
  }
`;

export const Title = styled.h2`
  letter-spacing: 1.25px;
  font-family: "Lato", sans-serif;
  font-size: 3.5rem;
  @media screen and (max-width: 376px) {
    font-size: 2.5rem;
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
  &:hover {
    background: none;
    color: #020912;
  }

  &:focus {
    outline: none;
  }
`;

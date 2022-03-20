import styled from "styled-components";

export const SearchModalContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 99;
  padding: 2.5rem 0;
  .form-wrapper {
    width: 100%;
    background: #fcfcfc;
    form {
      min-height: 15vh;
      width: 95%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      .MuiFormControl-root {
        border: 1px solid #020912;
        width: 100%;
        .MuiInputLabel-root {
          color: #020912;
          font-family: "Anonymous Pro", monospace;
          &.Mui-focused {
            color: inherit;
          }
        }
        .css-cio0x1-MuiInputBase-root-MuiFilledInput-root {
          background: none;
          &::after {
            border: none;
          }
          &::before {
            border: none;
          }
        }
      }
      button {
        padding: 1rem;
        border: none;
        outline: none;
        background: none;
        line-height: 0.5rem;
        cursor: pointer;
        svg {
          transition: transform 0.2s ease;
        }
        &:hover {
          svg {
            transform: scale(1.1);
          }
        }
      }
    }
  }
  .searched-container {
    height: auto;
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    ul {
      min-width: 40%;
      padding: 0rem 0.6rem 0.6rem 0.6rem;
      background: #fff;
      overflow-y: auto;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      &::-webkit-scrollbar {
        width: 0.5rem;
      }
      &::-webkit-scrollbar-track {
        background: rgba(220, 220, 220, 0.3);
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      }
      &::-webkit-scrollbar-thumb {
        background: #020912;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      }
      .searched-container-title {
        margin: 0.5rem 0;
        font-size: 0.9rem;
        text-transform: uppercase;
        font-family: "Anonymous Pro", monospace;
      }
      .searched-item {
        display: flex;
        align-items: center;
        padding: 0.4rem;
        background: #fff;
        text-decoration: none;
        color: #777;
        font-size: 0.8rem;
        border-top: 1px solid #ddd;
        .searched-item-title {
          margin-left: 2rem;
          font-family: "Lato", sans-serif;
          font-size: 1rem;
          border-bottom: 1px solid #fff;
        }
        &:last-child {
          border-bottom: 1px solid #ddd;
        }
        &:hover {
          background: rgba(220, 220, 220, 0.3);
          .searched-item-title {
            border-bottom: 1px solid #020912;
          }
        }
        img {
          width: 30px;
          height: 50px;
          object-fit: cover;
        }
      }
      .no-result {
        font-family: "Lato", sans-serif;
        font-size: 1.2rem;
        padding: 0.3rem 1.5rem 0.5rem 1.5rem;
        text-align: center;
        border-bottom: 1px solid #020912;
      }
    }
  }
`;

import styled from "styled-components";

export const StyledItemPreviewContainer = styled.div`
  min-height: 100vh;
  .item-preview-wrapper {
    width: 95%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    .image-side {
      border: 1px solid #020912;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 60%;
      }
    }
    .info-side {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0.6rem;
      .info-side-title {
        margin-bottom: 1.5rem;
        h2 {
          font-size: 2.5rem;
        }
      }
      .info-side-price {
        margin-bottom: 1.5rem;
        p {
          font-size: 1.3rem;
          font-family: "Anonymous Pro", monospace;
        }
      }

      .info-side-quantity {
        span {
          font-family: "Anonymous Pro", monospace;
          font-size: 1.1rem;
        }
        .info-side-quantity-buttons {
          display: flex;
          align-items: center;
          margin: 1.5rem 0;
          button {
            border: 1px solid #020912;
            color: #020912;
            line-height: 1.2em;
            padding: 0.8rem 1.3rem;
            background: none;
            font-family: "Lato", sans-serif;
            font-size: 17px;
            letter-spacing: 1.25px;
            cursor: pointer;
            &:first-child {
              border-right: none;
            }
            &:last-child {
              border-left: none;
            }
          }
          p {
            border-top: 1px solid #020912;
            border-bottom: 1px solid #020912;
            color: #020912;
            line-height: 1.2em;
            padding: 0.8rem 1.3rem;
            font-family: "Lato", sans-serif;
            font-size: 17px;
            letter-spacing: 1.25px;
          }
        }
      }
      .info-side-purchase-buttons {
        display: flex;
        flex-direction: column;
      }
      .info-side-paragraph {
        margin: 1rem 0;
        p {
          font-family: "Anonymous Pro", monospace;
          font-size: 1.05rem;
          line-height: 1.7rem;
          letter-spacing: 1.25px;
        }
      }
    }
  }
  .frequently-asked-questions-container {
    height: auto;
    width: 95%;
    margin: 4rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Lato", sans-serif;
    border: 1px solid #020912;
    padding: 2rem 0;
    h2 {
      margin-bottom: 2rem;
      font-size: 1.8rem;
    }
    .accordion-wrap-box {
      max-width: 55%;
      border-bottom: 1px solid #ddd;
      @media screen and (max-width: 768px) {
        max-width: 90%;
      }
      .accordion-link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0.5rem;
        border-top: 1px solid #ddd;
        &:hover {
          background: rgba(220, 220, 220, 0.3);
          h5 {
            border-bottom: 1px solid #020912;
          }
        }
        h5 {
          font-size: 1.2rem;
          font-weight: 400;
          letter-spacing: 1.25px;
          padding-bottom: 0.1rem;
          border-bottom: 1px solid #fcfcfc;
        }
        span {
          font-size: 1.3rem;
          font-weight: bold;
        }
      }
      .answer {
        overflow: hidden;
        max-height: 0;
        &.accordion-answer-show {
          max-height: 20rem;
        }
        p {
          font-weight: 100;
          font-family: "Anonymous Pro", monospace;
          font-size: 1rem;
          padding: 1rem;
          line-height: 1.5rem;
        }
      }
    }
  }
`;

export const Button = styled.button`
  width: 70%;
  margin: 0.3rem 0;
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

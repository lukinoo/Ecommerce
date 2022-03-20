import styled from "styled-components";

export const StyledAboutContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  h2 {
    margin: 2rem 0;
    font-family: "Lato", sans-serif;
    letter-spacing: 1.25px;
    font-size: 2.5rem;
  }
`;

export const StyledAboutWrapper = styled.div`
  min-height: 100vh;
  .about-banner {
    width: 100%;
    min-height: 55vh;
    background: url("https://cdn.shopify.com/s/files/1/0598/0572/8790/files/Frame_5593_489bf621-1391-465d-b98d-c683ccd26273.png?v=1645203716&width=1500");
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    .about-banner-box {
      width: 50%;
      height: 40vh;
      padding: 1rem;
      background: #fcfcfc;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      border: 2px solid #020912;
      @media screen and (max-width: 768px) {
        width: 90%;
      }
      h4 {
        font-size: 2rem;
        line-height: 1.25em;
        letter-spacing: 1.25px;
        @media screen and (max-width: 376px) {
          font-size: 1.5rem;
        }
      }
    }
  }
  .freshness-wrapper {
    min-height: 50vh;
    margin: 3rem auto;
    display: flex;
    background: #020912;
    color: #fcfcfc;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .freshness-wrapper-image-side {
      width: 50%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .freshness-wrapper-info-side {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      padding: 4rem;
      border-left: 2px solid #fcfcfc;
      @media screen and (max-width: 768px) {
        width: 100%;
        border-left: none;
      }
      h3 {
        font-size: 2.7rem;
        line-height: 3.5rem;
      }
      p {
        font-size: 1.1rem;
        font-family: "Anonymous Pro", monospace;
        letter-spacing: 1.25px;
        line-height: 2rem;
        color: #9fa3c2;
      }
    }
  }
`;

export const StyledKeepingItGreenContainer = styled.div`
  min-height: 57vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1.5rem;
  @media screen and (max-width: 376px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .keep-it-green {
    text-align: center;
    width: 100%;
    border: 1px solid #020912;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    img {
      width: 30%;
      transition: transform 0.2s ease;
    }
    h3 {
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-size: 1.3rem;
      letter-spacing: 1.25px;
      padding: 1rem 0;
      font-weight: bold;
    }
    p {
      font-family: "Anonymous Pro", monospace;
      font-weight: 100;
      font-size: 0.9rem;
      padding: 0.5rem 0;
      line-height: 1.5rem;
      letter-spacing: 1.25px;
    }
  }
`;

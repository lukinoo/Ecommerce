import {
  StyledAboutContainer,
  StyledAboutWrapper,
} from "../styledComponents/About.styled";
import { ConfigKeepItGreen } from "../interfaces";
import { useEffect, useState } from "react";
import { StyledKeepingItGreenContainer } from "../styledComponents/About.styled";

const keepItGreenData: Array<ConfigKeepItGreen> = [
  {
    id: 1,
    url: "https://cdn.shopify.com/s/files/1/0598/0572/8790/files/Frame_5590_c69435b9-ebaa-451c-823a-2d76c734121b.png?v=1645542715",
    title: "Bottled in recycled glass",
    paragraph:
      "We use glass bottles rather than porous plastic because it's better for you, better for the planet, and a pleasure to drink from. Don't you think?",
  },
  {
    id: 2,
    url: "https://cdn.shopify.com/s/files/1/0598/0572/8790/files/Frame_5591_286fb0cc-55bf-4d31-ae5d-9d6a4578980c.png?v=1645542730",
    title: "Plant-based",
    paragraph:
      "All our drinks are made from plants. Placing plants at the center of our diet is a simple way to improve our health and our beloved environment.",
  },
  {
    id: 3,
    url: "https://cdn.shopify.com/s/files/1/0598/0572/8790/files/Frame_5592_6d772917-20d1-4e66-ba6b-a8b10d90a69b.png?v=1645542738",
    title: "Made with love",
    paragraph:
      "We’re intentional about our processes and our ingredients. Health, happiness, and loving care for the earth are always our highest priorities.",
  },
];

const About = () => {
  const [keepItGreen, setKeepItGreen] = useState<ConfigKeepItGreen[]>([]);

  useEffect(() => {
    setKeepItGreen(keepItGreenData);
  }, []);

  return (
    <StyledAboutContainer>
      <h2>about page</h2>
      <StyledAboutWrapper>
        <div className="about-banner">
          <div className="about-banner-box">
            <h4>
              Our mission is to offer widespread, sustainable access to
              delicious plant-based nutrition.
            </h4>
          </div>
        </div>
        <div className="keeping-it-green-container">
          <h2>Keep it green</h2>
          <StyledKeepingItGreenContainer>
            {keepItGreen.map((item: ConfigKeepItGreen) => {
              return (
                <div key={item.id} className="keep-it-green">
                  <img src={item.url} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>From ${item.paragraph}</p>
                </div>
              );
            })}
          </StyledKeepingItGreenContainer>
        </div>
        <div className="freshness-wrapper">
          <div className="freshness-wrapper-image-side">
            <img
              src="https://cdn.shopify.com/s/files/1/0598/0572/8790/files/Blue_Lemonade_Square_1080x_3b957153-400f-453b-8e09-48d3163a196f.png?v=1645203798&width=750"
              alt=""
            />
          </div>
          <div className="freshness-wrapper-info-side">
            <h3>Freshness from farm to bottle</h3>
            <p>
              We’re on a mission to make healthy and sustainable the delicious
              new normal. Take a sip and join us.
            </p>
          </div>
        </div>
      </StyledAboutWrapper>
    </StyledAboutContainer>
  );
};

export default About;

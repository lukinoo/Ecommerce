import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  min-height: 12vh;
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Anonymous Pro", monospace;
  padding: 0.5rem 0;
  z-index: 9;
  .hamburger {
    display: none;
    cursor: pointer;
    &.hamburger-active {
      .line1 {
        transform: rotate(45deg) translate(5px, 5px);
      }
      .line2 {
        opacity: 0;
      }
      .line3 {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }
    div {
      width: 30px;
      height: 2px;
      background: #020912;
      margin: 5px;
      transition: transform 0.2s ease;
    }
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
  h2 {
    font-size: 1.5rem;
    padding: 0.3rem 0.6rem;
    border: 2px solid #020912;
  }
  .nav-links {
    display: flex;
    min-width: 30%;
    justify-content: space-between;
    font-size: 1.12rem;
    &.nav-links-active {
      transform: translateX(0);
      opacity: 1;
    }
    @media screen and (max-width: 1024px) {
      min-width: 45%;
    }
    @media screen and (max-width: 768px) {
      position: fixed;
      top: 18%;
      left: 0;
      min-height: 82vh;
      width: 100%;
      background: #fcfcfc;
      flex-direction: column;
      align-items: center;
      font-size: 1.5rem;
      justify-content: space-evenly;
      transition: all 0.2s ease;
      transform: translateX(-100%);
      opacity: 0;
      z-index: 1;
    }
  }
  .nav-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 7%;
    @media screen and (max-width: 1024px) {
      min-width: 12%;
    }
    @media screen and (max-width: 768px) {
      min-width: 15%;
    }
    button {
      background: none;
      border: none;
      cursor: pointer;
      transition: transform 0.2s ease;
      &:hover {
        svg {
          transform: scale(1.05);
        }
      }
      &:nth-child(1) {
        svg {
          margin-top: 0.3rem;
        }
      }
      &:nth-child(2) {
        position: relative;
        &.animation-active {
          transform: scale(1.3);
        }
      }
      .drink-count {
        position: absolute;
        bottom: 0;
        right: 0;
        min-width: 1rem;
        min-height: 1rem;
        background: #000;
        color: #fff;
        padding: 0.1rem;
        border-radius: 50%;
        font-size: 0.7rem;
      }
      svg {
        width: 1.6rem;
        height: 1.6rem;
        transition: transform 0.2s ease;
      }
    }
  }
`;

export const Logo = styled.h2`
  font-size: 1.5rem;
  padding: 0.3rem 0.6rem;
  border: 1px solid #fcfcfc;
  font-family: "Anonymous Pro", monospace;
  letter-spacing: 1.25px;
  color: #020912;
  cursor: pointer;
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  color: #020912;
  border-bottom: 1px solid #fcfcfc;
  padding-bottom: 0.1rem;
  &:hover {
    border-bottom: 1px solid #020912;
  }
  &.active {
    border-bottom: 1px solid #020912;
  }
  &.inactive {
    border: none;
  }
`;

import { StyledNav, NavLinks, Logo } from "../styledComponents/Nav.styled";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "../CartContext";
import { FC, useContext, useEffect } from "react";
import { ContextType } from "../interfaces";

interface Props {
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
}

type IsActive = { isActive: boolean };

const Nav: FC<Props> = ({ setSearchActive }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { items, animation, navBar, navBarHandler } =
    useContext<ContextType>(CartContext);

  useEffect(() => {
    document.body.classList.toggle("overflow-h", navBar);
  }, [navBar]);

  useEffect(() => {
    navBarHandler(false);
  }, [pathname]);

  // cart icon animation state
  const animate: string = animation ? "animation-active" : "";
  // hamburger animation
  const activeHamburger: string = navBar ? "hamburger-active" : "";
  // nav-links animation
  const activeNavBar: string = navBar ? "nav-links-active" : "";

  return (
    <StyledNav>
      <div
        className={`hamburger ${activeHamburger}`}
        onClick={() => navBarHandler(!navBar)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <Logo
        onClick={() => {
          navigate("/");
          navBarHandler(false);
        }}
      >
        taste
      </Logo>
      <ul className={`nav-links ${activeNavBar}`}>
        <NavLinks
          to="/drinks"
          className={({ isActive }: IsActive) =>
            isActive ? "active" : "inactive"
          }
        >
          Drinks
        </NavLinks>
        <NavLinks
          to="/recipes"
          className={({ isActive }: IsActive) =>
            isActive ? "active" : "inactive"
          }
        >
          Recipes
        </NavLinks>
        <NavLinks
          to="/about"
          className={({ isActive }: IsActive) =>
            isActive ? "active" : "inactive"
          }
        >
          About
        </NavLinks>
      </ul>
      <div className="nav-buttons">
        <button
          type="button"
          onClick={() => {
            setSearchActive((c) => !c);
            navBarHandler(false);
          }}
        >
          <SearchIcon />
        </button>
        <button
          className={animate}
          type="button"
          onClick={() => {
            navBarHandler(false);
            navigate("/cart");
          }}
        >
          <ShoppingBagIcon />
          <span className="drink-count">{items.length}</span>
        </button>
      </div>
    </StyledNav>
  );
};

export default Nav;

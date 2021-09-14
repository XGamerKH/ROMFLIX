import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.nav`
    z-index: 100;
    position: fixed;
    width: 100vw;
    top: 0;
    background: black;
    div {
        max-width: var(--max-width);
        margin: 0 auto;
        padding: var(--padding);
        padding-block: 1rem;
        font-weight: bold;
        font-size: 1.4rem;
        color: white;
        a:hover {
            opacity: 0.8;
        }
    }
`;

const Navbar = ({ setHomePage, homePage }) => {
    return (
        <Wrapper>
            <div>
                <Link onClick={() => setHomePage(!homePage)} to="/">
                    ROMFLIX
                </Link>
            </div>
        </Wrapper>
    );
};

export default Navbar;

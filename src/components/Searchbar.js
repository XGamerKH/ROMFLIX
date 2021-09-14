import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { fetchMovie } from "../helperFunction";

const Wrapper = styled.div`
    border-top: 1px solid gray;
    padding: 1rem;
    text-align: center;
    background: black;
    color: white;
    input {
        border: none;
        flex: 1;
        font-size: 1.2rem;
        padding: 0.25rem 1rem;
        height: 100%;
        border-radius: 1rem;
        outline: none;
        width: 80%;
    }
    svg {
        color: black;
    }
`;

const Content = styled.form`
    display: flex;
    align-items: center;
    background: white;
    border-radius: 1rem;
    max-width: 800px;
    margin-inline: auto;
    padding-right: 0.5rem;
    h2 {
        margin: 0;
    }
`;

const Searchbar = ({ input, setInput, setMovies, setHeading }) => {
    const search = async (e) => {
        if (e) e.preventDefault();
        const res = await fetchMovie(1, input);
        setMovies(res.data);
        setHeading(input ? `Search results for: ${input}` : "Popular movies");
    };
    return (
        <Wrapper>
            <Content onSubmit={search}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <SearchIcon onClick={search} />
            </Content>
        </Wrapper>
    );
};

export default Searchbar;

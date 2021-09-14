import React from "react";
import styled from "styled-components";
import { fetchImg } from "../helperFunction";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    box-shadow: 0 0 8px 4px rgba(255, 255, 255, 0.2);
    border: 1px solid gray;
    border-radius: 0.5rem;
    padding: 1rem;
    img {
        max-width: 100%;
    }
    h4 {
        margin: 0 auto;
        text-align: center;
        font-weight: bolder;
    }
`;

const MovieBox = ({ movie }) => {
    const img = movie.poster_path
        ? fetchImg(movie.poster_path)
        : "https://genesisairway.com/wp-content/uploads/2019/05/no-image-300x300.jpg";
    return (
        <Wrapper>
            <Link to={`/movie/${movie.id}`}>
                {movie && (
                    <>
                        <img src={img} alt={`${movie.title} poster`} />
                        <h4>{movie.title}</h4>
                    </>
                )}
            </Link>
        </Wrapper>
    );
};

export default MovieBox;

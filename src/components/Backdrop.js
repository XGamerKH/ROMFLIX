import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchImg } from "../helperFunction";

const Wrapper = styled.div`
    border-bottom: 4px solid white;
    width: min(100vw);
    min-height: min(50vw, 30rem);
    background-image: ${(props) =>
        props.img
            ? `url(${props.img})`
            : `url(https://genesisairway.com/wp-content/uploads/2019/05/no-image-300x300.jpg)`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 0 auto;
    .container {
        padding: var(--padding);
        padding-block: 0;
        display: flex;
        align-items: flex-end;
        width: 100%;
        min-height: inherit;
        box-sizing: border-box;
        background-image: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0.4));
    }
    .content {
        max-width: 50rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        color: white;
        padding-top: 6rem;
        padding-bottom: 2rem;
    }
`;

const Backdrop = ({ movie }) => {
    const [img, setImg] = useState("");
    useEffect(() => {
        if (movie) setImg(fetchImg(movie.backdrop_path));
    }, [movie]);
    return (
        <Wrapper img={img}>
            <div className="container">
                <div className="content">
                    {movie && (
                        <>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                        </>
                    )}
                </div>
            </div>
        </Wrapper>
    );
};

export default Backdrop;

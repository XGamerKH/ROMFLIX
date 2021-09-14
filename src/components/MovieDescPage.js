import React from "react";
import styled from "styled-components";
import { useParams, useHistory, Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { fetchImg } from "../helperFunction";

const Wrapper = styled.section`
    text-align: center;
    color: white;
    background: black;

    .black-background {
        margin-top: 4.125rem;
        min-height: calc(100vh - 4.125rem);
        box-sizing: border-box;
        padding: var(--padding);
        padding-top: 3rem;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0.6));
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;

        .img-container {
            box-sizing: border-box;
            width: 250px;
            text-align: center;

            .poster {
                max-width: 250px;
            }

            h1 {
                margin-top: 0;
            }
        }
    }
    @media (min-width: 768px) {
        .container {
            flex-direction: initial;
            align-items: initial;
        }
        .text-container {
            text-align: initial;
            margin-left: 2rem;

            p {
                margin-top: 0;
                margin-bottom: 1.5rem;
            }
        }
    }

    .arrow {
        top: 5.125rem;
        left: 1rem;
        position: absolute;
        border: 2px solid white;
        border-radius: 50%;
        &:hover {
            opacity: 0.8;
        }
    }
    .bubble {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: black;
        background: white;
        border-radius: 50%;
        width: 2rem;
        height: 2em;
    }

    background-image: ${(props) =>
        props.img
            ? `url(${props.img})`
            : `url(
                  "https://lh3.googleusercontent.com/proxy/IeQqqKVMy1E1rlYMvxjdj4i73xxNqg4S36t84i_gBsAFFoiYKfRXe9OE4uzBtoqJaeoNYMAb-MxFii_7gZBfalQ4xjG3iXBlJtI57dZ_Xw"
              )`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const MovieDesc = ({ movies }) => {
    const history = useHistory();
    const { id } = useParams();
    let poster,
        backdrop,
        movie = {};
    if (movies.results !== undefined) {
        movie = movies.results.find((item) => item.id == id);
        if (!movie) history.push("/");
        poster = movie.poster_path
            ? fetchImg(movie.poster_path)
            : "https://genesisairway.com/wp-content/uploads/2019/05/no-image-300x300.jpg";
        backdrop = fetchImg(movie.backdrop_path);
    } else {
        history.push("/");
    }

    return (
        <Wrapper img={backdrop}>
            <div className="black-background">
                <div className="container">
                    <div className="img-container">
                        <img className="poster" src={poster} alt="" />
                        <h1>{movie.title}</h1>
                    </div>
                    <div className="text-container">
                        <p>
                            <span className="bold">Overview: </span>
                            {movie.overview}
                        </p>
                        <p>
                            <span className="bold">Release Date: </span>
                            {movie.release_date}
                        </p>
                        <p>
                            <span className="bold">Vote Average: </span>
                            <div className="bubble">{movie.vote_average}</div>
                        </p>
                    </div>
                </div>
            </div>
            <Link to="/">
                <ArrowBackIcon className="arrow" />
            </Link>
        </Wrapper>
    );
};

export default MovieDesc;

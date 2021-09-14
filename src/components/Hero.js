import React, { useEffect, useState } from "react";
import styled from "styled-components";

// function to fetch datas
import { fetchMovie } from "../helperFunction";

// Components
import Searchbar from "./Searchbar";
import Backdrop from "./Backdrop";
import MovieBox from "./MovieBox";

// material ui components
import Button from "@material-ui/core/Button";

const Wrapper = styled.div`
    margin-top: 4.125rem;
    .header-container {
        max-width: var(--max-width);
        padding: var(--padding);
        margin: 2rem auto 0;
        font-weight: bold;
        h3 {
            display: inline;
            border-bottom: 0.125rem white solid;
            text-transform: uppercase;
        }
    }
    .movies-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        max-width: var(--max-width);
        margin: 2rem auto;
        margin-bottom: 0;
        gap: 2rem;
        padding: var(--padding);
        padding-bottom: 0;
    }
    @media (min-width: 768px) {
        .movies-container {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
    }
    .btn-container {
        button {
            display: block;
            margin: 1rem auto;
        }
    }
`;

const Hero = ({ movies, setMovies, loading, setLoading, homePage }) => {
    const [input, setInput] = useState("");
    const [heading, setHeading] = useState("");
    useEffect(() => {
        setInput("");
        setHeading("Popular Movies");
        const fetchData = async () => {
            const res = await fetchMovie(1);
            setMovies(res.data);
            console.log(movies);
            setLoading(false);
        };
        fetchData();
    }, [homePage]);

    const loadMore = async () => {
        console.log(movies);
        const nextPage = movies.page + 1;
        const prevMovies = movies.results;
        await fetchMovie(nextPage, input).then((res) => {
            const { data } = res;
            const currentMovies = data.results;
            //combining all previous movies with the recently fetched ones
            data.results = [...prevMovies, ...currentMovies];
            setMovies(data);
        });
    };

    return (
        <Wrapper>
            {!loading && (
                <>
                    <Searchbar input={input} setInput={setInput} setMovies={setMovies} setHeading={setHeading} />
                    <Backdrop movie={movies.results[0]} />
                    <div className="header-container">
                        <h3>{heading}</h3>
                    </div>
                    <main className="movies-container">
                        {movies.results.map((movie) => (
                            <MovieBox movie={movie} />
                        ))}
                    </main>
                    <div className="btn-container">
                        <Button variant="contained" onClick={loadMore}>
                            LOAD MORE
                        </Button>
                    </div>
                </>
            )}
        </Wrapper>
    );
};

export default Hero;

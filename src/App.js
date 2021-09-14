import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// GlobalStyle
import GlobalStyle from "./GlobalStyle";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieDesc from "./components/MovieDescPage";

const App = () => {
    const [movies, setMovies] = useState({});
    const [loading, setLoading] = useState(true);
    const [homePage, setHomePage] = useState(true);
    return (
        <>
            <GlobalStyle />
            <Router>
                <Navbar homePage={homePage} setHomePage={setHomePage} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Hero
                                movies={movies}
                                setMovies={setMovies}
                                loading={loading}
                                setLoading={setLoading}
                                homePage={homePage}
                            />
                        )}
                    />
                    <Route path="/movie/:id" exact render={() => <MovieDesc movies={movies} />} />
                    <Route path="/" render={() => <Redirect to="/" />} />
                </Switch>
            </Router>
        </>
    );
};

export default App;

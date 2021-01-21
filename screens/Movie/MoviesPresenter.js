import React from "react";
import {Text} from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import MovieSlider from "../../components/MovieSlider";
import ViewPagerAndroid from "@react-native-community/viewpager";
import { BG_COLOR } from "../../constants/Colors";
import Section from "../../components/Section";
import MovieItem from "../../components/MovieItem";

const Container = styled.ScrollView`
    background-color:${BG_COLOR};
`;



const MoviesPresenter = ({loading,upcoming, nowPlaying, popular}) => 
loading?(
<Loader/>):
    (<Container>
        {nowPlaying? <MovieSlider movies = {nowPlaying} /> :null}
        {upcoming ? (
        <Section title="Upcoming Movies">
          {upcoming
            .filter(movie => movie.poster_path !== null)
            .map(movie => (
              <MovieItem
                key={movie.id}
                id={movie.id}
                posterPhoto={movie.poster_path}
                title={movie.title}
                voteAvg={movie.vote_average}
              />
            ))}
        </Section>
      ):null}

        {popular ? (
        <Section title="popular Movies" horizontal={false}>
          {popular
            .filter(movie => movie.poster_path !== null)
            .map(movie => (
              <MovieItem
                horizontal={true}
                key={movie.id}
                id={movie.id}
                posterPhoto={movie.poster_path}
                title={movie.title}
                voteAvg={movie.vote_average}
                overview={movie.overview}
              />
            ))}
        </Section>
      ):null}

    </Container>)

MoviesPresenter.propTypes ={
    loading : PropTypes.bool.isRequired,
    upcoming : PropTypes.array, 
    nowPlaying : PropTypes.array, 
    popular:PropTypes.array,

};

export default MoviesPresenter;
import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {BG_COLOR, GREY_COLOR, TINT_COLOR} from "../../constants/Colors";
import Layout from '../../constants/Layout';
import Loader from '../../components/Loader';
import Section from '../../components/Section';
import MovieItem from '../../components/MovieItem';
import { tv } from '../../api';
import img from '../../images/lemon.jpg';

const Container = styled.View`
    background-color : ${BG_COLOR};
    flex:1;
`;

const InputContainer = styled.View`
    align-items:center;
    margin-vertical:20px;

`;

const Lemon = styled.Image`
    width: ${Layout.width / 3};
    height: ${Layout.height / 3};
    opacity: 0.3;
    position: absolute;
`;

const LemonContainer = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;

`;


const LemonText = styled.Text`
    color:white;
    font-size:${props => props.big?14:12}px;
    margin-vertical:5px;
    margin-bottom:15px;
`;

const Input = styled.TextInput`
    background-color:rgba(255,255,255,1);
    width:${Layout.width/4*3};
    border-Radius:20px;
    padding:7px 10px;
    text-align:center;
`;

const SearchResults = styled.ScrollView`
    margin-top:20px;
`;

const searchPresenter = ({
    loading,
    tvResults,
    movieResults,
    searchTerm,
    handleSearchUpdate,
    onSubmitEditing
}) => (
    <Container>
        <InputContainer>
            <Input 
                value = {searchTerm} 
                returnKeyType={"search"} 
                placeholder={"검색할 단어 입력"}
                onChangeText={handleSearchUpdate}
                placeholderTextColor={GREY_COLOR}
                onSubmitEditing={onSubmitEditing}
                autoCorrect={false}


            />    
        </InputContainer>
        <SearchResults>
            {loading?<Loader />:
            <>
                {movieResults?
                    movieResults.length > 0? 
                        <Section title="movie Results">
                            {movieResults
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
                        </Section>:
                            <Section title="movie Results">
                                <LemonContainer>
                                    <LemonText>
                                        "Nothing found. Instead, I'll give you a tiny lemon."
                                    </LemonText>
                                </LemonContainer>                                
                            </Section>
                :null}

                {tvResults?
                    tvResults.length > 0? 
                        <Section title="tv Results">
                            {tvResults
                            .filter(tv => tv.poster_path !== null)
                            .map(tv => (
                                <MovieItem
                                    isMovie={false}
                                    key={tv.id}
                                    id={tv.id}
                                    posterPhoto={tv.poster_path}
                                    title={tv.name}
                                    voteAvg={tv.vote_average}
                                />
                            ))}            
                        </Section>:
                            <Section title="tv Results">
                                <LemonContainer>
                                    <LemonText>
                                        "Nothing found. Instead, I'll give you a tiny lemon."
                                    </LemonText>
                                </LemonContainer>                                
                            </Section>
                :null}
            </>

            
            }
        </SearchResults>
    </Container>);


searchPresenter.propTypes={
    loading : PropTypes.bool.isRequired,
    tvResults : PropTypes.string,
    movieResults : PropTypes.string,
    searchTerm : PropTypes.string,
    handleSearchUpdate : PropTypes.func.isRequired,
    onSubmitEditing : PropTypes.func.isRequired
};

export default searchPresenter;
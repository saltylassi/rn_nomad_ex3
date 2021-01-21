import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MoviesRating from "./MovieRating";
import { GREY_COLOR } from "../constants/Colors";
import { TouchableWithoutFeedback } from "react-native";
import {withNavigation} from "react-navigation";


const Container = styled.View`
    align-items:center;
    margin-right:20px;

`;

const Title = styled.Text`
    color:white;
    font-size:${props => props.big?14:12}px;
    margin-vertical:5px;
    margin-bottom:15px;
`;


const HContainer = styled.View`
    margin-bottom:20px;
    flex-direction:row;
    margin-left:20px;

`;

const Column = styled.View`
    margin-left : 20px;
    width:60%;
    
`;

const Overview = styled.Text`
    color : ${GREY_COLOR};
    font-size:12px;
    margin-vertical:10px;
`;


const MovieItem = ({
    id,
    posterPhoto,
    title,
    voteAvg,
    horizontal=false,
    overview,
    isMovie=true,
    navigation
}) =>
    <TouchableWithoutFeedback onPress={()=>
        navigation.navigate({
            routeName : "Detail",
            params:{
                isMovie, 
                id,
                posterPhoto,
                backgroundPhoto:null,
                title,
                voteAvg,
                overview,
            }
        })
    }>
        
        {(horizontal? 
        <HContainer>
            <MoviePoster path={posterPhoto}/>
            <Column>
                <Title big={true}>
                {title}
                </Title>
                <MoviesRating votes={voteAvg}/>
                {overview?(
                    <Overview>
                        {overview.length > 150 ? `${overview.substring(0,147)}...` : overview}
                    </Overview>):null}
            </Column>
        </HContainer>
        :
        <Container>
            <MoviePoster path={posterPhoto} />
            <Title>{title.length > 15 ? `${title.substring(0, 12)}...` : title}</Title>
            <MoviesRating votes={voteAvg}/>
        </Container>
        )}
    </TouchableWithoutFeedback>
 

MovieItem.propTypes ={
        id: PropTypes.number.isRequired,
        posterPhoto: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        voteAvg: PropTypes.number.isRequired,
        overview:PropTypes.string,
        isMovie:PropTypes.bool
};


export default withNavigation(MovieItem);


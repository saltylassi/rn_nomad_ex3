import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TINT_COLOR, GREY_COLOR } from '../constants/Colors';

const Vote = styled.Text`

    color : ${props => props.inSlide?TINT_COLOR:GREY_COLOR};
    font-size:${props => props.inSlide?"10px":"8px"};
    font-weight:700;

`;




const MoviesRating = ({votes, inSlide=false}) => 


        (<Vote inSlide={inSlide}> 🍺{`${votes} / 10`}</Vote>)


MoviesRating.propTypes = {
    votes:PropTypes.number.isRequired,
    inSlide:PropTypes.bool
};

export default MoviesRating;
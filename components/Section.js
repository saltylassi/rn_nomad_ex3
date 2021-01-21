import React from "react";
import PropTypes, { bool } from "prop-types";
import styled from "styled-components";
import MovieItem from "./MovieItem";

const Container = styled.View`
    margin-vertical:20px;
    
`;

const Title = styled.Text`
    color:white;
    padding-left:20px;
    font-weight:700;
    margin-bottom:10px;
    font-size:12px;
`;

const ScrollView = styled.ScrollView`

`;

const Section = ({title,children, horizontal=true}) => 
(    
    <Container>
        <Title>{title}</Title>
        <ScrollView horizontal={horizontal}>{children}</ScrollView>
    </Container>
);


Section.propTypes = {
    childeren:PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]), //how to check children props
    title:PropTypes.string.isRequired,
    horizontal:PropTypes.bool
}

export default Section;
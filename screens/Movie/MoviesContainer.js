import React from "react";
import MoviesPresenter from "./MoviesPresenter";
import { movies } from "../../api";


export default class MoviesContainer extends React.Component{

    state = {
        loading : true,
        upcoming : null,
        popular:null,
        nowPlaying:null,
        error:null
    };
    
    async componentDidMount(){
        let upcoming, popular, nowPlaying,error;

        try{

            ({
                data: {results:upcoming} } = 
                await movies.getUpcoming());
            ({
                data: {results:popular} } = 
                await movies.getPopular());
            ({
                data: {results:nowPlaying} } = 
                await movies.getNowPlaying());
        

        }catch(error){
            console.log(error);
            error="Can't get Movies";
        }finally{

            this.setState( {
                loading:false, 
                error, 
                upcoming,
                popular,
                nowPlaying} 
            );
        }
    }
    render(){
        const {loading,error, upcoming, nowPlaying, popular} = this.state;
        return <MoviesPresenter loading = {loading} upcoming={upcoming} nowPlaying={nowPlaying} popular={popular}/>;
    }
}
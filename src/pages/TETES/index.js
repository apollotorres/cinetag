import { useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';
import Card from 'components/Card';
import { use } from 'react';
import CardGG from 'components/Card/cardgigante';
import { Link } from 'react-router-dom';


export const Testes = () => {
    const [movies, setmovies] = useState([])


        useEffect(() => {
        



        const getmovies = () => {
                axios({

                    method: 'get',
                    url:'https://api.themoviedb.org/3/discover/movie',
                    params: {
                        api_key: '368974a9186b3df81504523d0fd041fe',
                        language: 'pt-BR'
                    }
        
                    }).then(response => {
                        setmovies(response.data.results);
                        console.log(response.data.results)

        })

        }
                                getmovies();

        }, [])

        


        ///////////////////////////////////////////////////////

            const [moovies, setmoovies] = useState([])
            
            useEffect(() => {


                const getpopularmovies = () => {
                axios({

                    method: 'get',
                    url:'https://api.themoviedb.org/3/discover/tv',
                    params: {
                        api_key: '368974a9186b3df81504523d0fd041fe',
                        language: 'pt-BR'
                    }
        
                    }).then(response => {
                        setmoovies(response.data.results);
                        console.log(response.data.results)

        })

        }
                getpopularmovies();

            }, [])


        

        
        

/////////////////////////////////////////////////////




    return(

        
        
        <div className='catalogo'>
            
                <h1>Explore</h1>

            <div className='grupo'>
            {movies.map((movie) => 
            <Card 
            capa={'https://image.tmdb.org/t/p/w500/'+movie.poster_path} 
            titulo={movie.title} 
            
            desc={movie.overview}
            qualidade={movie.vote_average}/>
      
            )}
                                  
            </div>
               
            


            <div className='outrogrupo'>
                {moovies.map((moovie) =>
            <CardGG 
                        
            capa={'https://image.tmdb.org/t/p/w500/'+moovie.poster_path}
            nome={moovie.name} 
            qualidade={moovie.vote_average}
            desc={moovie.overview}
>

            </CardGG>)}
            
            </div>


        </div>

            
   

      

       
)
}
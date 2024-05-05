const API_KEY="97f66a5b26748a314342acc49d9c1e35"
export default {
fetchTrending:{

title:"Trending",
 url:'/trending/all/week?api_key=97f66a5b26748a314342acc49d9c1e35&language=en-Us',

}
,
fetchTopRated:{

    title:"TOP RATED",
     url:'/movie/top_rated?api_key=97f66a5b26748a314342acc49d9c1e35&language=en-US&page=1',
    
    }
    ,
    fetchnowplaying:{

        title:"Now playing",
         url:'/movie/now_playing?api_key=97f66a5b26748a314342acc49d9c1e35&language=en-US&page=1'
        
        }
        ,
        fetchpopular:{

            title:"popular",
             url:'/movie/popular?api_key=97f66a5b26748a314342acc49d9c1e35&language=en-US&page=1'
            
            }
            ,
            fetchupcoming:{

                title:"upcoming",
                 url:'/movie/upcoming?api_key=97f66a5b26748a314342acc49d9c1e35&language=en-US&page=1'
                
                },


                fetchpeoplepopular:{

                    title:"discove movie",
                     url:'/discover/movie?api_key=97f66a5b26748a314342acc49d9c1e35&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
                    
                    },

                    fetchMystrey:{

                        title:"TV DISCOVER",
                         url:'/discover/tv?api_key=97f66a5b26748a314342acc49d9c1e35&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0'
                        
                        }





}
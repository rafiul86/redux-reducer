import React,{useState} from 'react';
import {orderBy} from "lodash";
import data from './movies.json'
import { useDispatch, useSelector } from 'react-redux';
import { increment , decrement } from '../../redux/actions/actions';


function Movie() {
    const [movieList]=useState(data)
    const {components}=movieList;
    const count = useSelector(state => state.movie)
    const login = useSelector(state => state.login)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Total watched movie : {count}</h1>
            
            {
               components?.map((it, i) => {
                    return (
                        <div style={{ display: "flex" }}>
                            {
                                orderBy(it.items,'releaseDate').map((list,j) =>
                                
                                    <div >
                                        <img style={{ padding: "10px" }} src={list.imageUrl} height="400px" width="250px" alt="" />
                                        
                                        <h2>{j+1}</h2>
                                          <button onClick={()=>dispatch({type :'INCREMENT'})}>Add to watchlist</button>  
                                          <br/>
                                          <button onClick={()=>dispatch({type :'DECREMENT'})}>Remove from watchlist</button>              
                                         <h3>{list.title}</h3>
                                         <h3>{list.releaseDate}</h3>
                                        <p>{list.synopsis}</p>
                                    </div>
                                )
                            }
                            
                        </div>

                    )
                })
            }
            {
              login ? <button onClick={()=>dispatch({type :'LOGGED_IN'})} >Login</button>
               : <button onClick={()=>dispatch({type :'LOGGED_IN'})} >Logout</button>
            }
            {
                login && <h4>Welcome to my Movie managing Application</h4>
            }
        </div>
    )
}

export default Movie

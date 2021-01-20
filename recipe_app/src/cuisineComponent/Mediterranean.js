import React from 'react';

import axios from 'axios';

const cuisine_URL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=1008e28e8a29463385650478c9017f49&number=10&cuisine='


class Mediterranean extends React.Component{
    constructor(props){
        super(props)
        this.state = {};
    }
    async getMediterranean(){
        const Mediterranean = cuisine_URL + 'Mediterranean'
        try{
            const res = await axios.get (Mediterranean)
            console.log (res.data);
            this.setState ({ recipes: res.data })
        }catch(error){
            console.log (error)
        }
    } 
    componentDidMount(){
        this.getMediterranean();
    }
    render(){
        return(
            <div>
                {
                    this.state.recipes && this.state.recipes.results.map (recipe => {
                        return (
                            <div>
                                <h3>{ recipe.title }</h3>
                                <img src={recipe.image}></img>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
export default Mediterranean;
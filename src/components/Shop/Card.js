import React, {Component} from 'react';

export default class Card extends Component{
    constructor(props){
        super(props)
    }

render(){
    const { item_id, item_name, price, cat, farm_name, description, image } = this.props;
    return(
        <div>
            <img src={image}/>
            <h2>{item_name}</h2>
            <h3>{farm_name}</h3>
            <div>{description}</div>
            <h2>{price}</h2>
        </div>
    )
}


}
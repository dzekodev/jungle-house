import React from 'react';
import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
function ShoppingList(){
    const category = plantList.reduce(
        (acc,plant)=>
        acc.includes(plant.category)?acc:acc.concat(plant.category),[]
    );
    return(
        <React.Fragment>
            <ul>
                {category.map(cat=>(
                    <li >{cat}</li>
                ))}
            </ul>
            <ul className="jh-plant-list">
                {plantList.map((plant)=>(
                    <li className= "jh-plant-item"
                        key={plant.id}>
                        {plant.name} 
                        {plant.isSpecialOffer ? <div className="jh-sales">Sale</div> : null}
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
}
export default ShoppingList
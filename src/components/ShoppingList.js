import React from 'react';
import {plantList} from '../datas/plantList'
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
            <ul>
                {plantList.map((plant)=>(
                    <li key={plant.id}>
                        {plant.name} 
                        {plant.isBestSale ? <span>🔥</span> : null}
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
}
export default ShoppingList
import {plantList} from '../datas/plantList'
function Categories(){
    const categories = plantList.reduce(
        (acc,cat)=> acc.includes(cat)?acc:acc.concat(cat),[]
    )
    return(
        <select>
            {categories.map(
                (cat)=> (
                    <option key={cat} className="opt" value={cat}>{cat}</option>
                    )
                )
            }
        </select>
    )
}
export default Categories
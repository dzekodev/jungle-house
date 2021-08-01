import CareScale from './CareScale'
import '../styles/PlantItem.css'
function handleClick(plantName) {
	alert(`You want to buy 1 ${plantName}? Great choice 🌱✨`)
}
function PlantItem({ id, cover, name, water, light }) {
	
	return (
		<li key={id} className='jh-plant-item' onChange={()=>handleClick}>
			<img className='jh-plant-item-cover' src={cover} alt={{name}} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem
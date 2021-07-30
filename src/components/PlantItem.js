import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light }) {
	function handleClick(e) {
        console.log("this is my event : ", e);
    }
	return (
		<li key={id} className='jh-plant-item' onClick={handleClick}>
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
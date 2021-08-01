import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale(props) {
    // const scaleValue = props.scaleValue 
    // const careType = props.careType
    //those two lines equal this line 
    const {scaleValue, careType} = props
	const range = [1, 2, 3]
    const scaleType =
    careType === 'light' ? (
        <img src={Sun} alt='sun-icon' />
    ) : (
        <img src={Water} alt='water-icon' />
    )
	function handleAlert(e){
        var message="";
        if(careType==='light'){
            scaleValue>=3 ? message="This plant requires a large amount of light":message="This plant requires a small amount of light"
            alert(message)
        }else if(careType==='water'){
            scaleValue>=3 ? message="This plant requires a large amount of water":message="This plant requires a small amount of water"
            alert(message)
        }
	}
    //This plant requires a small/moderate/large amount of light/water
    //This plant requires a small/moderate/large amount of light/water
    return (
        <div onClick={handleAlert}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span  key={rangeElem.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )
}
export default CareScale
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale(props) {
    // const scaleValue = props.scaleValue 
    // // const careType = props.careType
    //those two lines equal this line 
    const {scaleValue, careType} = props
	const range = [1, 2, 3]
    const scaleType =
    careType === 'light' ? (
        <img src={Sun} alt='sun-icon' />
    ) : (
        <img src={Water} alt='water-icon' />
    )

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )
}
export default CareScale
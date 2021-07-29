function CareScale(props) {
    // const scaleValue = props.scaleValue 
    // // const careType = props.careType
    //those two lines equal this line 
    const {scaleValue, careType} = props
    const icon = careType==="water"? '💧' : "☀️"
    const range = [1,2,3]
    return(
        <div>
            {range.map(item => scaleValue>=item ? <span key={item}>{icon}</span> : null)}
        </div>
    )
}
export default CareScale
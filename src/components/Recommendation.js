function Recommendation(){
    const state = {
        _className :'springClass',
        currentMonth : new Date().getMonth()
    }
    const isSpring = state.currentMonth>=5 && state.currentMonth<=9 ? 
    <div className={state._className}>it's Summer! time to Camp</div> :
    <div className={state._className}>it's not time to Camp</div>
    
    return isSpring
}
export default Recommendation
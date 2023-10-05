const initialState=0;

const reducer = (state=initialState,action)=>{

    switch(action.type){
        case 'increment':{
            return (
                state+1
            )
        }
        case 'decrement':{
            return state-1
        }

        default:
            return state
    }
}

export default reducer
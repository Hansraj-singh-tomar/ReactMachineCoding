const initialState = {
    // this list will be array of object means inside this list we have data in form of object
    list: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TODO" : 
            const {id, data} = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                       id: id,
                       data: data 
                    }
                ]
            }

        case "DELETE_TODO" : 
            const newList = state.list.filter((item) => item.id !== action.id)
            return {
                ...state,
                list: newList
            }

        case "REMOVE_TODO" : 
            return {
                ...state,
                list: []
            }
        
    
        default: return state;
    }
}

export default reducer;
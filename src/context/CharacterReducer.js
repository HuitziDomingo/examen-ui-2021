const characterReducer = (state, action) => {
    console.log(state, action)

    let {payload, type} = action

    switch (type){
        case 'GET_CHARACTER':
            return{
                ...state,
                characters: payload
            }
    }


}

export default characterReducer
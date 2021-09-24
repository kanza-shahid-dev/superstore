import * as ActionTypes from './ActionTypes'

const initialState={
    theme:{
    },
}
export const reducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case ActionTypes.DefaultTheme:
            return {...state,
            theme:{...state.theme,theme:action.payload.theme},
        };
        default:
        return state;
    }
}
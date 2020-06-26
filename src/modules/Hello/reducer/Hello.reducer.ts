import{
    HelloActionTypes,
    IStateHello,
    SEND_MESSAGE
} from '../types/Hello.types'



export const initialState: IStateHello = {
	data: []
};

export function helloReducer(
    state = initialState,
    action:HelloActionTypes
):IStateHello{
    switch (action.type) {
        case SEND_MESSAGE:
          return {
            ...state,  
            data: [...state.data, action.payload]
          }
        default:
            return state;  
    }
}
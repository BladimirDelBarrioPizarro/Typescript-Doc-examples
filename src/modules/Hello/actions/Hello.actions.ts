import {
    Message,
    SEND_MESSAGE,
    HelloActionTypes
} from '../types/Hello.types'

export function helloMessageAction(newMessage:Message):HelloActionTypes{
    return{
        type:SEND_MESSAGE,
        payload:newMessage
    }
}
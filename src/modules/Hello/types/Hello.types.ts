export const SEND_MESSAGE = 'SEND_MESSAGE'

export interface Message {
    type: string;
    enthusiasmLevel: number
  }

export interface IStateHello {
    data:Message[]
}

export interface SendMessageAction{
    type:typeof SEND_MESSAGE,
    payload: Message
}

export type HelloActionTypes = SendMessageAction

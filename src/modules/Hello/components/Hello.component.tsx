import React from 'react';
import {useDispatch} from 'react-redux';
import {helloMessageAction} from '../actions/Hello.actions'
import {Message} from '../types/Hello.types'

export interface HelloProps {
  name: string;
  enthusiasmLevel: number;
}

const Hello = ({ name, enthusiasmLevel }: HelloProps) => {

    const dispatch = useDispatch();
    const data:Message  = {
      message:name,
      enthusiasmLevel
     }
    
  
    const helloMessage = (data:Message) => dispatch(helloMessageAction(data))

    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
      }
    
      return (
        <div className="hello">
          <div className="greeting">
            Hello {name + getExclamationMarks(enthusiasmLevel)}
          </div>
           <button onClick={() => helloMessage(data)}>SEND</button>
        </div>
      );
}


const getExclamationMarks = (numChars: number) => {
    return Array(numChars + 1).join('!');
  }
  
export default Hello;
 
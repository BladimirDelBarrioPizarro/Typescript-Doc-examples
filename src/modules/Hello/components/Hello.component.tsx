import * as React from 'react';

export interface HelloProps {
  name: string;
  enthusiasmLevel: number;
}

const Hello = ({ name, enthusiasmLevel }: HelloProps) => {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
      }
    
      return (
        <div className="hello">
          <div className="greeting">
            Hello {name + getExclamationMarks(enthusiasmLevel)}
          </div>
        </div>
      );
}




const getExclamationMarks = (numChars: number) => {
    return Array(numChars + 1).join('!');
  }
  
export default Hello;

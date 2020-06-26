import React from 'react';
import Hello from './modules/Hello/Hello.component'


interface HelloProps {
  name: string;
  enthusiasmLevel: number;
}


const helloProps:HelloProps = {
  name:"Bladi",
  enthusiasmLevel:2
}

const App = () => {
  return (
    <div className="App">
      <Hello {...helloProps}/>
    </div>
  );
}

export default App;

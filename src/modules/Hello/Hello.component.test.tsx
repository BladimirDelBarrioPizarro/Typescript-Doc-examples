import * as React from 'react';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hello from './Hello.component';

Enzyme.configure({ adapter: new Adapter() });

it('renders the correct text', () => {
    const hello = Enzyme.shallow(<Hello name='Bladi'  enthusiasmLevel={1} />);
    expect(hello.find(".greeting").text()).toEqual('Hello Bladi!')
  });

it('renders the correct text with an explicit enthusiasm level of 5', () => {
    const hello = Enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={5} />);
    expect(hello.find(".greeting").text()).toEqual('Hello Daniel!!!!!');
  }); 
  
it('throws when the enthusiasm level is 0', () => {
    expect(() => {
      Enzyme.shallow(<Hello name='Bladi' enthusiasmLevel={0} />);
    }).toThrow();
  });

it('throws when the enthusiasm level is negative', () => {
    expect(() => {
      Enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={-1} />);
    }).toThrow();
  });
  
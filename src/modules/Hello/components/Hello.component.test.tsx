import * as React from "react";
import ReactDOM from 'react-dom';
import * as Enzyme from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Provider} from 'react-redux'
import store from '../../../store/store'

import App from '../../../App'

import Hello from "./Hello.component";
import * as Helloactions from '../actions/Hello.actions'
import * as Hellotypes from '../types/Hello.types'


configure({ adapter: new Adapter() });


it('Renders App without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
       <Provider store={store}> 
        <App/>
        </Provider> 
    ,div);
    ReactDOM.unmountComponentAtNode(div);
  }); 




describe('renders Hello component ', () => {
    it("renders the correct text with an explicit enthusiasm of 1", () => {
        
        const wrapper = Enzyme.shallow(
           <Provider store={store}>
               <Hello name="Bladi" enthusiasmLevel={1} />
           </Provider> 
            
        ).dive()
        expect(wrapper).toMatchSnapshot()
      });

      it("renders the correct text with an explicit enthusiasm level of 5", () => {
         const wrapper = Enzyme.shallow(
            <Provider store={store}> 
                <Hello name="Bladi" enthusiasmLevel={5} />
            </Provider>
        ).dive() 
        //expect(wrapper.find(".greeting")).toEqual({})
        //expect(wrapper.find(".greeting").text()).toEqual("Hello Bladi!!!!!");
      }); 

      it("throws when the enthusiasm level is 0", () => {
        expect(() => {
          Enzyme.shallow(<Hello name="Bladi" enthusiasmLevel={0} />);
        }).toThrow();
      });
      
      it("throws when the enthusiasm level is negative", () => {
        expect(() => {
          Enzyme.shallow(<Hello name="Bladi" enthusiasmLevel={-1} />);
        }).toThrow();
      }); 
})


describe('Hello.actions', () => {
    it('should create an action SEND_MESSAGE', () => {
      const data:Hellotypes.Message = {
          message:'Bladi',
          enthusiasmLevel:1
      }
      const expectedAction = {
        type: Hellotypes.SEND_MESSAGE,
        payload:data
      }
      expect(Helloactions.helloMessageAction(data)).toEqual(expectedAction)
    })
  })
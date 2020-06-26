import {combineReducers} from 'redux';
import {IStateHello} from '../modules/Hello/types/Hello.types'
import {helloReducer} from '../modules/Hello/reducer/Hello.reducer'

interface IApplicationState {
    hello: IStateHello
}

export default combineReducers<IApplicationState>({
    hello:helloReducer
})
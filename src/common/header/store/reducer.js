import * as constants from './constants';
import { fromJS } from 'immutable';

/**
 * JS对象转换为immutable对象
 */
const defaultState = fromJS({
    focused:false,
    list:[]
});

export default(state = defaultState, action) =>{

    if(action.type === constants.SEARCH_FOCUS){
        //state已经是一个immutable对象了，set时已经生成了一个全新的对象
        return state.set('focused',true)
    }
    if(action.type === constants.SEARCH_BLUR){
        return state.set('focused',false)
    }
    if(action.type === constants.CHANGE_LIST){
        return state.set('list',action.data);
    }
    return state;
}
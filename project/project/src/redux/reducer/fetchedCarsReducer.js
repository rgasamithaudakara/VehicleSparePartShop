import { FETCH_FILTRED_CARS } from '../action/types';

export default function(state= [], action){
    switch(action.type){
        case FETCH_FILTRED_CARS :
            return action.payload;
        default : 
        return state;
    }
}
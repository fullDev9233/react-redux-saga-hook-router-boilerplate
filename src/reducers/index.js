import { ADD_TODO, RENDER_TODO_LIST, USER_PROFILE_LOADED } from '../actions';
import produce from 'immer';

const initialState = {
    toDoList: []
};

export default function toDoApp(state=initialState, action) {
    // switch (action.type) {
    //     case RENDER_TODO_LIST:
    //         return {
    //             ...state,
    //             toDoList: action.toDoList
    //         }
    //     case ADD_TODO:
    //         let newToDoList = [
    //             ...state.toDoList,
    //             {
    //                 ...action.toDoItem
    //             }
    //         ];
    //         return {
    //             ...state,
    //             toDoList: newToDoList
    //         };
    //     case USER_PROFILE_LOADED:
    //         return {
    //             ...state,
    //             user: action.user
    //         };
    //     default:
    //         return state;
    // }
    produce(state, draft => {
        switch (action.type) {
            case RENDER_TODO_LIST:
                draft.toDoList = action.toDoList;
                break;
            case ADD_TODO:
                let newToDoList = [
                    ...state.toDoList,
                    {
                        ...action.toDoItem
                    }
                ];
                return {
                    ...state,
                    toDoList: newToDoList
                };
            case USER_PROFILE_LOADED:
                return {
                    ...state,
                    user: action.user
                };
            default:
                return state;
        }
    })
}
// reducer.js
import {
    ADD_TASK,
    MARK_AS_COMPLETED,
    MARK_AS_INCOMPLETE,
    DELETE_TASK,
    UPDATE_TASK
  } from '../actions/actions';
  
  const initialState = {
    tasks: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
  
      case MARK_AS_COMPLETED:
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload ? { ...task, completed: true } : task
          ),
        };
  
      case MARK_AS_INCOMPLETE:
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload ? { ...task, completed: false } : task
          ),
        };
  
      case DELETE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
  
      case UPDATE_TASK:
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.taskId ? { ...task, ...action.payload.updatedTask } : task
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  
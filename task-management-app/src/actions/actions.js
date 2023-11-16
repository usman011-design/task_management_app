// actions.js
export const ADD_TASK = 'ADD_TASK';
export const MARK_AS_COMPLETED = 'MARK_AS_COMPLETED';
export const MARK_AS_INCOMPLETE = 'MARK_AS_INCOMPLETE';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const MOVE_TASK = 'MOVE_TASK'; // Add the MOVE_TASK action type

export const addTask = (newTask) => ({
  type: ADD_TASK,
  payload: newTask,
});

export const markAsCompleted = (taskId) => ({
  type: MARK_AS_COMPLETED,
  payload: taskId,
});

export const markAsIncomplete = (taskId) => ({
  type: MARK_AS_INCOMPLETE,
  payload: taskId,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const updateTask = (taskId, updatedTask) => ({
  type: UPDATE_TASK,
  payload: { taskId, updatedTask },
});

// Define the moveTask action creator
export const moveTask = (fromIndex, toIndex) => ({
  type: MOVE_TASK,
  payload: { fromIndex, toIndex },
});

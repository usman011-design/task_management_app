// DraggableTask.js
import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableTask = ({ task, index, moveTask }) => {
  const [, drag] = useDrag({
    type: 'TASK',
    item: { index },
  });

  return (
    <div ref={drag} style={{ cursor: 'grab' }}>
      <div>
        <strong>{task.title}</strong>
        <p>{task.description}</p>
      </div>
    </div>
  );
};

export default DraggableTask;

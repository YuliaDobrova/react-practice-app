import React, { useState } from 'react';
import { ListItem } from './todoListItem/ListItem';
import { TaskField } from './todoTaskField/TaskField';
import { TodoWrapper } from './TodoStyled';

const Todo = () => {
  const [tasks, setTasks] = useState([
    {
      text: 'Learn Web Development',
      completed: true,
    },
    {
      text: 'Improve ReactJS skills',
      completed: true,
    },
    {
      text: 'Work as a Frontend Developer for 3 years',
      completed: true,
    },
    {
      text: 'Get a job offer in Canada',
      completed: false,
    },
  ]);

  const onToggleCompleted = index => {
    setTasks(prevTasks =>
      prevTasks.map((task, curIdx) =>
        index === curIdx
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  const onRemoveTask = index => {
    setTasks(prevTasks => prevTasks.filter((_, curIdx) => index !== curIdx));
  };

  const onAddTask = text => {
    setTasks(prevTasks => [
      ...prevTasks,
      {
        text,
        completed: false,
      },
    ]);
  };

  return (
    <TodoWrapper>
      <div className="todo">
        <div className="todo__header">
          <h4>Todo List</h4>
        </div>
        <TaskField onAddTask={onAddTask} />
        <div className="todo__list">
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              index={index}
              text={task.text}
              completed={task.completed}
              onToggleCompleted={onToggleCompleted}
              onRemoveTask={onRemoveTask}
            />
          ))}
        </div>
      </div>
    </TodoWrapper>
  );
};

export default Todo;

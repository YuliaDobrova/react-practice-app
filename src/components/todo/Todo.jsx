import React, { useState } from 'react';
import { ListItem } from './todoListItem/ListItem';
import { TaskField } from './todoTaskField/TaskField';
import { TodoWrapper } from './TodoStyled';

const Todo = () => {
  const [tasks, setTasks] = useState([
    {
      text: 'Learn ReactJS',
      completed: true,
    },
    {
      text: 'Develop TodoList with ReactJS',
      completed: true,
    },
    {
      text: 'Deploy app to Vercel',
      completed: true,
    },
    {
      text: 'Work for a yaer as Frontend Developer',
      completed: true,
    },
    {
      text: 'Get a new job offer & find a friendly team',
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

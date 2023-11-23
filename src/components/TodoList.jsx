import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { switchTodo, deleteTodo } from "../redux/modules/todos";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleSwitchTodo = (id) => {
    dispatch(
      switchTodo({ id, isDone: todos.filter((todo) => todo.id === id).isDone })
    );
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <CardContainer>
      {todos.map((todo) => (
        <Card key={todo.id}>
          <span>{todo.title}</span>
          <span>{todo.contents}</span>
          <IsDone>{todo.isDone ? "완료" : "할일"}</IsDone>
          <Button onClick={() => handleSwitchTodo(todo.id)}>완료</Button>
          <Button Button onClick={() => handleDeleteTodo(todo.id)}>
            삭제
          </Button>
        </Card>
      ))}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background-color: lightblue;
`;

const Card = styled.li`
  list-style: none;
  background-color: lightsalmon;
`;

const Button = styled.button`
  padding: 10px;
`;

const IsDone = styled.span`
  color: red;
`;

export default TodoList;

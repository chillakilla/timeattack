import React, { useState } from "react";
import styled from "styled-components";
import TodoList from "../components/TodoList";
import { addTodo } from "../redux/modules/todos";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

function Home() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleAddTodo = () => {
    const newTodo = {
      id: uuid(),
      title,
      contents,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setContents("");
  };

  return (
    <>
      <Header>
        <p>My Todo List</p>
        <p>React Redux react-router-dom</p>
      </Header>
      <InputSection>
        <Label>제목 : &nbsp;</Label>
        <Input
          placeholder="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></Input>
        <Label>내용 : &nbsp;</Label>
        <Input
          placeholder="text"
          value={contents}
          onChange={(event) => setContents(event.target.value)}
        ></Input>
        <Button onClick={handleAddTodo}>추가하기</Button>
      </InputSection>
      <TodoList />
    </>
  );
}

const Header = styled.div`
  padding: 10px;
  background-color: lightcoral;
  display: flex;
  justify-content: space-between;
`;

const InputSection = styled.section`
  padding: 10px;
  background-color: lemonchiffon;
`;

const Label = styled.label`
  width: 100px;
`;

const Input = styled.input`
  padding: 5px;
`;

const Button = styled.button`
  width: 80px;
  height: 40px;
  cursor: pointer;
`;

export default Home;

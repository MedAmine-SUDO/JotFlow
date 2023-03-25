import React, { useState } from "react";
import { Tab, Tabs, ListGroup, InputGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [activeKey, setActiveKey] = useState("notes");
  const [notes, setNotes] = useState([]);
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (
      event.key === "Enter" &&
      event.shiftKey === false &&
      inputValue.trim() !== ""
    ) {
      event.preventDefault();
      if (activeKey === "notes") {
        setNotes([...notes, inputValue]);
      } else {
        setTodo([...todo, { text: inputValue, completed: false }]);
      }
      setInputValue("");
    }
  };

  const handleTodoCompletion = (index) => {
    const newTodo = [...todo];
    newTodo[index].completed = !newTodo[index].completed;
    setTodo(newTodo);
  };

  return (
    <div className="App">
      <Tabs
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k)}
        id="controlled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="notes" title="Notes">
          <div className="list-container">
            <ListGroup>
              {notes.map((note, index) => (
                <ListGroup.Item key={index}>{note}</ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Tab>
        <Tab eventKey="todo" title="To-Do">
          <div className="list-container">
            <ListGroup>
              {todo.map((item, index) => (
                <ListGroup.Item key={index}>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleTodoCompletion(index)}
                  />
                  {item.text}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Tab>
      </Tabs>

      <InputGroup className="mb-3">
        <div className="textarea-container">
          <textarea
            className="form-control"
            placeholder={
              activeKey === "notes"
                ? "Enter a note and press Enter"
                : "Enter a to-do item and press Enter"
            }
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
      </InputGroup>
    </div>
  );
}

export default App;

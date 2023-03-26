import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Note(props) {
  const [content, setContent] = useState(props.content);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleContentKeyDown = (event) => {
    if (event.key === "Enter") {
      props.onContentChange(content);
      event.preventDefault();
    }
  };

  const handleDeleteNote = () => {
    props.onDeleteNote();
  };

  return (
    <div className="note-container mb-3">
      <textarea
        className="form-control"
        value={content}
        onChange={handleContentChange}
        onKeyDown={handleContentKeyDown}
      />
      <div className="note-delete">
        <Button className="note-modify-button" onClick={handleDeleteNote}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Note;

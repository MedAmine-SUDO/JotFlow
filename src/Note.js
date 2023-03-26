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
    <div className="note-container">
      <textarea
        className="form-control"
        value={content}
        onChange={handleContentChange}
        onKeyDown={handleContentKeyDown}
      />
      <Button className="note-modify-button" onClick={handleDeleteNote}>
        Delete
      </Button>
    </div>
  );
}

export default Note;

//   return (
//     <div className="note-container">
//       {editing ? (
//         <input
//           className="note-edit-input"
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//         />
//       ) : (
//         <div className="note-text">{text}</div>
//       )}
//       {editing ? (
//         <Button className="note-modify-button" onClick={handleModify}>
//           Modify
//         </Button>
//       ) : (
//         <Button className="note-edit-button" onClick={onEdit}>
//           Edit
//         </Button>
//       )}
//     </div>
//   );

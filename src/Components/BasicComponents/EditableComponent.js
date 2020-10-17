import React, { useState } from "react";

function EditableComponent(props) {
  const [content, setContent] = useState(props.content);

  function contentChange(e) {
    setContent(e.target.value);
  }

  return (
    <input
          type="text"
          value={content}
          onChange={(e) => contentChange(e)}
        />
  );
}

export default EditableComponent;

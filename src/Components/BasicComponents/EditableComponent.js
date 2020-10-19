import React, { useState } from "react";

function EditableComponent(props) {
  const [content, setContent] = useState(props.content);

  function contentChange(e) {
    setContent(e.target.value);
    props.setter(e.target.value, props.index);
  }

  return (
    <input type="text" value={content} onChange={(e) => contentChange(e)} />
  );
}

export default EditableComponent;

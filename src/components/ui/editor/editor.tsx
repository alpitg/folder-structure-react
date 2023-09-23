import React, { useState } from "react";
import { Editor, EditorTextChangeEvent } from "primereact/editor";
import "./editor.scss";

const EditorApp = ({ onTextChange }: any) => {
  const [text, setText] = useState<any>("");

  const onTextChangeEvent = (e: EditorTextChangeEvent) => {
    setText(e.htmlValue);
    onTextChange(e);
  };

  return (
    <>
      <div className="card">
        <Editor
          value={text}
          onTextChange={(e) => onTextChangeEvent(e)}
          style={{ height: "320px" }}
        />
      </div>
    </>
  );
};

export default EditorApp;

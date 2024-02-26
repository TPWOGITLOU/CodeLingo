import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";

interface CodeEditorProps {
  onChange: (action: string, data: string) => void;
  language: string;
  code: string;
  theme: string;
  height: string;
}

const CodeEditor: React.FC<CodeEditorProps> = (props) => {
  const [value, setValue] = useState(props.code);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setValue(value);
      props.onChange("code", value);
    }
  };

  return (
    <div>
      <Editor
        height={props.height}
        width={`100%`}
        language={props.language || "javascript"}
        value={props.code}
        theme={props.theme}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditor;

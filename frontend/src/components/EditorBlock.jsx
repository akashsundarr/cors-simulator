import Editor from "@monaco-editor/react";

const EditorBlock = ({ language, code, onChange, title }) => {
  return (
    <div className="editor-block">
      <div className="editor-header">
        <h3>{title}</h3>
      </div>
      <Editor
        height="300px"
        defaultLanguage={language}
        value={code}
        onChange={onChange}
        theme="vs-dark"
      />
    </div>
  );
};

export default EditorBlock;

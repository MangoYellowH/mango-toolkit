import React, { ReactElement } from 'react';
import { Editor as BaseEditor, EditorState } from 'draft-js';
import clsx from 'clsx';

interface EditorProps {
  classes?: string | string[];
  editorState: EditorState;
  placeholder?: string;
  onChange: (state: EditorState) => void;
}

const Editor: React.FC<EditorProps> = ({
  classes, onChange, editorState, placeholder,
}: EditorProps): ReactElement<EditorProps> => {
  const thisEditor = React.useRef<BaseEditor>(null);

  const focusEditor: () => void = () => {
    if (thisEditor.current) {
      thisEditor.current.focus();
    }
  };

  React.useEffect(() => {
    focusEditor();
  }, []);

  return (
    <div
      className={clsx('Editor', classes)}
      onClick={focusEditor}
      onKeyPress={focusEditor}
      role="textbox"
      tabIndex={0}
    >
      <BaseEditor
        ref={thisEditor}
        editorState={editorState}
        placeholder={placeholder}
        onChange={(state: EditorState): void => onChange(state)}
      />
    </div>
  );
};

export default Editor;

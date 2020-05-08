import React, { ReactElement } from 'react';
import { EditorState } from 'draft-js';
import { text } from '@storybook/addon-knobs';
import Mango from '../../HOC/WithTheme/Mango';
import Skyline from '../../HOC/WithTheme/Skyline';
import Editor from './index';


export default {
  title: 'Components/Editor',
};

const EditorStory = (): ReactElement => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty(),
  );

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      placeholder={text('placeholder', 'placeholder')}
    />
  );
};


export const mango = Mango<{}>(EditorStory);

export const skyline = Skyline<{}>(EditorStory);

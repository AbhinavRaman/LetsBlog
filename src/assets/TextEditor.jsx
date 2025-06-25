import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

const TextEditor = () => {
  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleSubmit = (e) => {
    e.preventDefault();
    // I can handle the blog post data here (title, editorState)
    // For now, just logging it
    console.log({ title, editorState });
  };

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onBoldClick = () => setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  const onItalicClick = () => setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  const onUnderlineClick = () => setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));

  return (
    <div>
      <div className='bg-zinc-600 h-[100vh] flex flex-col items-center justify-center'>
        <form onSubmit={handleSubmit} className='w-2/3 flex flex-col'>
          <label htmlFor="title" className='text-6xl m-4 text-white'>Title</label><br />
          <input
            type="text"
            className='border-blue-400 border-2 rounded p-2 m-4 w-2xl'
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter title"
          /> <br />
          <label htmlFor="body" className='text-3xl m-4 text-white'>Body</label> <br />
          <div className='m-4 md:w-2xl bg-white border rounded p-2 min-h-[200px]'>
            <div className="mb-2">
              <button type="button" onClick={onBoldClick} className="font-bold px-2">B</button>
              <button type="button" onClick={onItalicClick} className="italic px-2">I</button>
              <button type="button" onClick={onUnderlineClick} className="underline px-2">U</button>
            </div>
            <Editor
              editorState={editorState}
              onChange={setEditorState}
              handleKeyCommand={handleKeyCommand}
              placeholder="Write here..."
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded m-4 w-fit">Publish</button>
        </form>
      </div>
    </div>
  );
};

export default TextEditor;
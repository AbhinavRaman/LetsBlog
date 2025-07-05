import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { useAuth } from '../context/AuthContext';

const TextEditor = () => {
  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert('Login first to publish');
      return;
    }
    // You can handle the blog post data here (title, editorState)
    // For now, just log it
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
    <div className="min-h-screen bg-[#151414] text-white">
      <div className="w-full md:w-[80%] mx-auto p-8 md:p-12">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Create Your Blog</h1>
            <p className="text-gray-300 text-lg">Share your thoughts with the world</p>
          </div>

          {/* Title Input */}
          <div className="mb-8">
            <label htmlFor="title" className="block text-2xl font-semibold mb-4">Title</label>
            <input
              type="text"
              className="w-full bg-white text-black border-0 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Enter your blog title..."
            />
          </div>
          
          {/* Editor Section */}
          <div className="mb-8">
            <label className="block text-2xl font-semibold mb-4">Content</label>
            <div className="bg-white rounded-lg border-2 border-blue-400 overflow-hidden">
              {/* Toolbar */}
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <div className="flex gap-2">
                  <button 
                    type="button" 
                    onClick={onBoldClick} 
                    className="text-black px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors font-bold text-sm"
                  >
                    B
                  </button>
                  <button 
                    type="button" 
                    onClick={onItalicClick} 
                    className="text-black px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors italic text-sm"
                  >
                    I
                  </button>
                  <button 
                    type="button" 
                    onClick={onUnderlineClick} 
                    className="text-black px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors underline text-sm"
                  >
                    U
                  </button>
                </div>
              </div>
              
              {/* Editor */}
              <div className="p-4 min-h-[300px] md:min-h-[400px] text-black">
                <Editor
                  editorState={editorState}
                  onChange={setEditorState}
                  handleKeyCommand={handleKeyCommand}
                  placeholder="Write your article here..."
                  className="text-black text-base leading-relaxed"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-white text-black font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Publish Article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TextEditor;
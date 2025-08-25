import React, { useEffect, useState } from 'react';
import { db } from '../assets/firebase';
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import NavBar from '../assets/NavBar';

const EditPost = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [tags, setTags] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, 'posts', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (user && user.uid === data.authorId) {
            setTitle(data.title);
            if (data.content) {
              try {
                const rawContent = JSON.parse(data.content);
                setEditorState(EditorState.createWithContent(convertFromRaw(rawContent)));
              } catch {
                setEditorState(EditorState.createEmpty());
              }
            }
            setTags(data.tags ? data.tags.join(', ') : '');
          } else {
            setError('You are not authorized to edit this post.');
          }
        } else {
          setError('Post not found.');
        }
      } catch {
        setError('Failed to fetch post.');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await updateDoc(doc(db, 'posts', id), {
        title,
        content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
        tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
        updatedAt: serverTimestamp(),
      });
      navigate(`/posts/${id}`);
    } catch (err) {
      if (err.code === 'permission-denied') {
        setError('You do not have permission to edit this post.');
      } else {
        setError('Failed to update post.');
      }
    }
  };

  if (loading) return <div className="text-center mt-10 text-white">Loading post...</div>;
  if (error) return <div className="text-center mt-10 text-red-400">{error}</div>;

  return (
    <div className="min-h-screen bg-[#151414] text-white">
      <NavBar />
      <div className="flex items-center justify-center min-h-screen">
        <form onSubmit={handleSubmit} className="bg-[#222] p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-6">Edit Post</h2>
          <input
            type="text"
            placeholder="Title"
            className="w-full mb-4 p-3 rounded bg-[#181818] border border-gray-700 text-white focus:outline-none"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <div className="mb-4">
            <label className="block mb-2">Content</label>
            <div className="bg-white rounded border border-gray-300 p-2 min-h-[200px] text-black">
              <Editor
                editorState={editorState}
                onChange={setEditorState}
                placeholder="Edit your article..."
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="Tags (comma separated)"
            className="w-full mb-6 p-3 rounded bg-[#181818] border border-gray-700 text-white focus:outline-none"
            value={tags}
            onChange={e => setTags(e.target.value)}
          />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition-colors">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditPost; 
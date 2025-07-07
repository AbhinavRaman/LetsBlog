import React, { useEffect, useState } from 'react';
import { db } from '../assets/firebase';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Editor, EditorState, convertFromRaw } from 'draft-js';

const Post = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [post, setPost] = useState(null);
  const [editorState, setEditorState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, 'posts', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setPost({ id: docSnap.id, ...data });
          if (data.content) {
            try {
              const rawContent = JSON.parse(data.content);
              setEditorState(EditorState.createWithContent(convertFromRaw(rawContent)));
            } catch {
              setEditorState(null);
            }
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
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      await deleteDoc(doc(db, 'posts', id));
      navigate('/posts');
    }
  };

  if (loading) return <div className="text-center mt-10 text-white">Loading post...</div>;
  if (error) return <div className="text-center mt-10 text-red-400">{error}</div>;
  if (!post) return null;

  return (
    <div className="min-h-screen bg-[#151414] text-white p-8 flex flex-col items-center">
      <div className="bg-[#222] p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
        <div className="mb-2 text-sm opacity-70">
          By {post.author} {post.createdAt?.toDate ? `on ${post.createdAt.toDate().toLocaleString()}` : ''}
        </div>
        <div className="mb-4">
          {editorState ? (
            <Editor editorState={editorState} readOnly={true} onChange={() => {}} />
          ) : (
            <div>{post.content && typeof post.content === 'string' ? post.content.slice(0, 200) : ''}</div>
          )}
        </div>
        <div className="text-xs opacity-60 mb-4">{post.tags && post.tags.join(', ')}</div>
        {user && user.uid === post.authorId && (
          <div className="flex gap-4">
            <Link to={`/posts/${id}/edit`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Edit</Link>
            <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post; 
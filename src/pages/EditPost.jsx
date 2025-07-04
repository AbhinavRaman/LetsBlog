import React, { useEffect, useState } from 'react';
import { db } from '../assets/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const EditPost = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, 'posts', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (user && user.uid === data.authorId) {
          setTitle(data.title);
          setContent(data.content);
          setTags(data.tags ? data.tags.join(', ') : '');
        } else {
          setError('You are not authorized to edit this post.');
        }
      } else {
        setError('Post not found.');
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
        content,
        tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
      });
      navigate(`/posts/${id}`);
    } catch {
      setError('Failed to update post.');
    }
  };

  if (error) return <div className="text-center mt-10 text-red-400">{error}</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#151414] text-white">
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
        <textarea
          placeholder="Content"
          className="w-full mb-4 p-3 rounded bg-[#181818] border border-gray-700 text-white focus:outline-none"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={8}
          required
        />
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
  );
};

export default EditPost; 
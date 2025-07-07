import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../assets/firebase';
import { doc, getDoc, collection, query, where, getDocs, deleteDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';

// Helper to extract plain text from Draft.js raw content
function getPlainTextFromContent(content) {
  try {
    const raw = JSON.parse(content);
    return raw.blocks.map(block => block.text).join(' ');
  } catch {
    return '';
  }
}

const Profile = () => {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    const fetchProfileAndPosts = async () => {
      try {
        // Fetch profile
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
        } else {
          setError('Profile not found.');
        }
        // Fetch user's posts
        const q = query(collection(db, 'posts'), where('authorId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        setPosts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        setError('Failed to fetch profile or posts.');
      } finally {
        setLoading(false);
      }
    };
    fetchProfileAndPosts();
  }, [user, navigate]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      await deleteDoc(doc(db, 'posts', id));
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  if (loading) return <div className="text-center mt-10 text-white">Loading dashboard...</div>;
  if (error) return <div className="text-center mt-10 text-red-400">{error}</div>;

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#151414] text-white p-8">
      <div className="bg-[#222] p-8 rounded-lg shadow-lg w-full max-w-lg mb-8">
        <h2 className="text-2xl font-bold mb-6">User Dashboard</h2>
        <div className="mb-4"><strong>Name:</strong> {profile.name}</div>
        <div className="mb-4"><strong>Age:</strong> {profile.age}</div>
        <div className="mb-4"><strong>Gender:</strong> {profile.gender}</div>
        <div className="mb-4"><strong>Email:</strong> {profile.email}</div>
        <div className="flex gap-4 mt-6">
          <button onClick={() => navigate('/editor')} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Start a blog</button>
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Log out</button>
        </div>
      </div>
      <div className="w-full max-w-2xl">
        <h3 className="text-xl font-bold mb-4">Your Posts</h3>
        {posts.length === 0 && <div>No posts yet.</div>}
        <div className="space-y-6">
          {posts.map(post => {
            const preview = getPlainTextFromContent(post.content).slice(0, 120);
            return (
              <div key={post.id} className="bg-[#222] p-6 rounded-lg shadow-lg">
                <Link to={`/posts/${post.id}`}>
                  <h4 className="text-lg font-bold mb-2 hover:underline">{post.title}</h4>
                </Link>
                <div className="mb-2 text-sm opacity-70">
                  {post.createdAt?.toDate ? `on ${post.createdAt.toDate().toLocaleString()}` : ''}
                </div>
                <div className="mb-2">{preview}{preview.length === 120 ? '...' : ''}</div>
                <div className="text-xs opacity-60 mb-2">{post.tags && post.tags.join(', ')}</div>
                <div className="flex gap-4">
                  <Link to={`/posts/${post.id}/edit`} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Edit</Link>
                  <button onClick={() => handleDelete(post.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile; 
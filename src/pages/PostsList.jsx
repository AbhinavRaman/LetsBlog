import React, { useEffect, useState } from 'react';
import { db } from '../assets/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import NavBar from '../assets/NavBar';

// Helper to extract plain text from Draft.js raw content
function getPlainTextFromContent(content) {
  try {
    const raw = JSON.parse(content);
    return raw.blocks.map(block => block.text).join(' ');
  } catch {
    return '';
  }
}

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      setPosts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    };
    fetchPosts();
  }, []);

  if (loading) return <div className="text-center mt-10 text-white">Loading posts...</div>;

  return (
    <div className="min-h-screen bg-[#151414] text-white">
      <NavBar />
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-8">All Posts</h2>
        {posts.length === 0 && <div>No posts yet.</div>}
        <div className="space-y-6">
          {posts.map(post => {
            const preview = getPlainTextFromContent(post.content).slice(0, 120);
            return (
              <div key={post.id} className="bg-[#222] p-6 rounded-lg shadow-lg">
                <Link to={`/posts/${post.id}`}>
                  <h3 className="text-xl font-bold mb-2 hover:underline">{post.title}</h3>
                </Link>
                <div className="mb-2 text-sm opacity-70">
                  By {post.author} {post.createdAt?.toDate ? `on ${post.createdAt.toDate().toLocaleString()}` : ''}
                </div>
                <div className="mb-2">{preview}{preview.length === 120 ? '...' : ''}</div>
                <div className="text-xs opacity-60">{post.tags && post.tags.join(', ')}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostsList; 
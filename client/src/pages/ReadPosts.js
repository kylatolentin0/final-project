import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';

const ReadPosts = (props) => {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await supabase
                .from('Posts')
                .select();

            setPosts(data);
        };

        fetchPosts(); // Call fetchPosts when component mounts

        // Clean-up function
        return () => {
            // Any clean-up code if needed
        };
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleDeletePost = async (id) => {
        await supabase
            .from('Posts')
            .delete()
            .eq('id', id);

        setPosts(posts.filter(post => post.id !== id));
    };

    const handleUpdatePost = async (id, updatedPostData) => {
        // Implement update functionality here
    };

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="ReadPosts">
            <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <br /> {/* New line */}
            {
                filteredPosts && filteredPosts.length > 0 ?
                    filteredPosts.map((post, index) =>
                        <Card
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            author={post.author}
                            description={post.description}
                            onDelete={handleDeletePost}
                            onUpdate={handleUpdatePost}
                        />
                    ) : <h2>{'No Artists Yet :('}</h2>
            }
        </div>
    )
}

export default ReadPosts;
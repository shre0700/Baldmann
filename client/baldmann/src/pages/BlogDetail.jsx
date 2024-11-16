// src/pages/BlogDetail.jsx
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const BlogDetail = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/blog/${id}`);
//         const data = await response.json();
//         setBlog(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching blog:', error);
//         setLoading(false);
//       }
//     };

//     fetchBlog();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (!blog) return <p>Blog not found</p>;

//   return (
//     <div>
//       <h1>{blog.title}</h1>
//       <p>By {blog.author}</p>
//       <div dangerouslySetInnerHTML={{ __html: blog.content }} />
//     </div>
//   );
// };

// export default BlogDetail;

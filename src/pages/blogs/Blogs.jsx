import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Blogs.module.css';
import { blogs } from '../../blogs';

const Blogs = () => {

  const [selectedBlog, setSelectedBlog] = useState(null);
  const navigate = useNavigate();

  const openBlog = (blog) => {
    navigate(`/blogs/${blog.file}`);
  };

  const goBack = () => {
    navigate('/blogs');
  };

  return (
    <div className={styles.container}>
      {!selectedBlog ? (
        <>
          <h1 className={styles.title}>Our Blogs</h1>
          <div className={styles.grid}>
            {blogs.map((blog) => (
              <div 
                key={blog.id} 
                className={styles.card} 
                onClick={() => openBlog(blog)} 
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.cardHeader}>
                  <h2 className={styles.cardTitle}>{blog.title}</h2>
                  {blog.tags?.map((tag, i) => (
                    <span 
                      key={i} 
                      style={{
                        margin: "5px", 
                        display: "inline-block", 
                        backgroundColor: "#dae2ffff", 
                        padding: "5px 10px", 
                        borderRadius: "5px", 
                        color: "var(--primary)",
                        fontSize: "0.8em"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                  <p className={styles.date}>{blog.date}</p>
                </div>
                <div className={styles.excerpt}>
                  <p>{blog.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.blogContentContainer}>
          
          <div className={styles.iframeContainer}>
            {selectedBlog.component}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
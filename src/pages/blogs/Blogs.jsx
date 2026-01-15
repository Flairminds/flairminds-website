import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Blogs.module.css';
import { blogs } from '../../blogs';
import { FaArrowRight } from 'react-icons/fa';

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
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>OUR INSIGHTS</h1>
              <p className={styles.heroDescription}>
                Explore the latest trends, strategies, and innovations in the digital world.
                Our team of experts shares deep dives into software engineering, AI, and enterprise solutions.
              </p>
            </div>
          </section>
          <div className={styles.mainContent}>
            <div className={styles.grid}>
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className={styles.card}
                  onClick={() => openBlog(blog)}
                >
                  <div className={styles.cardHeader}>
                    <p className={styles.date}>{blog.date}</p>
                    <h2 className={styles.cardTitle}>{blog.title}</h2>
                    <div className={styles.tagList}>
                      {blog.tags?.map((tag, i) => (
                        <span key={i} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.excerpt}>
                    <p>{blog.excerpt}</p>
                  </div>
                  <div className={styles.readMoreBtn}>
                    Read Article <FaArrowRight size={14} />
                  </div>
                </div>
              ))}
            </div>
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
import { useLocation, useNavigate } from "react-router-dom";
import { blogs } from "../../blogs/index";
import styles from "./BlogsLayout.module.css";

export const BlogsLayout = () => {

    const navigate = useNavigate();

    const pathname = useLocation();

    const blog = blogs.find((blog) => blog.file === pathname.pathname.split('/')[2]);

    return (
        <div style={{ backgroundColor: blog.layout === 'light' ? '#ffffff' : '#073B4C', minHeight: '100vh' }}>
            <div style={{ padding: '15vh 7vw' }}>
                <div style={blog.layout === 'light' ? { maxWidth: '820px', margin: '0 auto' } : undefined}>
                    <button onClick={() => navigate('/blogs')} className={styles.backButton}>
                        ← Back to Blogs
                    </button>
                </div>
                <blog.component />
            </div>
        </div>
    );
};

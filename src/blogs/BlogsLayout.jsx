import { useLocation, useNavigate } from "react-router-dom";
import { blogs } from "./index";
import styles from "./BlogsLayout.module.css";

export const BlogsLayout = () => {

    const navigate = useNavigate();

    const pathname = useLocation();

    const blog = blogs.find((blog) => blog.file === pathname.pathname.split('/')[2]);

    return (
        <div style={{margin: '2rem 5rem'}}>
            <button onClick={() => navigate('/blogs')} className={styles.backButton}>
                ← Back to Blogs
            </button>
            <blog.component />
        </div>
    );
};
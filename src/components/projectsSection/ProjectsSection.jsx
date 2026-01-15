import styles from './ProjectsSection.module.css';
import projectsImage from '../../assets/projects_team_collaboration_1768472782220.png';
import { useNavigate } from 'react-router-dom';

const ProjectsSection = () => {
    const navigate = useNavigate();

    const highlights = [
        {
            title: "Delivering Success",
            description: "Proven expertise in executing high-impact projects across industries."
        },
        {
            title: "Optimized Operations",
            description: "Driving efficiency with AI-powered automation and data-driven insights."
        },
        {
            title: "Enterprise-Grade Excellence",
            description: "Robust mobile apps and scalable enterprise solutions tailored for growth."
        },
        {
            title: "Innovation in Action",
            description: "A strong portfolio showcasing our commitment to digital transformation."
        },
        {
            title: "Results-Driven Approach",
            description: "Helping businesses achieve strategic goals through cutting-edge technology."
        }
    ];

    return (
        <section className={styles.projectsSection}>
            <h2 className={styles.sectionTitle}>PROJECTS</h2>

            <div className={styles.contentWrapper}>
                <div className={styles.imageContainer}>
                    <img
                        src={projectsImage}
                        alt="Team Collaboration"
                        className={styles.image}
                    />
                </div>

                <div className={styles.highlightsContainer}>
                    {highlights.map((highlight, index) => (
                        <div key={index} className={styles.highlightItem}>
                            <div className={styles.bullet}></div>
                            <div>
                                <h4 className={styles.highlightTitle}>{highlight.title}</h4>
                                <p className={styles.highlightDescription}>{highlight.description}</p>
                            </div>
                        </div>
                    ))}

                    <button
                        className={styles.exploreButton}
                        onClick={() => navigate('/case-study')}
                    >
                        Explore
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;

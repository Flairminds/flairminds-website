import Hero from '../../components/hero/Hero'
import UserDetailsModal from '../../components/userDetailsModal/UserDetailsModal'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useCallback, useEffect as useCallbackEffect } from 'react'
import ProductCard from '../../components/productCard/ProductCard'
import { products } from '../../data/productsData'
import styles from "./StorePage.module.css"
import UpcomingProduct from '../../components/upcomingProduct/UpcomingProduct'
import FeedbackModal from '../../components/feedbackModal/FeedbackModal'
import { VscFeedback } from "react-icons/vsc";
import { toggleFeedbackModal } from '../../redux/slices/visitorDetailsModalSlice'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import DemoModal from '../../components/demoModal/DemoModal'
import { linkSharingHashes } from '../../data/linkSharingHashes'
import ShareModal from '../../components/shareModal/ShareModal'
import Hero1 from '../../components/hero1/Hero1'
import Hero2 from '../../components/hero2/Hero2'
import { filterProductsByPrompt } from '../../services/gemini'
import { FiSearch } from 'react-icons/fi'
import ServicesSection from '../../components/servicesSection/ServicesSection'
import ProjectsSection from '../../components/projectsSection/ProjectsSection'
import ClientsSection from '../../components/clientsSection/ClientsSection'

const StorePage = () => {
  const { open, feedBackOpen, demoModalOpen, shareName } = useSelector(state => state.visitorDetailsModal);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [originalProducts, setOriginalProducts] = useState({
    released: products.filter(product => product.status === 'released'),
    upcoming: products.filter(product => product.status === 'upcoming')
  });

  const availableProducts = searchResults?.released || originalProducts.released;
  const upcomingProducts = searchResults?.upcoming || originalProducts.upcoming;
  const dispatch = useDispatch();

  const handleSearch = useCallback(async () => {
    if (!searchQuery.trim()) {
      setSearchResults(null);
      return;
    }

    setIsSearching(true);
    try {
      const results = await filterProductsByPrompt(searchQuery);
      const released = results.filter(p => p.status === 'released');
      const upcoming = results.filter(p => p.status === 'upcoming');
      setSearchResults({ released, upcoming });
    } catch (error) {
      console.error('Search failed:', error);
      setSearchResults({ released: [], upcoming: [] });
    } finally {
      setIsSearching(false);
    }
  }, [searchQuery]);

  useCallbackEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        handleSearch();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchQuery, handleSearch]);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const id = linkSharingHashes[hash];
      if (id !== undefined) {
        const productElement = document.getElementById(parseInt(id));
        if (productElement) {
          const yOffset = 70;
          const y = productElement.getBoundingClientRect().top + window.scrollY - yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }
  }, []);

  return (
    <div className={styles.main}>
      <Hero2 />

      <section className={styles.solutions_section}>
        <div className={styles.section_header}>
          <div className={styles.title_group}>
            <span className={styles.sub_tag}>// ACTIVE_SOLUTIONS</span>
            <h2 className={styles.main_title}>Our Mission Suite</h2>
          </div>

          <div className={styles.search_container}>
            <div className={styles.search_input_wrapper}>
              <FiSearch className={styles.search_icon} />
              <input
                type="text"
                className={styles.search_input}
                placeholder="Search solutions by name or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              {searchQuery && (
                <button
                  className={styles.clear_search}
                  onClick={() => {
                    setSearchQuery('');
                    setSearchResults(null);
                  }}
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>

        {isSearching ? (
          <div className={styles.status_message}>
            <span className={styles.sub_tag}>{">"} INITIATING_SEARCH...</span>
            <p>Scanning intelligence database for "{searchQuery}"</p>
          </div>
        ) : searchResults?.released?.length === 0 ? (
          <div className={styles.status_message}>
            <span className={styles.sub_tag}>{">"} NO_MATCH_FOUND</span>
            <p>Query "{searchQuery}" returned zero matches. Refine parameters.</p>
          </div>
        ) : (
          <div className={styles.results_grid}>
            {availableProducts?.map((product, index) => <ProductCard prop={product} key={index} />)}
          </div>
        )}
      </section>

      {upcomingProducts.length > 0 && (
        <section className={styles.solutions_section} style={{ paddingTop: 0 }}>
          <div className={styles.section_header} style={{ borderBottom: 'none' }}>
            <div className={styles.title_group}>
              <span className={styles.sub_tag}>// R&D_PIPELINE</span>
              <h2 className={styles.main_title}>Upcoming Projects</h2>
            </div>
          </div>
          <div className={styles.upcoming_products}>
            {upcomingProducts?.map((product, index) => <UpcomingProduct prop={product} key={index} />)}
          </div>
        </section>
      )}

      {open && <UserDetailsModal />}
      {feedBackOpen && <FeedbackModal />}

      <div className={styles.feedback_button_container} onClick={() => { dispatch(toggleFeedbackModal()) }}>
        <VscFeedback className={styles.feedback_icon} />
        <button className={styles.feedback_botton}>SUBMIT_FEEDBACK</button>
      </div>

      {demoModalOpen && <DemoModal />}
      {shareName && <ShareModal />}
    </div>
  )
}

export default StorePage
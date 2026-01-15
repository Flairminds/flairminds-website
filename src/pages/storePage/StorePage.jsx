import Hero from '../../components/hero/Hero'
import UserDetailsModal from '../../components/userDetailsModal/UserDetailsModal'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useCallback, useEffect as useCallbackEffect } from 'react'
import ProductCard from '../../components/productCard/ProductCard'
import { products } from '../../data/productsData'
import homeStyles from "./StorePage.module.css"
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
    <div className={homeStyles.main}>
      {/* <Hero/> */}
      {/* <Hero1/> */}
      <Hero2 />

      <div style={{ margin: '3rem 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h3 style={{ fontSize: '3rem', color: 'var(--primary)', margin: 0 }}>Our Solutions</h3>
          <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
            <input
              type="text"
              placeholder="Search products by name, features, or use cases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              style={{
                width: '100%',
                padding: '0.8rem 1rem 0.8rem 3rem',
                borderRadius: '50px',
                border: '1px solid #ccc',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
            <FiSearch
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#666',
                fontSize: '1.2rem'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSearchResults(null);
                }}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#666',
                  fontSize: '1.2rem'
                }}
              >
                ×
              </button>
            )}
          </div>
        </div>
        {isSearching ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>Searching for "{searchQuery}"...</div>
        ) : searchResults?.released?.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            No products found matching "{searchQuery}". Try different keywords.
          </div>
        ) : (
          availableProducts?.map((product, index) => <ProductCard prop={product} key={index} />)
        )}
      </div>
      {open && <UserDetailsModal />}
      {upcomingProducts.length > 0 && (
        <>
          <h1 className={homeStyles.heading}>Upcoming Products</h1>
          <div className={homeStyles.upcoming_products}>
            {upcomingProducts?.map((product, index) => <UpcomingProduct prop={product} key={index} />)}
          </div>
        </>
      )}
      {feedBackOpen && <FeedbackModal />}
      <div className={homeStyles.feedback_button_container} onClick={() => { dispatch(toggleFeedbackModal()) }}>
        <VscFeedback className={homeStyles.feedback_icon} />
        <button className={homeStyles.feedback_botton}>Feedback</button>
      </div>
      {demoModalOpen && <DemoModal />}
      {shareName && <ShareModal />}
    </div>
  )
}

export default StorePage
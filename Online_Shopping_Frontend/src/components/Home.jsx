import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const topBarStyle = {
  backgroundColor: '#2d2d2d',
  color: '#fff',
  padding: '10px 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '12px',
}

const topBarLinksStyle = {
  display: 'flex',
  gap: '20px',
}

const topBarLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  cursor: 'pointer',
}

const navStyle = {
  backgroundColor: '#fff',
  padding: '16px 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
}

const logoStyle = {
  color: '#e74c3c',
  fontWeight: 800,
  fontSize: '28px',
  letterSpacing: '2px',
  textDecoration: 'none',
}

const navLinksStyle = {
  display: 'flex',
  gap: '28px',
  listStyle: 'none',
  margin: 0,
  padding: 0,
}

const navLinkStyle = {
  color: '#333',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '13px',
  letterSpacing: '1px',
}

const navIconsStyle = {
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
}

const iconBtnStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '4px',
}

const cartBadgeStyle = {
  position: 'relative',
}

const cartCountStyle = {
  position: 'absolute',
  top: '-6px',
  right: '-6px',
  backgroundColor: '#e74c3c',
  color: '#fff',
  borderRadius: '50%',
  width: '18px',
  height: '18px',
  fontSize: '11px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const heroStyle = {
  display: 'flex',
  minHeight: '480px',
  backgroundColor: '#f5f5f5',
}

const heroLeftStyle = {
  flex: 1,
  padding: '60px 50px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}

const heroTagStyle = {
  fontSize: '12px',
  color: '#888',
  letterSpacing: '3px',
  marginBottom: '12px',
}

const heroTitleStyle = {
  fontSize: '48px',
  fontWeight: 700,
  color: '#000',
  margin: '0 0 8px 0',
  lineHeight: 1.1,
}

const heroSubtitleStyle = {
  fontSize: '48px',
  fontWeight: 700,
  color: '#000',
  margin: '0 0 24px 0',
}

const shopBtnStyle = {
  display: 'inline-block',
  backgroundColor: '#e74c3c',
  color: '#fff',
  padding: '14px 32px',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '13px',
  letterSpacing: '1px',
  width: 'fit-content',
}

const heroRightStyle = {
  flex: 1,
  backgroundImage: 'url(/hero-banner.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

const categoriesStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 0,
}

const categoryBlockStyle = {
  position: 'relative',
  height: '400px',
  overflow: 'hidden',
}

const categoryImgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}

const categoryOverlayStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '120px 0',
  backgroundColor: 'rgba(255,255,255,0.9)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const categoryTextStyle = {
  fontSize: '24px',
  fontWeight: 700,
  letterSpacing: '2px',
  color: '#333',
}

const brandsTitleStyle = {
  textAlign: 'center',
  fontSize: '32px',
  fontWeight: 700,
  margin: '80px 0 40px 0',
  letterSpacing: '2px',
  color: '#333',
  textTransform: 'uppercase',
}

const valuePropsStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '80px 40px',
  backgroundColor: '#fff',
  borderTop: '1px solid #eee',
  flexWrap: 'wrap',
  gap: '30px',
}

const valuePropItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  maxWidth: '250px',
}

const valuePropIconStyle = {
  marginBottom: '20px',
  color: '#e74c3c',
}

const valuePropTitleStyle = {
  fontSize: '14px',
  fontWeight: 700,
  color: '#333',
  marginBottom: '8px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
}

const valuePropSubStyle = {
  fontSize: '13px',
  color: '#888',
  lineHeight: 1.6,
}

const newArrivalsSectionStyle = {
  padding: '80px 40px',
  backgroundColor: '#f9f9f9',
}

const productGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '30px',
  maxWidth: '1200px',
  margin: '0 auto',
}

const productCardStyle = {
  backgroundColor: '#fff',
  padding: '15px',
  borderRadius: '8px',
  transition: 'transform 0.3s ease, boxShadow 0.3s ease',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
}

const productImgStyle = {
  width: '100%',
  height: '320px',
  objectFit: 'cover',
  borderRadius: '4px',
  marginBottom: '15px',
}

const newsletterSectionStyle = {
  backgroundColor: '#1a1a1a',
  color: '#fff',
  padding: '100px 40px',
  textAlign: 'center',
}

const newsletterContentStyle = {
  maxWidth: '600px',
  margin: '0 auto',
}

const newsletterInputWrapperStyle = {
  display: 'flex',
  marginTop: '40px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
}

const newsletterInputStyle = {
  flex: 1,
  padding: '16px 24px',
  border: 'none',
  fontSize: '14px',
  outline: 'none',
}

const newsletterBtnStyle = {
  backgroundColor: '#e74c3c',
  color: '#fff',
  padding: '16px 32px',
  border: 'none',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
}

const productsData = [
  { id: 1, title: 'Premium Cotton Tee', price: '$29.00', category: 'MENS', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500' },
  { id: 2, title: 'Silk Floral Dress', price: '$89.00', category: 'WOMENS', img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500' },
  { id: 3, title: 'Leather Crossbody Bag', price: '$120.00', category: 'ACCESSORIES', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500' },
  { id: 4, title: 'Slim Fit Denim', price: '$55.00', category: 'MENS', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500' },
]

const sliderContainerStyle = {
  position: 'relative',
  padding: '0 60px',
  marginBottom: '80px',
  maxWidth: '1200px',
  margin: '0 auto 80px auto',
}

const sliderWrapperStyle = {
  display: 'flex',
  overflowX: 'hidden',
  scrollBehavior: 'smooth',
  gap: '0', // No gap for single logo display
  padding: '20px 0',
  scrollSnapType: 'x mandatory',
}

const brandLogoStyle = {
  minWidth: '100%', // Show one logo at a time
  height: '150px', // Increased size
  objectFit: 'contain',
  filter: 'grayscale(100%)',
  opacity: 0.6,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  scrollSnapAlign: 'center',
}

const arrowBtnStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '50%',
  width: '44px',
  height: '44px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 10,
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
}

const dotContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '20px',
  marginBottom: '40px',
}

const dotStyle = (isActive) => ({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: isActive ? '#e74c3c' : '#ddd',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
})

const brandsData = [
  { name: 'Zara', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg' },
  { name: 'H&M', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg' },
  { name: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
  { name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
  { name: 'Puma', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Puma-Logo.svg' },
  { name: 'Gucci', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Gucci_logo.svg' },
  { name: 'Prada', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Prada-Logo.svg' },
  { name: 'Levi\'s', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Levi%27s_logo.svg' },
]

function Home() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % brandsData.length;
      goToIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const goToIndex = (index) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * index;
      sliderRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const handleManualScroll = () => {
    if (sliderRef.current) {
      const index = Math.round(sliderRef.current.scrollLeft / sliderRef.current.clientWidth);
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  const scroll = (direction) => {
    const nextIndex = direction === 'left'
      ? (activeIndex - 1 + brandsData.length) % brandsData.length
      : (activeIndex + 1) % brandsData.length;
    goToIndex(nextIndex);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <div style={topBarStyle}>
        <span>FREE SHIPPING ON ALL US ORDERS OVER $50</span>
        <div style={topBarLinksStyle}>
          <a href="#usd" style={topBarLinkStyle}>USD</a>
          <a href="#lang" style={topBarLinkStyle}>English</a>
          <a href="#account" style={topBarLinkStyle}>My Account</a>
        </div>
      </div>

      <nav style={navStyle}>
        <Link to="/home" style={logoStyle}>Magic Cart</Link>
        <ul style={navLinksStyle}>
          <li><Link to="/men" style={navLinkStyle}>Mens</Link></li>
          <li><a href="#womens" style={navLinkStyle}>Womens</a></li>
          <li><a href="#promo" style={navLinkStyle}>Brands</a></li>
          <li><a href="#pages" style={navLinkStyle}>Contact</a></li>
          <li><a href="#blog" style={navLinkStyle}>Deals</a></li>
          <li><a href="#contact" style={navLinkStyle}>My Cart</a></li>
        </ul>
        <div style={navIconsStyle}>
          <button style={iconBtnStyle} aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <Link to="/login" style={{ ...navLinkStyle, display: 'flex' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
          </Link>
          <div style={cartBadgeStyle}>
            <button style={iconBtnStyle} aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </button>
            <span style={cartCountStyle}>0</span>
          </div>
        </div>
      </nav>

      <section style={heroStyle}>
        <div style={heroLeftStyle}>
          <span style={heroTagStyle}>SPRING / SUMMER COLLECTION 2017</span>
          <h1 style={heroTitleStyle}>Get up to 30% Off</h1>
          <h2 style={heroSubtitleStyle}>New Arrivals</h2>
          <Link to="/shop" style={shopBtnStyle}>SHOP NOW</Link>
        </div>
        <div style={heroRightStyle} />
      </section>

      <section style={categoriesStyle}>
        <div style={categoryBlockStyle}>
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600"
            alt="Women's"
            style={categoryImgStyle}
          />
          <div style={categoryOverlayStyle}>
            <span style={categoryTextStyle}>WOMEN'S</span>
          </div>
        </div>
        <div style={categoryBlockStyle}>
          <img
            src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600"
            alt="Accessories"
            style={categoryImgStyle}
          />
          <div style={categoryOverlayStyle}>
            <span style={categoryTextStyle}>ACCESSORIES</span>
          </div>
        </div>
        <Link to="/men" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={categoryBlockStyle}>
            <img
              src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600"
              alt="Men's"
              style={categoryImgStyle}
            />
            <div style={categoryOverlayStyle}>
              <span style={categoryTextStyle}>MEN'S</span>
            </div>
          </div>
        </Link>
      </section>

      <h2 style={brandsTitleStyle}>Our Brands</h2>

      <div style={sliderContainerStyle}>
        <button
          onClick={() => scroll('left')}
          style={{ ...arrowBtnStyle, left: '0' }}
          aria-label="Previous Brand"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div
          ref={sliderRef}
          style={sliderWrapperStyle}
          onScroll={handleManualScroll}
        >
          {brandsData.map((brand, index) => (
            <img
              key={index}
              src={brand.logo}
              alt={brand.name}
              style={brandLogoStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.filter = 'grayscale(0%)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.filter = 'grayscale(100%)';
                e.currentTarget.style.opacity = '0.6';
              }}
            />
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          style={{ ...arrowBtnStyle, right: '0' }}
          aria-label="Next Brand"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div style={dotContainerStyle}>
        {brandsData.map((_, index) => (
          <div
            key={index}
            style={dotStyle(index === activeIndex)}
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>

      <section style={valuePropsStyle}>
        <div style={valuePropItemStyle}>
          <div style={valuePropIconStyle}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="1" y="3" width="15" height="13" /><polyline points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
          </div>
          <h3 style={valuePropTitleStyle}>Free Shipping</h3>
          <p style={valuePropSubStyle}>On all orders over $99. Fast and reliable delivery to your doorstep.</p>
        </div>
        <div style={valuePropItemStyle}>
          <div style={valuePropIconStyle}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h3 style={valuePropTitleStyle}>24/7 Support</h3>
          <p style={valuePropSubStyle}>Our dedicated team is here to help you anytime, anywhere.</p>
        </div>
        <div style={valuePropItemStyle}>
          <div style={valuePropIconStyle}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <h3 style={valuePropTitleStyle}>Easy Returns</h3>
          <p style={valuePropSubStyle}>Not happy? Return your items within 30 days for a full refund.</p>
        </div>
        <div style={valuePropItemStyle}>
          <div style={valuePropIconStyle}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h3 style={valuePropTitleStyle}>Secure Payment</h3>
          <p style={valuePropSubStyle}>Your security is our priority. Shop with peace of mind.</p>
        </div>
      </section>

      <section style={newArrivalsSectionStyle}>
        <h2 style={{ ...brandsTitleStyle, marginTop: 0 }}>New Arrivals</h2>
        <div style={productGridStyle}>
          {productsData.map(product => (
            <div
              key={product.id}
              style={productCardStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
              }}
            >
              <img src={product.img} alt={product.title} style={productImgStyle} />
              <div style={{ padding: '0 5px' }}>
                <span style={{ fontSize: '11px', color: '#e74c3c', fontWeight: 600, letterSpacing: '1px' }}>{product.category}</span>
                <h4 style={{ fontSize: '15px', color: '#333', margin: '8px 0', fontWeight: 600 }}>{product.title}</h4>
                <div style={{ fontWeight: 700, color: '#000', fontSize: '16px' }}>{product.price}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link to="/shop" style={{ ...shopBtnStyle, backgroundColor: '#333' }}>VIEW ALL PRODUCTS</Link>
        </div>
      </section>

      <section style={newsletterSectionStyle}>
        <div style={newsletterContentStyle}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '15px' }}>Join the Magic Circle</h2>
          <p style={{ color: '#aaa', fontSize: '16px', lineHeight: 1.6 }}>Subscribe to our newsletter and get 15% off your first order plus exclusive early access to new drops.</p>
          <div style={newsletterInputWrapperStyle}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={newsletterInputStyle}
            />
            <button style={newsletterBtnStyle}>SUBSCRIBE</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

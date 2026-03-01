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

function Home() {
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
          <li><Link to="/home" style={navLinkStyle}>Mens</Link></li>
          <li><Link to="/shop" style={navLinkStyle}>Womens</Link></li>
          <li><a href="#promo" style={navLinkStyle}>Brands</a></li>
          <li><a href="#pages" style={navLinkStyle}>Contact</a></li>
          <li><a href="#blog" style={navLinkStyle}>Deals</a></li>
          <li><a href="#contact" style={navLinkStyle}>My Cart</a></li> 
        </ul>
        <div style={navIconsStyle}>
          <button style={iconBtnStyle} aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <Link to="/login" style={{ ...navLinkStyle, display: 'flex' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </Link>
          <div style={cartBadgeStyle}>
            <button style={iconBtnStyle} aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
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
      </section>
    </div>
  )
}

export default Home

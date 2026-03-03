import { Link } from 'react-router-dom'
import shirt from '../assets/MensImages/shopping.webp'
import tshirt from '../assets/MensImages/tshirt.webp'
import jeans from '../assets/MensImages/Jeans.jpg'
import jacket from '../assets/MensImages/Jacket.webp'
import formal from '../assets/MensImages/formal.webp'
import accessories from '../assets/MensImages/assessories.jpg'

const pageStyle = {
  minHeight: '100vh',
  backgroundColor: '#f7f7f7',
  padding: '40px 60px',
  fontFamily: "'Segoe UI', system-ui, sans-serif",
  boxSizing: 'border-box',
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  marginBottom: '24px',
}

const titleStyle = {
  fontSize: '32px',
  fontWeight: 700,
  color: '#222',
}

const breadcrumbStyle = {
  fontSize: '13px',
  color: '#777',
}

const filtersRowStyle = {
  display: 'flex',
  gap: '10px',
  marginBottom: '24px',
  flexWrap: 'wrap',
}

const filterChipStyle = (active) => ({
  padding: '6px 14px',
  borderRadius: '999px',
  border: active ? '1px solid #222' : '1px solid #ddd',
  backgroundColor: active ? '#222' : '#fff',
  color: active ? '#fff' : '#555',
  fontSize: '12px',
  fontWeight: 500,
})

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  gap: '20px',
}

const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 8px 18px rgba(0,0,0,0.06)',
  display: 'flex',
  flexDirection: 'column',
}

const cardImageStyle = {
  width: '100%',
  height: '190px',
  objectFit: 'cover',
}

const cardBodyStyle = {
  padding: '14px 16px 16px',
}

const cardTitleStyle = {
  margin: '0 0 6px 0',
  fontSize: '16px',
  fontWeight: 600,
  color: '#222',
}

const cardMetaStyle = {
  margin: 0,
  fontSize: '12px',
  color: '#777',
}

const priceRowStyle = {
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '13px',
}

const priceStyle = {
  fontWeight: 600,
  color: '#e74c3c',
}

const ctaLinkStyle = {
  fontSize: '12px',
  color: '#3498db',
  textDecoration: 'none',
}

const menCategories = [
  {
    id: 1,
    name: 'Casual Shirts',
    meta: 'Checks • Solids • Denim',
    price: '$39.99',
    img: shirt,
  },
  {
    id: 2,
    name: 'T‑Shirts',
    meta: 'Graphic • Plain • Oversized',
    price: '$19.99',
    img: tshirt,
  },
  {
    id: 3,
    name: 'Jeans & Chinos',
    meta: 'Slim • Tapered • Relaxed',
    price: '$49.99',
    img: jeans,
  },
  {
    id: 4,
    name: 'Jackets',
    meta: 'Bomber • Denim • Leather',
    price: '$79.99',
    img: jacket,
  },
  {
    id: 5,
    name: 'Formal Wear',
    meta: 'Suits • Blazers • Trousers',
    price: '$129.00',
    img: formal,
  },
  {
    id: 6,
    name: 'Athleisure',
    meta: 'Joggers • Hoodies • Tees',
    price: '$44.50',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
  },
  {
    id: 7,
    name: 'Footwear',
    meta: 'Sneakers • Loafers • Boots',
    price: '$69.90',
    img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600',
  },
  {
    id: 8,
    name: 'Accessories',
    meta: 'Belts • Watches • Caps',
    price: '$24.00',
    img: accessories,
  },
]

function Men() {
  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Men&apos;s Collection</h1>
        <p style={breadcrumbStyle}>
          <Link to="/home">Home</Link> / Men
        </p>
      </div>

      <div style={filtersRowStyle}>
        <span style={filterChipStyle(true)}>All</span>
        <span style={filterChipStyle(false)}>Clothing</span>
        <span style={filterChipStyle(false)}>Footwear</span>
        <span style={filterChipStyle(false)}>Accessories</span>
        <span style={filterChipStyle(false)}>New Arrivals</span>
        <span style={filterChipStyle(false)}>Best Sellers</span>
      </div>

      <div style={gridStyle}>
        {menCategories.map((item) => (
          <article key={item.id} style={cardStyle}>
            <img src={item.img} alt={item.name} style={cardImageStyle} />
            <div style={cardBodyStyle}>
              <h2 style={cardTitleStyle}>{item.name}</h2>
              <p style={cardMetaStyle}>{item.meta}</p>
              <div style={priceRowStyle}>
                <span style={priceStyle}>{item.price}</span>
                <Link to="/home" style={ctaLinkStyle}>
                  View products
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Men


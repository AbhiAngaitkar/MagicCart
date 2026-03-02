import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const pageStyle = {
  minHeight: '100vh',
  height: '100%',
  margin: 0,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'radial-gradient(circle at top, #3b1c5a 0%, #090014 45%, #050008 100%)',
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  boxSizing: 'border-box',
}

const cardStyle = {
  width: '100%',
  maxWidth: '380px',
  padding: '32px 28px 24px',
  borderRadius: '18px',
  background: 'rgba(12, 5, 28, 0.96)',
  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7)',
  border: '1px solid rgba(140, 92, 255, 0.4)',
  backdropFilter: 'blur(18px)',
  color: '#f7f2ff',
  boxSizing: 'border-box',
}

const titleStyle = {
  margin: 0,
  marginBottom: '4px',
  fontSize: '24px',
  fontWeight: 600,
}

const subtitleStyle = {
  margin: 0,
  marginBottom: '20px',
  fontSize: '13px',
  color: '#b7a7ff',
}

const fieldStyle = {
  marginBottom: '14px',
  display: 'flex',
  flexDirection: 'column',
}

const labelStyle = {
  marginBottom: '6px',
  fontSize: '13px',
  fontWeight: 500,
  color: '#e5dcff',
}

const inputStyle = {
  height: '40px',
  padding: '0 12px',
  borderRadius: '10px',
  border: '1px solid rgba(151, 113, 255, 0.6)',
  background: 'rgba(7, 3, 20, 0.9)',
  color: '#f7f2ff',
  fontSize: '14px',
  outline: 'none',
}

const buttonsRowStyle = {
  marginTop: '10px',
  display: 'flex',
  gap: '10px',
}

const primaryButtonStyle = {
  flex: 1,
  height: '42px',
  borderRadius: '999px',
  border: 'none',
  background: 'linear-gradient(135deg, #a970ff, #ff4ecd)',
  color: '#fff',
  fontWeight: 600,
  fontSize: '14px',
  cursor: 'pointer',
  boxShadow: '0 10px 25px rgba(175, 89, 255, 0.55)',
}

const secondaryButtonStyle = {
  flex: 1,
  height: '42px',
  borderRadius: '999px',
  border: '1px solid rgba(151, 113, 255, 0.7)',
  background: 'transparent',
  color: '#e5dcff',
  fontWeight: 500,
  fontSize: '14px',
  cursor: 'pointer',
}

const warningStyle = {
  marginBottom: '14px',
  padding: '10px 12px',
  borderRadius: '10px',
  background: 'rgba(255, 107, 107, 0.15)',
  border: '1px solid rgba(255, 107, 107, 0.5)',
  color: '#ffb3b3',
  fontSize: '13px',
}

function Register() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    dateOfBirth: '',
  })
  const [warning, setWarning] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    if (!warning) return
    const t = setTimeout(() => setWarning(''), 60000)
    return () => clearTimeout(t)
  }, [warning])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setWarning('')
  }

  const handleNext = () => {
    setWarning('')
    if (step === 1) {
      const trimmed = formData.name.trim() && formData.email.trim()
      if (!trimmed) {
        setWarning('Please fill in all fields')
        return
      }
    } else if (step === 2) {
      const trimmed = formData.username.trim() && formData.password.trim()
      if (!trimmed) {
        setWarning('Please fill in all fields')
        return
      }
    }
    setStep((s) => Math.min(3, s + 1))
  }

  const handleBack = () => {
    setWarning('')
    setStep((s) => Math.max(1, s - 1))
  }

  const handleRegister = () => {
    setWarning('')
    if (!formData.dateOfBirth.trim()) {
      setWarning('Please fill in all fields')
      return
    }
    console.log('Register:', formData)
    navigate('/login', {
      state: { message: 'Registration successful!' },
    })
  }

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        {step === 1 && (
          <>
            <h1 style={titleStyle}>Create account</h1>
            {warning && <div style={warningStyle}>{warning}</div>}
            <p style={subtitleStyle}>Step 1 of 3 - Your basic info</p>
            <div style={fieldStyle}>
              <label style={labelStyle} htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                style={inputStyle}
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle} htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                style={inputStyle}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div style={buttonsRowStyle}>
              <button type="button" style={primaryButtonStyle} onClick={handleNext}>
                Next
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h1 style={titleStyle}>Create account</h1>
            {warning && <div style={warningStyle}>{warning}</div>}
            <p style={subtitleStyle}>Step 2 of 3 - Choose credentials</p>
            <div style={fieldStyle}>
              <label style={labelStyle} htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                style={inputStyle}
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle} htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                style={inputStyle}
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div style={buttonsRowStyle}>
              <button type="button" style={secondaryButtonStyle} onClick={handleBack}>
                Back
              </button>
              <button type="button" style={primaryButtonStyle} onClick={handleNext}>
                Next
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h1 style={titleStyle}>Create account</h1>
            {warning && <div style={warningStyle}>{warning}</div>}
            <p style={subtitleStyle}>Step 3 of 3 - Date of birth</p>
            <div style={fieldStyle}>
              <label style={labelStyle} htmlFor="dateOfBirth">Date of Birth</label>
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                style={inputStyle}
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div style={buttonsRowStyle}>
              <button type="button" style={secondaryButtonStyle} onClick={handleBack}>
                Back
              </button>
              <button type="button" style={primaryButtonStyle} onClick={handleRegister}>
                Register
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Register

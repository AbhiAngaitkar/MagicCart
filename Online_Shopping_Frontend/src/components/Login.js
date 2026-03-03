import { createElement, useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

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

const buttonStyle = {
  marginTop: '10px',
  width: '100%',
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

const footerStyle = {
  marginTop: '18px',
  fontSize: '13px',
  textAlign: 'center',
  color: '#c0b2ff',
}

const linkStyle = {
  marginLeft: '4px',
  color: '#ff8df0',
  fontWeight: 500,
  textDecoration: 'none',
  cursor: 'pointer',
}

const successMessageStyle = {
  marginBottom: '16px',
  padding: '10px 12px',
  borderRadius: '10px',
  background: 'rgba(46, 213, 115, 0.12)',
  border: '1px solid rgba(46, 213, 115, 0.6)',
  color: '#b9f6d3',
  fontSize: '13px',
}

const warningStyle = {
  marginBottom: '16px',
  padding: '10px 12px',
  borderRadius: '10px',
  background: 'rgba(255, 107, 107, 0.15)',
  border: '1px solid rgba(255, 107, 107, 0.5)',
  color: '#ffb3b3',
  fontSize: '13px',
}

function Login() {
  const location = useLocation()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [warning, setWarning] = useState('')
  const [successMessage, setSuccessMessage] = useState(location.state?.message || '')

  useEffect(() => {
    if (location.state?.message) {
      navigate('/login', { replace: true })
    }
  }, [])

  useEffect(() => {
    if (!successMessage) return
    const t = setTimeout(() => setSuccessMessage(''), 60000)
    return () => clearTimeout(t)
  }, [successMessage])

  useEffect(() => {
    if (!warning) return
    const t = setTimeout(() => setWarning(''), 60000)
    return () => clearTimeout(t)
  }, [warning])

  const handleLogin = async () => {
  setWarning('')
  setSuccessMessage('')

  if (!username.trim() || !password.trim()) {
    setWarning('Please fill in all fields')
    return
  }

  try {
    const response = await fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      setWarning(data.error || 'Login failed')
      return
    }

    // If login successful
    setSuccessMessage('Login successful!')

    // Optional: store token if you return one
    // localStorage.setItem('token', data.access_token)

    navigate('/home')

  } catch (error) {
    setWarning('Server error. Please try again.')
  }
}

  return createElement(
    'div',
    { style: pageStyle },
    createElement(
      'div',
      { style: cardStyle },
      successMessage &&
        createElement('div', { style: successMessageStyle }, successMessage),
      warning && createElement('div', { style: warningStyle }, warning),
      createElement('h1', { style: titleStyle }, 'Welcome back'),
      createElement(
        'p',
        { style: subtitleStyle },
        'Log in to continue to your account.',
      ),
      createElement(
        'div',
        { style: fieldStyle },
        createElement('label', { style: labelStyle, htmlFor: 'username' }, 'Username'),
        createElement('input', {
          id: 'username',
          type: 'text',
          placeholder: 'Enter your username',
          style: inputStyle,
          value: username,
          onChange: (e) => {
            setUsername(e.target.value)
            setWarning('')
          },
        }),
      ),
      createElement(
        'div',
        { style: fieldStyle },
        createElement('label', { style: labelStyle, htmlFor: 'password' }, 'Password'),
        createElement('input', {
          id: 'password',
          type: 'password',
          placeholder: 'Enter your password',
          style: inputStyle,
          value: password,
          onChange: (e) => {
            setPassword(e.target.value)
            setWarning('')
          },
        }),
      ),
      createElement(
        'button',
        { type: 'button', style: buttonStyle, onClick: handleLogin },
        'Login',
      ),
      createElement(
        'p',
        { style: footerStyle },
        'New here?',
        createElement(
          Link,
          { to: '/register', style: linkStyle },
          'Create an account',
        ),
      ),
    ),
  )
}

export default Login


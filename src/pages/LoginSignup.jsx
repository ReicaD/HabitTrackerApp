import React, { useState } from 'react';

function LoginSignup() {
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const isLogin = mode === 'login';

  const toggleMode = () => {
    setMode(isLogin ? 'signup' : 'login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: will integrate API later
    console.log(`${mode} form submitted`);
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required style={{ width: '100%', padding: 8 }} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required style={{ width: '100%', padding: 8 }} />
        </div>
        {!isLogin && (
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input id="confirmPassword" type="password" name="confirmPassword" required style={{ width: '100%', padding: 8 }} />
          </div>
        )}
        <button type="submit" style={{ width: '100%', padding: 8 }}>
          {isLogin ? 'Login' : 'Create Account'}
        </button>
      </form>
      <p style={{ marginTop: 16 }}>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button type="button" onClick={toggleMode} style={{ background: 'none', color: 'blue', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
}

export default LoginSignup; 
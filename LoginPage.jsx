import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [role, setRole] = useState('faculty');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard', { state: { role } });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Weekly Report System</h1>
        <p>Faculty, coordinator, and admin access</p>
        <div className="role-tabs">
          {['faculty', 'coordinator', 'admin'].map((item) => (
            <button key={item} className={role === item ? 'active' : ''} onClick={() => setRole(item)} type="button">{item}</button>
          ))}
        </div>
        <form onSubmit={onSubmit}>
          <input placeholder="Institutional email" type="email" required />
          <input placeholder="Password" type="password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export default function AdminDashboard() {
  const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('adminToken');
    setRequests([]);
  };

  const fetchRequests = React.useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/requests', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setRequests(data);
      } else if (res.status === 401) {
        handleLogout();
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }, [token]); // handleLogout is stable enough, but token is a dep

  useEffect(() => {
    if (token) {
      fetchRequests();
    }
  }, [token, fetchRequests]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (res.ok) {
        const data = await res.json();
        setToken(data.access_token);
        localStorage.setItem('adminToken', data.access_token);
        setError('');
      } else {
        setError('Invalid credentials');
      }
    } catch {
      setError('Connection error');
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/admin/requests/${id}/status`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        fetchRequests();
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md border border-slate-200">
          <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">Admin Login</h1>
          {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4">{error}</div>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Username</label>
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <Button type="submit" variant="primary" className="w-full">Login</Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <Container size="xl">
        <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-800">Repair Requests Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>Logout</Button>
        </div>

        {loading ? (
          <div className="text-center py-10 text-slate-500">Loading requests...</div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
                  <tr>
                    <th className="px-6 py-4 font-semibold">ID / Date</th>
                    <th className="px-6 py-4 font-semibold">Customer</th>
                    <th className="px-6 py-4 font-semibold">Device / Problem</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {requests.map(req => (
                    <tr key={req.id} className="hover:bg-slate-50/50">
                      <td className="px-6 py-4">
                        <div className="font-mono font-medium text-slate-900">REQ-{req.id.toString().padStart(4, '0')}</div>
                        <div className="text-xs text-slate-500 mt-1">{new Date(req.created_at).toLocaleDateString()}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-bold text-slate-800">{req.full_name}</div>
                        <div className="text-slate-500">{req.phone_number}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-800">{req.device} ({req.service_category})</div>
                        <div className="text-slate-500 text-xs mt-1 max-w-xs truncate">{req.problem_description}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                          req.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 
                          req.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 
                          'bg-amber-100 text-amber-700'
                        }`}>
                          {req.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <select 
                          className="text-sm border-slate-200 rounded-md shadow-sm p-1.5 bg-white"
                          value={req.status}
                          onChange={(e) => updateStatus(req.id, e.target.value)}
                        >
                          <option value="Pending">Pending</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                  {requests.length === 0 && (
                    <tr>
                      <td colSpan="5" className="px-6 py-8 text-center text-slate-500">
                        No repair requests found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

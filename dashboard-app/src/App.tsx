import './App.css';

function App() {
  const accounts = [
    { name: 'Main Savings', balance: 12450.75, status: 'Active' },
    { name: 'Checking Account', balance: 3200.50, status: 'Active' },
    { name: 'Investment Fund', balance: 45000.00, status: 'Locked' },
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard <span className="badge">Beta</span></h1>
        <p>Welcome to your premium banking overview</p>
      </header>

      <div className="accounts-grid">
        {accounts.map(acc => (
          <div key={acc.name} className="account-card">
            <div className="card-top">
              <h3>{acc.name}</h3>
              <span className={`status ${acc.status.toLowerCase()}`}>{acc.status}</span>
            </div>
            <div className="card-body">
              <span className="balance-label">Available Balance</span>
              <h2 className="balance-amount">
                ${acc.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </h2>
            </div>
            <div className="card-footer">
              <button className="btn-details">View Details</button>
            </div>
          </div>
        ))}
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="actions-buttons">
          <button className="action-btn">Transfer Money</button>
          <button className="action-btn">Pay Bills</button>
          <button className="action-btn">Request Statement</button>
        </div>
      </div>
    </div>
  );
}

export default App;

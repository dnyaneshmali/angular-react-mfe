import React from 'react';

const Dashboard = () => {
  const accountInfo = {
    balance: "$24,560.00",
    accountNumber: "**** 4567",
    recentTransactions: [
      { id: 1, date: '2024-05-15', description: 'Amazon.com', amount: '-$120.00', status: 'Completed' },
      { id: 2, date: '2024-05-14', description: 'Salary Deposit', amount: '+$5,000.00', status: 'Completed' },
      { id: 3, date: '2024-05-12', description: 'Electric Bill', amount: '-$85.00', status: 'Completed' },
      { id: 4, date: '2024-05-10', description: 'Starbucks', amount: '-$12.50', status: 'Pending' },
    ]
  };

  return (
    <div className="dashboard-container" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h2 style={{ color: '#2c3e50' }}>Financial Overview</h2>
      
      <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div style={{ padding: '20px', backgroundColor: '#e8f4fd', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#3498db' }}>Total Balance</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>{accountInfo.balance}</p>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#fdf3e8', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#e67e22' }}>Account Number</h4>
          <p style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>{accountInfo.accountNumber}</p>
        </div>
      </div>

      <h3 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Recent Transactions</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr style={{ textAlign: 'left', backgroundColor: '#f9f9f9' }}>
            <th style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Date</th>
            <th style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Description</th>
            <th style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Amount</th>
            <th style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {accountInfo.recentTransactions.map(tx => (
            <tr key={tx.id}>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>{tx.date}</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>{tx.description}</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee', color: tx.amount.startsWith('+') ? 'green' : 'red' }}>
                {tx.amount}
              </td>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <span style={{ 
                  padding: '4px 8px', 
                  borderRadius: '12px', 
                  fontSize: '12px', 
                  backgroundColor: tx.status === 'Completed' ? '#d4edda' : '#fff3cd',
                  color: tx.status === 'Completed' ? '#155724' : '#856404'
                }}>
                  {tx.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

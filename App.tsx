import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{
      padding: '40px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#0066cc',
      minHeight: '100vh'
    }}>
      <h1 style={{
        color: '#333',
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        Welcome to ExamPattern Architect
      </h1>
      
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <h2 style={{ color: '#17a2b8', marginBottom: '15px' }}>Project Information</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
          This is a Vite + React + TypeScript application successfully deployed to GitHub Pages.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
          <strong>Status:</strong> <span style={{ color: 'green' }}>✓ Live and Running</span>
        </p>
      </div>
      
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <h2 style={{ color: '#17a2b8', marginBottom: '15px' }}>Features</h2>
        <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
          <li>✓ React 18 with TypeScript</li>
          <li>✓ Vite Build Tool</li>
          <li>✓ GitHub Pages Deployment</li>
          <li>✓ Automated CI/CD Pipeline</li>
          <li>✓ TailwindCSS Support</li>
        </ul>
      </div>
      
      <div style={{
        backgroundColor: '#e8f4f8',
        padding: '20px',
        borderRadius: '8px',
        borderLeft: '4px solid #17a2b8'
      }}>
        <h3 style={{ color: '#17a2b8', marginBottom: '10px' }}>Next Steps</h3>
        <p style={{ color: '#555', marginBottom: '10px' }}>
          You can now customize this application by:
        </p>
        <ol style={{ color: '#555', paddingLeft: '20px' }}>
          <li>Editing the App.tsx component</li>
          <li>Adding new pages and components</li>
          <li>Styling with TailwindCSS or CSS modules</li>
          <li>Pushing changes to GitHub to auto-deploy</li>
        </ol>
      </div>
      
      <footer style={{
        marginTop: '40px',
        textAlign: 'center',
        color: '#999',
        borderTop: '1px solid #ddd',
        paddingTop: '20px'
      }}>
        <p>ExamPattern Architect © 2026 | Built with Vite + React + TypeScript</p>
      </footer>
    </div>
  );
};

export default App;

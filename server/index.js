const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Google Workspace integration configuration
const GOOGLE_WORKSPACE_DOMAIN = process.env.GOOGLE_WORKSPACE_DOMAIN || 'asluzmanto.shop';
const GOOGLE_WORKSPACE_CONTACT = process.env.GOOGLE_WORKSPACE_CONTACT || 'contacto@asluzmanto.shop';

app.use(express.json());

// Placeholder hybrid payment route
app.post('/api/pay', (req, res) => {
  // TODO: Integrate payment providers for fiat and crypto
  res.json({ status: 'pending', message: 'Hybrid payment integration in progress.' });
});

// Google Workspace integration placeholder
app.get('/api/google-auth', (req, res) => {
  // TODO: implement Google OAuth with workspace APIs
  res.json({ message: 'Google Workspace integration stub.' });
});

// Expose workspace information for the frontend
app.get('/api/google-workspace', (req, res) => {
  res.json({
    domain: GOOGLE_WORKSPACE_DOMAIN,
    contact: GOOGLE_WORKSPACE_CONTACT,
    dashboard: 'https://workspace.google.com/appsdashboard'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

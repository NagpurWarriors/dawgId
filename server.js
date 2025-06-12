const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Allow CORS for testing with Flutter frontend
app.use(cors());

// Simulated taken and available Dawg IDs
const takenDawgIds = ['dawg123', 'baller99', 'beast_mode'];
const availableDawgIds = ['newbie2025', 'future_star', 'goalkeeper101'];

app.get('/check-dawg-id/:dawgId', (req, res) => {
  const { dawgId } = req.params;

  if (takenDawgIds.includes(dawgId.toLowerCase())) {
    return res.json({ exists: true });
  }

  if (availableDawgIds.includes(dawgId.toLowerCase())) {
    return res.json({ exists: false });
  }

  // Default behavior for anything not in either list
  res.json({ exists: false });
});

app.listen(port, () => {
  console.log(`✅ Dawg ID Checker API running on http://localhost:${port}`);
});

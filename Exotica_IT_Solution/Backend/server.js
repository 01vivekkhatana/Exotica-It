// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const headerRoutes = require('./routes/header');
const footerRoutes = require('./routes/footer');
const heroRoutes = require('./routes/heroRoutes');

const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../../exotica-app/public')));
app.use('/api/header', headerRoutes);
app.use('/api/footer', footerRoutes);
app.use('/api', heroRoutes);

mongoose.connect('mongodb://localhost:27017/Exotica_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

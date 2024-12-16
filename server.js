const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const voterRoutes = require('./routes/voterRoutes'); // Voter Routes
const poolPromise = require('./config/database'); 
const authRoutes = require('./routes/authRoutes'); // Email verification routes
const candidateRoutes = require("./routes/candidateRoutes");
const electionRoutes = require('./routes/electionRoutes');

// Initialize Express
const app = express();

// Middleware
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Attach database connection pool to all requests
app.use((req, res, next) => {
    req.pool = poolPromise;
    next();
});

// Routes
app.use('/api/voters', voterRoutes); // Clean route path for voters

// Authentication routes (email verification related)
app.use('/auth', authRoutes); // All routes in authRoutes will be prefixed with '/auth'

app.use('/api/candidates', candidateRoutes);

app.use('/api/elections', electionRoutes);

// Server configuration
const port = 3000;

// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});

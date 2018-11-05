const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Rooutes
app.use('/api/draws', require('./routes/draw.routes'));

// Starting server
app.listen(app.get('port'), () => {
    console.log('Server ready on port ' + app.get('port'));
});
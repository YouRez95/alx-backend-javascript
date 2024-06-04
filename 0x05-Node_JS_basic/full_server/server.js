const express = require('express');

const indexRoutes = require('./routes/index');

const app = express();

app.use(indexRoutes);

app.listen(1245, () => console.log('running....'));

export default app;

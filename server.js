const express = require('express');

const app = express();


app.use((req,res) => {
    return res.status(404).json({
        message: 'Not found...'
    });
});

app.listen(8000, () => {
    console.log('Server is running on port: 8000');
});
// const greeting: string = 'Hello';
//
// const numbers: number[] = [1,2,3];

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(5000, () => console.log('Server running'));



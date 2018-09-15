import express from 'express';
import { PORT, RESPONSE } from './mymodule';

const app = express();

app.get('/', (req, res) => {
    res.send(RESPONSE);
})

app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));
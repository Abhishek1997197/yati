const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/search', async (req, res) => {
    const query = req.query.query;
    if (!query) {
        return res.json({ results: [] });
    }

    try {
        const movieLinks = [
            `https://movixo.info/search?q=${query}`,
            `https://123moviestan.com/search?q=${query}`,
            `https://vegamovies.me/search?q=${query}`
        ];
        res.json({ results: movieLinks });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movie links' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

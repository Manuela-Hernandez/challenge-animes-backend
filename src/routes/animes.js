const { Router } = require('express');
const router = Router();
const axios = require('axios');
const {getRecommendationMessage} = require('../utils');

router.get('/', async (req, res) => {
  try {
    const page = req.query.page > 0 ? req.query.page : 1;
    const query = req.query.q ? req.query.q : '';
    const response = await axios.get(`https://api.jikan.moe/v4/anime?page=${page}&q=${query}`);
    console.log('response', response.data)

    getRecommendationMessage(response.data.data);
    res.json(response.data);
  } catch (error) {
    console.error('error',error);
    res.status(500).json({ error: 'Error al obtener datos de la API externa' });
  }
});

router.get('/top', async (req, res) => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime');
    getRecommendationMessage(response.data.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos del top de la API externa' });
  }
});

module.exports = router;
const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/anime');
    res.json(response.data);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: 'Error al obtener datos de la API externa' });
  }
}) 


module.exports = router;
const db = require('../models');
const Komik = db.Komik;

async function getAllKomik(req, res) {
    try {
        const komiks = await Komik.findAll();
        res.status(200).json(komiks);
    } catch (err) {
        console.error('Error fetching komiks:', err.message);
        res.status(500).json({ error: 'Failed to fetch komiks' });
    }
}
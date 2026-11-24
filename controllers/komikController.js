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

async function getKomikById(req, res) {
    try {
        const { id } = req.params;
        const komik = await Komik.findByPk(id);
        if (!komik) {
            return res.status(404).json({ error: 'Komik not found' });
        }
        res.status(200).json(komik);
    } catch (err) {
        console.error('Error fetching komik by ID:', err.message);
        res.status(500).json({ error: 'Failed to fetch komik by ID' });
    }
}
const PrivateUniversities = require('../Models/PrivateUniversities');

async function getPrivateUniversities(req, res) {
  try {
    const universities = await PrivateUniversities.find();
    if (!universities || universities.length === 0) {
      return res.status(404).json({ message: 'No universities found' });
    }
    res.status(200).json(universities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = getPrivateUniversities;

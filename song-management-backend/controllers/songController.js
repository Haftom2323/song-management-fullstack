const songService = require('../services/songService');

const getAllSongs = async (req, res) => {
    const { page = 1, limit = 6 } = req.query; 
    console.log(`page: ${page} and limit: ${limit}`);
  
    try {
      const songs = await songService.getAllSongs(parseInt(page), parseInt(limit));
      res.json(songs);
    } catch (error) {
      res.status(500).json({ error: 'Internal error, failed to retrieve songs' });
    }
  };
  
  
const getSongById = async (req, res) => {
    try {
        const song = await songService.getSongById(req.params.id);
        if (!song) {
            return res.status(404).json({ error: 'Song not found' });
        }
        res.json(song);
    } catch (error) {
        res.status(500).json({ error: 'Internal error, failed to retrieve song' });
    }
};

const createSong = async (req, res) => {
    try {
        const newSong = await songService.createSong(req.body);
        res.status(201).json(newSong);
    } catch (error) {
        res.status(500).json({ error: 'Internal error, failed to create song' });
    }
};

const updateSong = async (req, res) => {
    try {
        const updatedSong = await songService.updateSong(req.params.id, req.body);
        if (!updatedSong) {
            return res.status(404).json({ error: 'Song not found' });
        }
        res.json(updatedSong);
    } catch (error) {
        res.status(500).json({ error: 'Internal error, failed to update song' });
    }
};

const deleteSong = async (req, res) => {
    try {
        const deletedSong = await songService.deleteSong(req.params.id);
        if (!deletedSong) {
            return res.status(404).json({ error: 'Song not found' });
        }
        res.json({ message: 'Song deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal error, failed to delete song' });
    }
};

const getStatistics = async (req, res) => {
    try {
        const statistics = await songService.getStatistics();
        res.json(statistics);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve statistics' });
    }
};

module.exports = {
    getAllSongs,
    getSongById,
    createSong,
    updateSong,
    deleteSong,
    getStatistics,
};


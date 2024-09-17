const Song = require('../models/song');

const getAllSongs = async (page, limit) => {
  const skip = (page - 1) * limit; 

  const songs = await Song.find().skip(skip).limit(limit);

  const totalSongs = await Song.countDocuments();

  return {
    songs,
    totalSongs,  
    currentPage: page,  
    totalPages: Math.ceil(totalSongs / limit),  
  };
};


const getSongById = async (id) => {
  return await Song.findById(id);
};

const createSong = async (songData) => {
  const { _id, ...newSongData } = songData;
  const newSong = new Song(newSongData);
  await newSong.save();
  return newSong;
};

const updateSong = async (id, songData) => {
  return await Song.findByIdAndUpdate(id, songData, { new: true });
};

const deleteSong = async (id) => {
  return await Song.findByIdAndDelete(id);
};


const getStatistics = async () => {
  try {
    const totalSongs = await Song.countDocuments();
    
    const distinctArtists = await Song.distinct('artist');
    const totalArtists = distinctArtists.length;

    const distinctAlbums = await Song.distinct('album');
    const totalAlbums = distinctAlbums.length;

    const distinctGenres = await Song.distinct('genre');
    const totalGenres = distinctGenres.length;

    const songsByGenre = await Song.aggregate([
      { $group: { _id: '$genre', count: { $sum: 1 } } },
    ]);

    const songsByArtist = await Song.aggregate([
      {
        $group: {
          _id: '$artist',
          songCount: { $sum: 1 },
          albums: { $addToSet: '$album' },
        },
      },
      {
        $project: {
          _id: 1,
          songCount: 1,
          albumCount: { $size: '$albums' },
        },
      },
    ]);

    const songsByAlbum = await Song.aggregate([
      { $group: { _id: '$album', count: { $sum: 1 } } },
    ]);

    return {
      totalSongs,
      totalArtists,
      totalAlbums,
      totalGenres,
      songsByGenre,
      songsByArtist,
      songsByAlbum,
    };
  } catch (error) {
    console.error('Error fetching statistics:', error);
    throw error;
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

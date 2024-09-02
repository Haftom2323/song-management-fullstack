import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createSongStart, updateSongStart } from '../slices/songsSlice';
import { FormBox, Input, SubmitButton } from './StyledComponents';
import { Song } from '../types/song';

interface SongFormProps {
  initialSong?: Song | null;
  isEditMode?: boolean;
  onSubmit: () => void;
}

const SongForm: React.FC<SongFormProps> = ({ initialSong = null, isEditMode = false, onSubmit }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(initialSong?.title || '');
  const [artist, setArtist] = useState(initialSong?.artist || '');
  const [album, setAlbum] = useState(initialSong?.album || '');
  const [genre, setGenre] = useState(initialSong?.genre || '');

  useEffect(() => {
    if (isEditMode && initialSong) {
      setTitle(initialSong.title);
      setArtist(initialSong.artist);
      setAlbum(initialSong.album);
      setGenre(initialSong.genre);
    }
  }, [initialSong, isEditMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const songData: Song = { _id: initialSong?._id || '', title, artist, album, genre };
    if (isEditMode && initialSong) {
      dispatch(updateSongStart({ id: initialSong._id, data: songData }));
    } else {
      dispatch(createSongStart(songData));
    }
    setTitle('');
    setArtist('');
    setAlbum('');
    setGenre('');
    onSubmit();
  };

  return (
    <FormBox as="form" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setArtist(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Album"
        value={album}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAlbum(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGenre(e.target.value)}
        required
      />
      <SubmitButton type="submit">{isEditMode ? 'Update Song' : 'Add Song'}</SubmitButton>
    </FormBox>
  );
};

export default SongForm;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SongForm from './SongForm';
import { fetchSongsStart, deleteSongStart } from '../slices/songsSlice';
import LoadingIndicator from './LoadingIndicator';
import { MusicNote } from '@emotion-icons/bootstrap/MusicNote';
import { useMediaQuery } from 'react-responsive';
import {
  Container,
  SongCard,
  Button,
  Text,
  FlexBox,
  Input,
  ModalContainer,
  Modal,
  CloseButton,
} from './StyledComponents';
import { Song } from '../types/song';
import { RootState } from '../store/store';

const SongList: React.FC = () => {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [filterGenre, setFilterGenre] = useState('');
  const [filterArtist, setFilterArtist] = useState('');
  const [filterAlbum, setFilterAlbum] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [songsPerPage] = useState(6);
  const isMobile = useMediaQuery({ query: '(max-width: 769px)' });

  const dispatch = useDispatch();
  const { songs, loading, error, totalPages } = useSelector((state: RootState) => state.songs);

  // Fetch the songs when currentPage changes
  useEffect(() => {
    dispatch(fetchSongsStart({ page: currentPage, limit: songsPerPage }));
  }, [dispatch, currentPage, songsPerPage]);

  const handleEdit = (song: Song) => {
    setSelectedSong(song);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setIsDeleteModalOpen(true);
    setSelectedSong(songs.find((song) => song._id === id) || null);
  };

  const handleFormClose = () => {
    setSelectedSong(null);
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    if (selectedSong) {
      dispatch(deleteSongStart(selectedSong._id));
      setIsDeleteModalOpen(false);
      setSelectedSong(null);
    }
  };

  // Filter songs based on genre, artist, and album
  const filteredSongs = songs.filter((song) => {
    const genreMatch = !filterGenre || song.genre.toLowerCase().includes(filterGenre.toLowerCase());
    const artistMatch = !filterArtist || song.artist.toLowerCase().includes(filterArtist.toLowerCase());
    const albumMatch = !filterAlbum || song.album.toLowerCase().includes(filterAlbum.toLowerCase());

    return genreMatch && artistMatch && albumMatch;
  });

  const displaySongs = filteredSongs; 

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <Container>
      {!isMobile && <Text fontSize={3} fontWeight="bold">Song Management System</Text>}

      {/* Filter Inputs */}
      <FlexBox gap="16px" mb={4}>
        <Input
          type="text"
          placeholder="Filter by Genre"
          value={filterGenre}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterGenre(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Filter by Artist"
          value={filterArtist}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterArtist(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Filter by Album"
          value={filterAlbum}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterAlbum(e.target.value)}
        />
      </FlexBox>

      <FlexBox justifyContent="left">
        <Button onClick={() => setIsAddModalOpen(true)} bg="#28a745" bghover="#218838" width={isMobile ? '30%' : '20%'} marginBottom="10px">
          Add New Song
        </Button>
      </FlexBox>

      {loading && <LoadingIndicator />}
      {error && <Text color="red">{error}</Text>}

      {/* Songs List */}
      <FlexBox flexWrap="wrap" gap="16px" justifyContent="space-between">
        {displaySongs.length > 0 ? (
          displaySongs.map((song) => (
            <SongCard key={song._id} alignItems="center">
              <MusicNote size="20" />
              <Text fontSize={2} fontWeight="bold">{song.title}</Text>
              <Text>Artist: {song.artist}</Text>
              <Text>Album: {song.album}</Text>
              <Text>Genre: {song.genre}</Text>

              <FlexBox mt={4} gap="8px">
                <Button onClick={() => handleEdit(song)} bg="#28a745" bghover="#218838">Edit</Button>
                <Button onClick={() => handleDelete(song._id)} bg="#CC1300" bghover="red">
                  Delete
                </Button>
              </FlexBox>
            </SongCard>
          ))
        ) : (
          <Text>No songs available</Text>
        )}
      </FlexBox>

      {/* Pagination Controls */}
      <FlexBox justifyContent="center" mt={4}>
        <Button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          bg="#28a745"
          bghover="#218838"
          width="10%"
        >
          Previous
        </Button>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            onClick={() => paginate(index + 1)}
            bg={currentPage === index + 1 ? '#007bff' : '#28a745'}
            bghover={currentPage === index + 1 ? '#0056b3' : '#218838'}
            disabled={currentPage === index + 1} // Disable the current page button
            width="10%"
          >
            {index + 1}
          </Button>
        ))}
        <Button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          bg="#28a745"
          bghover="#218838"
          width="10%"
        >
          Next
        </Button>
      </FlexBox>

      {/* Add Modal */}
      {isAddModalOpen && (
        <ModalContainer>
          <Modal>
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            <SongForm onSubmit={handleFormClose} />
          </Modal>
        </ModalContainer>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <ModalContainer>
          <Modal>
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            <SongForm initialSong={selectedSong} isEditMode onSubmit={handleFormClose} />
          </Modal>
        </ModalContainer>
      )}

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <ModalContainer>
          <Modal>
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <p>Are you sure you want to delete this song?</p>
            </div>
            <FlexBox gap="8px" mt={4} justifyContent="center">
              <Button onClick={handleDeleteConfirm} bg="#28a745" bghover="#218838" width="20%">
                Yes
              </Button>
              <Button onClick={handleCloseModal} bg="#dc3545" bghover="red" width="20%">
                No
              </Button>
            </FlexBox>
          </Modal>
        </ModalContainer>
      )}
    </Container>
  );
};

export default SongList;

/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStatisticsStart } from '../slices/statisticsSlice';
import { Box, Text, StatisticsCard, StatItem } from './StyledComponents';
import { RootState } from '../store/store';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import LoadingIndicator from './LoadingIndicator';

ChartJS.register(ArcElement, Tooltip, Legend);


const Statistics: React.FC = () => {
  const dispatch = useDispatch();
  const { data: statistics, loading, error } = useSelector((state: RootState) => state.statistics);

  useEffect(() => {
    dispatch(fetchStatisticsStart());
  }, [dispatch]);

  if (loading) return <Text><LoadingIndicator /></Text>;
  if (error) return <Text>Error: {error}</Text>;

  // Prepare data for the genre chart
  const genreChartData = {
    labels: statistics?.songsByGenre.map((genreStat) => genreStat._id),
    datasets: [
      {
        data: statistics?.songsByGenre.map((genreStat) => genreStat.count),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
      }
    ]
  };

  // Chart Options without `datalabels` plugin
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right' as const // Ensure valid legend position
      },
      tooltip: {
        enabled: true
      }
    },
    maintainAspectRatio: false // Ensures chart can be resized
  };

  return (
    <Box display="flex" flexDirection="column" gap={4} p={4}>
      {/* Total Statistics Heading */}
      <Text fontSize={4} fontWeight="bold" mb={2}>Total Statistics</Text>

      {/* Total Statistics Card */}
      <StatisticsCard flexDirection="row">
        <StatItem>
          <Text fontSize={2} fontWeight="medium">Total Songs:</Text>
          <Text fontSize={2}>{statistics?.totalSongs}</Text>
        </StatItem>
        <StatItem>
          <Text fontSize={2} fontWeight="medium">Total Artists:</Text>
          <Text fontSize={2}>{statistics?.totalArtists}</Text>
        </StatItem>
        <StatItem>
          <Text fontSize={2} fontWeight="medium">Total Albums:</Text>
          <Text fontSize={2}>{statistics?.totalAlbums}</Text>
        </StatItem>
        <StatItem>
          <Text fontSize={2} fontWeight="medium">Total Genres:</Text>
          <Text fontSize={2}>{statistics?.totalGenres}</Text>
        </StatItem>
      </StatisticsCard>

      {/* Songs by Genre Section */}
      <Box>
        <Text fontSize={4} fontWeight="bold" mb={2}>Songs by Genre</Text>
        <StatisticsCard flexDirection="row" justifyContent="space-between">
          {/* Pie Chart for Genres */}
          <Box flex="1" style={{ width: '300px', height: '300px' }}>
            <Pie data={genreChartData} options={chartOptions} />
          </Box>
        </StatisticsCard>
      </Box>

      {/* Songs by Artist Section */}
      <Box>
        <Text fontSize={4} fontWeight="bold" mb={2}>Songs by Artist</Text>
        <StatisticsCard flexDirection="row" flexWrap="wrap">
          {statistics?.songsByArtist.map((artistStat, index) => (
            <StatItem key={artistStat._id} style={{ flex: '1 1 calc(25% - 16px)', margin: '8px' }}>
              <Text fontSize={2} fontWeight="medium">{artistStat._id}:</Text>
              <Text fontSize={2}>
                {artistStat.songCount} songs, {artistStat.albumCount} albums
              </Text>
            </StatItem>
          ))}
        </StatisticsCard>
      </Box>
    </Box>
  );
};

export default Statistics;
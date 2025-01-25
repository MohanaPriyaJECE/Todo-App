
import React, { useState } from 'react';
import axios from 'axios';
import { Box, Typography, CircularProgress, TextField, Button } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import OpacityIcon from '@mui/icons-material/Opacity';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('');

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError(null);
      const API_KEY = "b999c41ad356296d345741bfdcff0ebe";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setError('Unable to fetch weather data for the entered location.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (location.trim()) {
      fetchWeather(location);
    } else {
      setError('Please enter a location.');
    }
  };

  const getActivitySuggestion = (temp, weatherCondition) => {
    if (weatherCondition.includes('rain') || temp < 15) {
      return "It's better to stay indoors today!";
    } else if (temp > 25) {
      return "It's sunny and warm! Perfect for a walk or picnic.";
    } else {
      return "The weather is pleasant. Consider light outdoor activities.";
    }
  };

  const getWeatherIcon = (main) => {
    switch (main.toLowerCase()) {
      case 'clear':
        return <WbSunnyIcon fontSize="large" color="yellow"/>;
      case 'clouds':
        return <CloudIcon fontSize="large" color="blue"/>;
      case 'rain':
      case 'drizzle':
        return <OpacityIcon fontSize="large" color='blue'/>;
      case 'snow':
        return <AcUnitIcon fontSize="large" color='blue'/>;
      default:
        return <CloudIcon fontSize="large" color='blue'/>;
    }
  };

  return (
    <Box sx={{ marginTop: 2, padding: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
      <Typography variant="h6">Weather Checker</Typography>
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
        <TextField
          label="Enter Location"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </Box>

      {loading && <CircularProgress />}

      {error && (
        <Typography color="error" sx={{ marginTop: 2 }}>
          {error}
        </Typography>
      )}

      {weather && (
        <Box sx={{ marginTop: 2, textAlign: 'center' }}>
          <Typography variant="h6">
            Weather in {weather.name}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
            {getWeatherIcon(weather.weather[0].main)}
            <Typography variant="h4">{weather.main.temp}°C</Typography>
          </Box>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            Condition: {weather.weather[0].description}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
            {getActivitySuggestion(weather.main.temp, weather.weather[0].description)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default WeatherComponent;


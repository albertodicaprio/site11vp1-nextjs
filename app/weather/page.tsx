'use client';

import { useEffect, useState, useRef } from 'react';

function buildCurrentWeather(setCurrentWeather: any, hourData: any) {
  // Update current weather with the most recent hourly data before now
  const now = new Date();
  const closestHour = hourData.reduce((closest: any, hour: any) => {
    const hourTime = new Date(hour.date_time);
    if (hourTime <= now) {
      return !closest || hourTime > new Date(closest.date_time) ? hour : closest;
    }
    return closest;
  });

  if (closestHour) {
    setCurrentWeather({
      temp: closestHour.TTT_C,
      humidity: closestHour.RELHUM_PERCENT,
      windSpeed: closestHour.FF_KMH,
      feelsLike: closestHour.TTTFEEL_C,
      location: 'Nyon, Switzerland',
      iconCode: closestHour.symbol_code,
    });
  }

}

function buildWeekChart(Chart: any, dayData: any) {
  // Create 8-Day Forecast Chart
  const dayLabels = dayData.slice(1).map((day: any) => {
    const date = new Date(day.date_time);
    return date.toLocaleDateString('fr-CH', { weekday: 'short' });
  });

  const minTemps = dayData.slice(1).map((day: any) => day.TN_C);
  const maxTemps = dayData.slice(1).map((day: any) => day.TX_C);
  const dayPrecips = dayData.slice(1).map((day: any) => day.PROBPCP_PERCENT);

  const dayChartCanvas = document.getElementById('weekTempChart') as HTMLCanvasElement;
  new Chart(dayChartCanvas, {
    type: 'line',
    data: {
      labels: dayLabels,
      datasets: [
        {
          label: 'Max Temperature (°C)',
          data: maxTemps,
          type: 'line',
          tension: 0.3,
          fill: false,
          backgroundColor: 'rgba(255, 99, 71, 0.2)',
          borderColor: 'darkorange',
          pointRadius: 3,
          pointBackgroundColor: 'rgba(255, 99, 71, 0.8)',
          pointBorderColor: 'darkorange',
          yAxisID: 'y',
        },
        {
          label: 'Min Temperature (°C)',
          data: minTemps,
          type: 'line',
          tension: 0.3,
          fill: '-1',
          backgroundColor: 'rgba(255, 208, 0, 0.2)',
          borderColor: 'orange',
          pointRadius: 3,
          pointBackgroundColor: 'rgba(255, 208, 0, 0.8)',
          pointBorderColor: 'orange',
          yAxisID: 'y',
        },
        {
          label: 'Précipitations (%)',
          data: dayPrecips,
          type: 'line',
          tension: 0.3,
          fill: true,
          backgroundColor: 'rgba(0,150,255,0.2)',
          borderColor: 'blue',
          pointRadius: 3,
          pointBackgroundColor: 'rgba(0,150,255,0.8)',
          pointBorderColor: 'blue',
          yAxisID: 'y1',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: 'category',
          title: {
            display: true,
            text: 'Day',
          },
        },
        y: {
          type: 'linear',
          position: 'left',
          title: { display: true, text: 'Temperature °C', color: 'black' },
          ticks: { color: 'black' },
        },
        y1: {
          type: 'linear',
          position: 'right',
          title: { display: true, text: 'Précipitations %', color: 'black' },
          ticks: { color: 'black' },
          grid: { drawOnChartArea: false },
        },
      },
    },
  });
}

function buildDayChart(Chart: any, hourData: any) {
  // Create 24-Hour Forecast Chart
  const now = new Date();
  const next24h = new Date(now.getTime() + 24 * 60 * 60 * 1000);

  const hourlyData = hourData.filter((hour: any) => {
    const hourTime = new Date(hour.date_time);
    return hourTime >= now && hourTime <= next24h;
  });

  const hourLabels = hourlyData.map((hour: any) => {
    const date = new Date(hour.date_time);
    return date.toLocaleTimeString('fr-CH', { hour: '2-digit', minute: '2-digit' });
  });

  const hourTemps = hourlyData.map((hour: any) => hour.TTT_C);
  const hourPrecips = hourlyData.map((hour: any) => hour.PROBPCP_PERCENT);

  const hourChartCanvas = document.getElementById('dayTempChart') as HTMLCanvasElement;
  new Chart(hourChartCanvas, {
    type: 'line',
    data: {
      labels: hourLabels,
      datasets: [
        {
          label: 'Temperature (°C)',
          data: hourTemps,
          type: 'line',
          tension: 0.3,
          fill: true,
          backgroundColor: 'rgba(255, 208, 0, 0.2)',
          borderColor: 'orange',
          pointRadius: 3,
          pointBackgroundColor: 'rgba(255, 208, 0, 0.8)',
          pointBorderColor: 'orange',
          yAxisID: 'y',
        },
        {
          label: 'Précipitations (%)',
          data: hourPrecips,
          type: 'line',
          tension: 0.3,
          fill: true,
          backgroundColor: 'rgba(0,150,255,0.2)',
          borderColor: 'blue',
          pointRadius: 3,
          pointBackgroundColor: 'rgba(0,150,255,0.8)',
          pointBorderColor: 'blue',
          yAxisID: 'y1',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: 'category',
          title: {
            display: true,
            text: 'Time',
          },
        },
        y: {
          type: 'linear',
          position: 'left',
          title: { display: true, text: 'Temperature °C', color: 'black' },
          ticks: { color: 'black' },
        },
        y1: {
          type: 'linear',
          position: 'right',
          title: { display: true, text: 'Précipitations %', color: 'black' },
          ticks: { color: 'black' },
          grid: { drawOnChartArea: false },
        },
      },
    },
  });
}

export default function WeatherPage() {
  const [currentWeather, setCurrentWeather] = useState({
    temp: 0,
    humidity: 0,
    windSpeed: 0,
    feelsLike: 0,
    location: 'Nyon, Switzerland',
    iconCode: 0,
  });

  useEffect(() => {
    const loadCharts = async () => {
      // Load Chart.js library
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
      script.async = true;

      script.onload = async () => {
        try {
          const res = await fetch('/api/meteo');
          const data = await res.json();

          if ((window as any).Chart) {
            const Chart = (window as any).Chart;
            Chart.defaults.color = '#000000';

            buildCurrentWeather(setCurrentWeather, data.forecast.hours);
            buildDayChart(Chart, data.forecast.hours);
            buildWeekChart(Chart, data.forecast.days);
          }
        } catch (error) {
          console.error('Failed to load weather charts:', error);
        }
      };

      if (!document.querySelector('script[src="https://cdn.jsdelivr.net/npm/chart.js"]')) {
        document.head.appendChild(script);
      }
    };

    loadCharts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Weather in Nyon, Switzerland</h1>
      <p className="text-gray-600 mb-8">Location: 46.38°N, 6.24°E</p>

      {/* Current Weather */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Main Weather Card */}
        <div className="lg:col-span-2 bg-gradient-to-br from-blue-400 to-blue-600 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Current Weather</h2>
          <div className="flex justify-between items-center">
            <div>
              <div className="w-32 h-32 mb-4">
                <img
                  src={`/weather-icons/${currentWeather.iconCode}.svg`}
                  alt="weather icon"
                  className="w-full h-full"
                />
              </div>
              <p className="text-6xl font-bold mb-2">{currentWeather.temp}°C</p>
              <p className="text-blue-100 text-sm mt-2">Feels like {currentWeather.feelsLike}°C</p>
            </div>
            <div className="text-right">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-blue-600 text-sm">Humidity</p>
                <p className="text-3xl font-bold text-blue-600">{currentWeather.humidity}%</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mt-4">
                <p className="text-blue-600 text-sm">Wind Speed</p>
                <p className="text-3xl font-bold text-blue-600">{currentWeather.windSpeed} km/h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 24-Hour Forecast */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">24-Hour Forecast</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden" style={{ height: '300px' }}>
          <canvas id="dayTempChart"></canvas>
        </div>
      </div>

      {/* 8-Day Forecast */}
      <div>
        <h2 className="text-3xl font-bold mb-6">8-Day Forecast</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden" style={{ height: '300px' }}>
          <canvas id="weekTempChart"></canvas>
        </div>
        <p className="text-sm text-gray-600 mt-4 italic">
          Données meteo en temps réel via <a href="https://developer.srgssr.ch/en/apis/srf-meteoapi-v2" target="_blank">SRG SSR API</a>
        </p>
      </div>
    </div>
  );
}

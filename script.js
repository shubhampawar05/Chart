
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Delhi', 'Ahmedabad', 'Kolkata', 'Mumbai', 'Hyedrabad', 'Chennai','bengaluru','pune'],
      datasets: [{
        label: 'Air Quality Index',
        data: [150,106,121,105,77,63,80,92],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

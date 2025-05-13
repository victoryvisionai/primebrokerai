document.addEventListener('DOMContentLoaded', function() {
  const ctxVolume = document.getElementById('chartVolume').getContext('2d');
  new Chart(ctxVolume, {
    type: 'bar',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: 'Loan Volume ($M)',
        data: [10, 15, 8, 12],
        backgroundColor: '#ffa500',
        borderColor: '#ffffff',
        borderWidth: 2
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: '#fff' }, grid: { color: '#444' } },
        y: { ticks: { color: '#fff' }, grid: { color: '#444' } }
      }
    }
  });

  const ctxLeads = document.getElementById('chartLeads').getContext('2d');
  new Chart(ctxLeads, {
    type: 'doughnut',
    data: {
      labels: ['Referral', 'Website', 'Conference'],
      datasets: [{
        data: [5, 8, 3],
        backgroundColor: ['#ffa500', '#555', '#888'],
        borderColor: '#ffffff',
        borderWidth: 2
      }]
    },
    options: {
      plugins: { legend: { labels: { color: '#fff' } } }
    }
  });
});

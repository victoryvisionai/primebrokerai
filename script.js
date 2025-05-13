// assets/js/script.js

// Check if the element exists before initializing charts to avoid errors on other pages
document.addEventListener("DOMContentLoaded", function() {

  if (document.getElementById('chartVolume')) {
    const ctxVolume = document.getElementById('chartVolume').getContext('2d');
    new Chart(ctxVolume, {
      type: 'bar',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
          label: 'Loan Volume ($M)',
          data: [10, 15, 8, 12],
          backgroundColor: 'rgba(255,165,0,0.5)',
          borderColor: '#ffa500',
          borderWidth: 1
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: '#aaa' }, grid: { color: '#333' } },
          y: { ticks: { color: '#aaa' }, grid: { color: '#333' } }
        }
      }
    });
  }

  if (document.getElementById('chartLeads')) {
    const ctxLeads = document.getElementById('chartLeads').getContext('2d');
    new Chart(ctxLeads, {
      type: 'doughnut',
      data: {
        labels: ['Referral', 'Website', 'Conference'],
        datasets: [{
          label: 'Lead Source',
          data: [5, 8, 3],
          backgroundColor: ['#ffa500', '#555', '#888']
        }]
      },
      options: {
        plugins: { legend: { labels: { color: '#aaa' } } }
      }
    });
  }

});

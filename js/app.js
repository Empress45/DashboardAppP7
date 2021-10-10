const alertBanner = document.getElementById('alert');

// create the HTMl for the banner
alertBanner.innerHTML = (
  <div>
    <p>
      <strong>Alert:</strong> You have <strong>6</strong> overdue tasks to
      complete
    </p>
    <p class="alert-banner-close">x</p>
  </div>
);

alertBanner.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains('alert-banner-close')) {
    alert.style.display = 'none';
  }
});

// Alert Notifications

const bellNotification = document.getElementsByClassName('bell-icon');
const headerAlert = document.getElementById('header-alert');
const greenDot = document.getElementById('green-dot');
const closeBtn = document.getElementById('close-btn');

bellNotification.addEventListener('click', () => {
  if ((headerAlert.style.display = 'none')) {
    headerAlert.style.display = 'block';
  }
  greenDot.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  headerAlert.style.display = 'none';
});

/* Doughnut Chart */
const config = {
  type: 'doughnut',
  data: data,
};

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'My Doughnut Chart',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      hoverOffset: 4,
    },
  ],
};

/* Bar Chart */
const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

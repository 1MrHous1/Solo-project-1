
'use strict';


function toggleMenuSm(visible) {
  if (window.screen.width < 768) {
    document.querySelector('.sidebar').classList.toggle('hidden-sidebar', visible);
    document.querySelector('.top-menu').classList.toggle('hidden-topmenu', visible);

  }
}

// if ((window.screen.width < 768) && (document.querySelector('.sidebar').classList.contains('hidden-sidebar'))) {
//   document.querySelector('.general-body').classList.add('margin-body');
// }

document.querySelector('.burger').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenuSm();
});

function toggleMenuLg(visible) {
  if (window.screen.width >= 768) {
    document.querySelector('.sidebar').classList.toggle('hidden-sidebar', visible);
  }
}

document.querySelector('.burger').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenuLg();
});

if (window.screen.width < 768) {
  document.querySelector('.sidebar').classList.add('hidden-sidebar');
  document.querySelector('.top-menu').classList.add('hidden-topmenu');
} else {
  document.querySelector('.sidebar').classList.remove('hidden-sidebar');
  document.querySelector('.top-menu').classList.remove('hidden-topmenu');
}

//zamykanie modali
function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}
//zamknięcie poprzez klinkięcie w x lub w przycisk
document.querySelectorAll('#overlay .close-modal').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });
});

//zamknięcie modala po kliknięciu w tło overlaya
document.querySelector('#overlay').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});

//zamknięcie poprzez wcisnięcie esc
document.addEventListener('keyup', function (e) {
  if (key === 'Escape' || key === 'Esc' || key === 27) {
    closeModal();
  }
});
//otwieranie modali - zamknięcie wszsytkich modali wewnątrz overlay a nastepnie otwarcie wskazanego modala
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function (modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

document.querySelector('.user-login').addEventListener('click', function (e) {
  e.preventDefault();
  openModal('#modal-login');
});

//  CHART

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    // 3
    datasets: [{
      // 4
      label: "Signups",
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
    },
    {
      label: "FTD",
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
    },
    {
      label: "Earned",
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
      // 7
      hidden: true,
    }]
  },
});
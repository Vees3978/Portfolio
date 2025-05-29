document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('close-btn');

  menuBtn.addEventListener('click', () => {
    sidebar.classList.add('show');
    sidebar.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show');
    sidebar.classList.add('hidden');
  });
});

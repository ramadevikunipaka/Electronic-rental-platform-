const search = document.getElementById('search');
if (search) {
  search.addEventListener('input', function () {
    const term = this.value.toLowerCase();
    document.querySelectorAll('.product').forEach(p => {
      p.style.display = p.innerText.toLowerCase().includes(term) ? '' : 'none';
    });
  });
}
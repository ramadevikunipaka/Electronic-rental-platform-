function addToCart(){
  const start=document.getElementById('startDate')?.value;
  const end=document.getElementById('endDate')?.value;
  if(!start || !end){ alert('Please select rental dates.'); return; }
  localStorage.setItem('rentalStart',start);
  localStorage.setItem('rentalEnd',end);
  alert('Product added to rental cart.');
  window.location.href='cart.html';
}
function removeItem(){ alert('Item removed from cart.'); }
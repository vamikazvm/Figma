const count = document.getElementById('count');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const reset = document.getElementById('reset');
let showAlert = true;

add.addEventListener('click', () => {
  count.innerHTML++;
});
sub.addEventListener('click', () => {
  if (showAlert && count.innerHTML === '0') {
    alert('You cannot go negative');
    showAlert = false;
  } else {
    count.innerHTML--;
  }
});

reset.addEventListener('click', () => {
  count.innerHTML = 0;
});

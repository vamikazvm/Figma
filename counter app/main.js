const count = document.getElementById('count');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const reset = document.getElementById('reset');

add.addEventListener('click', () => {
  count.innerHTML++;
})
sub.addEventListener('click', () => {

  count.innerHTML--;

})


reset.addEventListener('click', () => {
  count.innerHTML = 0;
})
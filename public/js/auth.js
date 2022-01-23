const formEl = document.querySelector('form');
const answEl = document.querySelector('.answer-reg');
const startBtn = document.querySelector('.button-click');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(formEl);
  let url = window.location.pathname.split('/');

  if (url[2] === 'registration') {
    url = '/auth/registration'
  } 
  if (url[2] === 'login') {
    url = '/auth/login'
  } 
  axios
    .post(url, data)
    .then((r) => {
      answEl.innerHTML = r.data;
    })
    .catch((error) => {
      console.log(error);
    });
});

startBtn.addEventListener('click', () => {
  answEl.style.display = 'block';
});

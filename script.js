const form = document.querySelector('#waitlist-form');
const message = document.querySelector('.form-message');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(form).get('email');
  message.textContent = email ? 'Thanks. You are on the early access list.' : 'Please add your email to join the waitlist.';
  if (email) form.reset();
});

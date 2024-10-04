// === DOM Selection ===
const inputEl = document.querySelector('input');

// Add / to focus input
document.addEventListener('keypress', function (event) {
  if (event.key === '/') {
    event.preventDefault(); // esko (/) ko likhna nhi hai
    inputEl.focus();
  }
});

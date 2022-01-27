function addingEventListener() {
  const input = document.getElementById('input')
  const alertMessage = () => alert('It actually works, awesome!')
  input.addEventListener('click', alertMessage)
}

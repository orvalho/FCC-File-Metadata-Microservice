document.getElementById('inputfield').addEventListener('change', e => {
  document.getElementById('file-selected').innerHTML = `You've selected: ${e.target.value.match(/[\w-]+\.[a-z]+/i)[0]}`;
});
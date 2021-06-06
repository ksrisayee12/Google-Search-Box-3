var clearSearch = document.querySelector(".search");
var inputs = document.querySelectorAll("input")

clearSearch.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');
});
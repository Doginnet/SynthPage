const dropdownArrow = document.querySelector('#dropdown-arrow')
const dropdownBtn = document.querySelector('#dropdown-btn')
dropdownBtn.addEventListener('click', (e) => {
    if (dropdownArrow.classList.contains('dropdown-arrow-open')) dropdownArrow.classList.remove('dropdown-arrow-open')
        else dropdownArrow.classList.add('dropdown-arrow-open')
})
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('dropdown-toggle');
    const dropdownContent = document.getElementById('dropdown-content');

    dropdownToggle.addEventListener('click', function() {
        dropdownContent.classList.toggle('hidden');
    });
});
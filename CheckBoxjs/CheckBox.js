javascript:(function() {
    function AccionKey(event) {
        const tecla = '.'; // <--- Aqui escribes tu letra favorita. | Write your fav letter | Delete this comment
        var checkbox = document.getElementById("miCheckbox"); // <--- Despues escribes el ID del checkbox. | Write the checkbox id (you can use f12).
        if (event.key.toUpperCase() === tecla.toUpperCase()) {
            checkbox.checked = !checkbox.checked;
            var changeEvent = new Event('change');
            checkbox.dispatchEvent(changeEvent);
        }
    }
    document.addEventListener('keydown', AccionKey);
})();
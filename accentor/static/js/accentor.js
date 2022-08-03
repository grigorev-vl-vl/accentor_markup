let vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я']


MakeStress = function(event)
{
    let paragraph = document.getElementById("surname");

    // TODO -1 если ударение не найдено
    var stress = surname.search('\\+')

    // Едем с ударением направо
    if (event.key == 'ArrowRight') {
        // alert(event.key);
        new_surname = surname.slice(0, stress) + surname.slice(stress + 1, stress + 2) + "+" + surname.slice(stress + 2)
    }

    // Едем с ударением налево
    if (event.key == 'ArrowLeft') {
        // alert(event.key);
        new_surname = surname.slice(0, stress - 1) + "+" + surname.slice(stress -1, stress) + surname.slice(stress + 1)
    }

    // Просим записать в словарь и показать следующее слово
    if (event.key == 'Enter') {
        $.post( "", {surname: surname});
        location.replace("");
    }

    // TODO просим вернуться к предыдущему слову
    if (event.key == 'Backspace') {
        alert(event.key);
    }

    // Update stress if needed
    if (typeof new_surname !== 'undefined') {
        surname = new_surname
    }
    stress = surname.search('\\+')
    paragraph.innerHTML =
        surname.slice(0, stress - 1) +
        "<span style='color: red; font-weight: bolder'>" +
        surname[stress -1] +
        "</span>" +
        surname.slice(stress + 1);
    return '';
}





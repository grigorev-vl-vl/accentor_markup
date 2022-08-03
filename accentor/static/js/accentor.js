let vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я']


MakeStress = function(event)
{
    let paragraph = document.getElementById("surname");
    var stress = surname.search('\\+')
    // TODO -1 если ударение не найдено
    if (event.key == 'ArrowRight') {
        // alert(event.key);
        new_surname = surname.slice(0, stress) + surname.slice(stress + 1, stress + 2) + "+" + surname.slice(stress + 2)
    }
    if (event.key == 'ArrowLeft') {
        // alert(event.key);
        new_surname = surname.slice(0, stress - 1) + "+" + surname.slice(stress -1, stress) + surname.slice(stress + 1)
    }
    if (event.key == 'Enter') {
        // alert(event.key);
    }
    if (event.key == 'Backspace') {
        // alert(event.key);
    }

    // Update stress
    surname = new_surname
    stress = surname.search('\\+')
    paragraph.innerHTML =
        surname.slice(0, stress - 1) +
        "<span style='color: red; font-weight: bolder'>" +
        surname[stress -1] +
        "</span>" +
        surname.slice(stress + 1);
    return '';
}





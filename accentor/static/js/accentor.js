let vowels = 'аеёиоуыэюя'


MakeStress = function(event)
{
    let paragraph = document.getElementById("surname");

    // TODO -1 если ударение не найдено
    var stress = surname.search('\\+')

    // Едем с ударением направо
    if (event.key == 'ArrowRight') {
        // Ищем гласную справа
        right_vowel_rel_number = surname.slice(stress).search(/([аеёиоуыэюя])/gm);
        // Если дошли до самой правой гласной, то конечная:
        if (right_vowel_rel_number != -1) {
            right_vowel_abs_number = stress + right_vowel_rel_number + 1;
            new_surname = surname.slice(0, stress) +
                surname.slice(stress + 1, right_vowel_abs_number) +
                "+" + surname.slice(right_vowel_abs_number);
        }

    }

    // Едем с ударением налево
    if (event.key == 'ArrowLeft') {
        // Ищем гласную слева
        left_vowel_abs_number = regexLastIndexOf(surname.slice(0, stress - 1), /([аеёиоуыэюя])/gm);
        console.log(left_vowel_abs_number);
        // Если дошли до самой левой гласной, то конечная:
        if (left_vowel_abs_number != -1) {
            new_surname = surname.slice(0, left_vowel_abs_number + 1) +
                "+" + surname.slice(left_vowel_abs_number + 1, stress) + surname.slice(stress + 1);
            console.log(new_surname);
        }

    }

    // Просим записать в словарь и показать следующее слово
    if (event.key == 'Enter') {
        $.ajax({
            url: "",
            method: 'post',
            dataType: 'html',
            data: {surname: surname},
            success: function(){
                location.replace("");
            }
        });
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


function regexLastIndexOf(string, regex, startpos) {
    regex = (regex.global) ? regex : new RegExp(regex.source, "g" + (regex.ignoreCase ? "i" : "") + (regex.multiLine ? "m" : ""));
    if(typeof (startpos) == "undefined") {
        startpos = string.length;
    } else if(startpos < 0) {
        startpos = 0;
    }
    var stringToWorkWith = string.substring(0, startpos + 1);
    var lastIndexOf = -1;
    var nextStop = 0;
    while((result = regex.exec(stringToWorkWith)) != null) {
        lastIndexOf = result.index;
        regex.lastIndex = ++nextStop;
    }
    return lastIndexOf;
}





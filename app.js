

function sliderFunction() {
    const data = [
        'Поліцейський уповноважений у виняткових випадках застосовувати вогнепальну зброю:',
        '1) для відбиття нападу на поліцейського або членів його сім’"ї, у випадку загрози їхньому життю чи здоров"ю;',
        '2) для захисту осіб від нападу, що загрожує їхньому життю чи здоров’ю;',
        '3) для звільнення заручників або осіб, яких незаконно позбавлено волі;',
        '4) для відбиття нападу на об’єкти, що перебувають під охороною, конвої, житлові та нежитлові приміщення, а також звільнення таких об’єктів у разі їх захоплення;',
        '5) для затримання особи, яку застали під час вчинення тяжкого або особливо тяжкого злочину і яка намагається втекти;',
        '6) для затримання особи, яка чинить збройний опір, намагається втекти з-під варти, а також озброєної особи, яка погрожує застосуванням зброї та інших предметів, що загрожують життю і здоров’ю людей та/або поліцейського;',
        '7) для зупинки транспортного засобу шляхом його пошкодження, якщо водій своїми діями створює загрозу життю чи здоров’ю людей та/або поліцейського.',
        'Застосування вогнепальної зброї без попередження допускається:',
        '1) при спробі особи, яку затримує поліцейський із вогнепальною зброєю в руках, наблизитися до нього, скоротивши визначену ним відстань, чи доторкнутися до зброї;',
        '2) у разі збройного нападу, а також у разі раптового нападу із застосуванням бойової техніки, транспортних засобів або інших засобів, що загрожують життю чи здоров’ю людей;',
        '3) якщо особа, затримана або заарештована за вчинення особливо тяжкого чи тяжкого злочину, втікає із застосуванням транспортного засобу;',
        '4) якщо особа чинить збройний опір;',
        '5) для припинення спроби заволодіти вогнепальною зброєю.',
    ];

    const bgColor = [ '#00a4e4', '#7552cc', '#00205b', '#008eaa', '#1c79c0' , '#0066a1', '#eb5424', '#2a5934'];
    const outField = document.querySelector('body');

    let count = 0;
    let slideCollection;
    

    createDivSlide();

    function createDivSlide() {
        for (let i = 0; i < data.length; i++) {
            let div = document.createElement('div');
            div.classList.add('slide');
            if (i !== 0) div.classList.add('hide');
            if (i === 0) div.style.background = bgColor[randomInteger(0, bgColor.length - 1)];
            let text = document.createElement('div');
            text.textContent = data[i];
            div.append(text);
            outField.append(div);
        }
        outField.onclick = nextSlide;
        slideCollection = document.querySelectorAll('.slide');
    }

    function nextSlide() {
        slideCollection[count].classList.add('hide');
        if (count + 1 < data.length) {
            count++;
        }
        else {
            count = 0;
        }
        slideCollection[count].classList.remove('hide');
        slideCollection[count].style.background = bgColor[randomInteger(0, bgColor.length - 1)];
       
      
    }


    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
}

document.addEventListener("DOMContentLoaded", sliderFunction);

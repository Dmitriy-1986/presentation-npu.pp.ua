function sliderFunction() {
    const data = [
        'Похлопывание по плечу всего в нескольких сантиметрах от пинка в зад',
        'Вы можете уйти из офиса, куда хотите, если сохраняете серьезный вид и несете папку под мышкой',
        'Никогда не задавайте в деловом письме два вопроса. Ответ коснется лишь одного, наименее для вас важного, а о втором не будет ни слова',
        'Когда шеф говорит о повышении производительности труда, он не имеет в виду себя',
        'Когда подвозишь шефа до дома, в машине обязательно найдутся пустые пивные банки, перекатывающиеся по полу',
        'Родители говорили, что будут дни, подобные этим, но не в таком же количестве!',
        'Ошибаться свойственно человеку, прощать не свойственно корпоративной политике',
        'Важные письма, не содержащие ошибок, вызывают ошибки в работе почтовой службы',
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

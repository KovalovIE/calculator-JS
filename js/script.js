window.onload = init;
function init() {
    var td = document.getElementsByTagName('td');
    for (var i = 0; i < td.length; i++) {
        td[i].addEventListener('click', addValue)
    }
    function addValue(eventObj) {
        var input = eventObj.target;
        console.log(input)
        var name = input.id;
        console.log(name)
        var numberId = document.getElementById(name)
        if (numberId !== null) {
            var valueScoreboard = document.getElementById('scoreboard').value += numberId.value;
        }
    }

    var btnResult = document.querySelector('.result');
    var btnClear = document.querySelector('.clear');
    btnResult.addEventListener('click', function() {
        var val = document.getElementById('scoreboard');
        var inputResult = val.value;
        if (inputResult.split('+').length == 2) {
            var rr = parseInt(inputResult.split('+')[0]) + parseInt(inputResult.split('+')[1]);
            val.value = '';
            val.value = rr;
        } else if(inputResult.split('/').length == 2) {
            var rr = parseInt(inputResult.split('/')[0]) / parseInt(inputResult.split('/')[1]);
            val.value = '';
            val.value = rr;
        } else if(inputResult.split('-').length == 2) {
            var rr = parseInt(inputResult.split('-')[0]) - parseInt(inputResult.split('-')[1]);
            val.value = '';
            val.value = rr;
        } else if(inputResult.split('*').length == 2) {
            var rr = parseInt(inputResult.split('*')[0]) * parseInt(inputResult.split('*')[1]);
            val.value = '';
            val.value = rr;
        }
    })

    btnClear.addEventListener('click', function() {
        document.getElementById('scoreboard').value = ''
    })
}


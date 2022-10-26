var Contor = document.getElementById('contor2')

const imagine = document.getElementById('prajitura')

var count = 0

imagine.addEventListener('click', () => {
    count++;
    Contor.innerHTML = count;
})
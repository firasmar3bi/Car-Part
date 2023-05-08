let closeButtonOne = document.getElementById('btnOne')
let closeButtonTwo = document.getElementById('btnTwo')
let closeRowOne = document.getElementById('closeRow-1')
let closeRowTwo = document.getElementById('closeRow-2')

closeButtonOne.addEventListener('click', function(e) {
    e.preventDefault()
    dNoneONE()
})
closeButtonTwo.addEventListener('click', function(e) {
    e.preventDefault()
    dNoneTWO()
})

function dNoneONE() {
    if (closeRowOne.classList.contains('d-none')) {
        closeRowOne.classList.remove('d-none')
    } else {
        closeRowOne.classList.add('d-none')
    }
}

function dNoneTWO() {
    if (closeRowTwo.classList.contains('d-none')) {
        closeRowTwo.classList.remove('d-none')
    } else {
        closeRowTwo.classList.add('d-none')
    }
}
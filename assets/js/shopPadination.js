let pageOne = document.getElementById('shopPageOne')
let pageTwo = document.getElementById('shopPageTwo')
let pageThree = document.getElementById('shopPageThree')
let pageNumber = document.querySelectorAll('.gg')
let alignProduct = document.querySelectorAll('.alignProduct')
let scrollTo = document.getElementById('scrolvispilty').offsetTop
let columnAlignOne = document.getElementById('columnAlignOne')
let columnAlignTwo = document.getElementById('columnAlignTwo')
let columnAlignThree = document.getElementById('columnAlignThree')
let rowAlignOne = document.getElementById('rowAlignOne')
let rowAlignTwo = document.getElementById('rowAlignTwo')
let rowAlignThree = document.getElementById('rowAlignThree')
let HREFONE = document.getElementById('HREFone')
let HREFTWO = document.getElementById('HREFtwo')

pageTwo.classList.add('d-none')
pageThree.classList.add('d-none')


// TO CHANGE THR ALIGN OF PART 
for (var i = 0; i < alignProduct.length; i++) {
    alignProduct[i].addEventListener('click', function(e) {
        e.preventDefault()

        let alignHref = e.target.getAttribute('href')
        let targetAlign = document.querySelector(alignHref)

        // IN PAGE NUMBER ONE
        if (targetAlign == columnAlignOne) {
            if (columnAlignOne.classList.contains('d-none')) {
                columnAlignOne.classList.remove('d-none');
                rowAlignOne.classList.add('d-none');
            } else {
                // columnAlignOne.classList.add('row');
                rowAlignOne.classList.add('d-none');
            }
        }
        if (targetAlign == rowAlignOne) {
            if (rowAlignOne.classList.contains('d-none')) {
                columnAlignOne.classList.add('d-none');
                rowAlignOne.classList.remove('d-none');
            } else {
                // rowAlignOne.classList.add('row');
                columnAlignOne.classList.add('d-none');
            }
        }

        // IN PADE NUMBER TWO
        if (targetAlign == columnAlignTwo) {
            if (columnAlignTwo.classList.contains('d-none')) {
                columnAlignTwo.classList.remove('d-none');
                rowAlignTwo.classList.add('d-none');
            } else {
                // columnAlignTwo.classList.add('row');
                rowAlignTwo.classList.add('d-none');
            }
        }
        if (targetAlign == rowAlignTwo) {
            if (rowAlignTwo.classList.contains('d-none')) {
                columnAlignTwo.classList.add('d-none');
                rowAlignTwo.classList.remove('d-none');
            } else {
                // rowAlignTwo.classList.add('row');
                columnAlignTwo.classList.add('d-none');
            }
        }

        // IN PAGE NUMBER THREE
        if (targetAlign == columnAlignThree) {
            if (columnAlignThree.classList.contains('d-none')) {
                columnAlignThree.classList.remove('d-none');
                rowAlignThree.classList.add('d-none');
            } else {
                // columnAlignThree.classList.add('row');
                rowAlignThree.classList.add('d-none');
            }
        }
        if (targetAlign == rowAlignThree) {
            if (rowAlignThree.classList.contains('d-none')) {
                columnAlignThree.classList.add('d-none');
                rowAlignThree.classList.remove('d-none');
            } else {
                // rowAlignThree.classList.add('row');
                rowAlignThree.classList.add('d-none');
            }
        }
    })
}


// TO CHANGE THE PAGE OF PART 
for (var i = 0; i < pageNumber.length; i++) {
    pageNumber[i].addEventListener('click', function(e) {
        e.preventDefault()

        let href = e.target.getAttribute('href')
        let target = document.querySelector(href)
        if (target == pageOne) {
            pageOne.classList.remove('d-none')
            pageTwo.classList.add('d-none')
            pageThree.classList.add('d-none')
            HREFONE.setAttribute("href", "#rowAlignOne");
            HREFTWO.setAttribute("href", "#columnAlignOne");
        }
        if (target == pageTwo) {
            pageOne.classList.add('d-none')
            pageTwo.classList.remove('d-none')
            pageThree.classList.add('d-none')
            HREFONE.setAttribute("href", "#rowAlignTwo");
            HREFTWO.setAttribute("href", "#columnAlignTwo");
        }
        if (target == pageThree) {
            pageOne.classList.add('d-none')
            pageTwo.classList.add('d-none')
            pageThree.classList.remove('d-none')
            HREFONE.setAttribute("href", "#rowAlignThree");
            HREFTWO.setAttribute("href", "#columnAlignThree");
        }
        window.scrollTo({
            top: scrollTo,
            behavior: 'smooth'
        });
    })
}
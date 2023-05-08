let patrName = document.getElementById('partName')
let partCategary = document.getElementById('partCategary')
let partPrice = document.getElementById('partPrice')
let partdiscountReat = document.getElementById('discountReat')
let partBrand = document.getElementById('partBrand')
let addPart = document.getElementById('addPart')
let patrImge = document.querySelectorAll('#partImg')
let patrImgeOvelay = document.querySelectorAll('#overlayId')
let showDataId = document.getElementById('showData')
let partData = JSON.parse(localStorage.getItem('parts'));
let imgSRC = []
let nameMessage = document.getElementById('cNameAlert')
let categaryMessage = document.getElementById('cCategaryAlert')
let priceMessage = document.getElementById('cPriceAlert')
let DiscountReatMessage = document.getElementById('cDiscReatAlert')
let BrandtMessage = document.getElementById('cBrandAlert')

if (JSON.parse(localStorage.getItem('parts')) == null) {
    partData = [];
} else {
    partData = JSON.parse(localStorage.getItem('parts'));
}
showData()
let checImg = false;
let checName = false;
let checCategary = false;
let checPrice = false;
let checDiscountReat = false;
let checBrand = false;

addPart.setAttribute('disabled', 'disabled')

function makeinputFalse() {
    checImg = false;
    checName = false;
    checCategary = false;
    checPrice = false;
    checDiscountReat = false;
    checBrand = false;
}

function removeValid() {
    patrName.classList.remove('is-valid')
    nameMessage.innerHTML = ''

    partCategary.classList.remove('is-valid')
    categaryMessage.innerHTML = ''

    partPrice.classList.remove('is-valid')
    priceMessage.innerHTML = ''

    partdiscountReat.classList.remove('is-valid')
    DiscountReatMessage.innerHTML = ''

    partBrand.classList.remove('is-valid')
    BrandtMessage.innerHTML = ''
}

function checInput() {
    if (checImg && checName && checCategary && checPrice && checDiscountReat && checBrand) {
        addPart.removeAttribute('disabled');
    } else {
        addPart.setAttribute('disabled', 'disabled');
    }
}

// name validtion
patrName.onkeyup = function() {
    pattern = /^[A-Z][a-z\s]{2,10}$/
    if (pattern.test(patrName.value)) {
        checName = true
        if (patrName.classList.contains('is-invalid')) {
            patrName.classList.replace('is-invalid', 'is-valid')
        }
        courseName.classList.add('is-valid')
        nameMessage.innerHTML = ''
    } else {
        checName = false
        if (patrName.classList.contains('is-valid')) {
            patrName.classList.replace('is-valid', 'is-invalid')
        }
        patrName.classList.add('is-invalid')
        nameMessage.innerHTML = 'Please Start With a *Capital Letter And Name Must be *between (3 and 20) chars'
    }
    checInput()
}

// categary valiidtion
partCategary.onkeyup = function() {
    pattern = /^[A-Z][a-z\s]{2,10}$/
    if (pattern.test(partCategary.value)) {
        checCategary = true
        if (partCategary.classList.contains('is-invalid')) {
            partCategary.classList.replace('is-invalid', 'is-valid')
        }
        courseName.classList.add('is-valid')
        categaryMessage.innerHTML = ''
    } else {
        checCategary = false
        if (partCategary.classList.contains('is-valid')) {
            partCategary.classList.replace('is-valid', 'is-invalid')
        }
        partCategary.classList.add('is-invalid')
        categaryMessage.innerHTML = 'Please Start With a *Capital Letter And Name Must be *between (3 and 20) chars'
    }
    checInput()
}

// price valiidtion
partPrice.onkeyup = function() {
    pattern = /^[0-9]{3,4}$/
    if (pattern.test(partPrice.value) && partPrice.value >= 100) {
        checPrice = true
        if (partPrice.classList.contains('is-invalid')) {
            partPrice.classList.replace('is-invalid', 'is-valid')
        }
        courseName.classList.add('is-valid')
        priceMessage.innerHTML = ''
    } else {
        checPrice = false
        if (partPrice.classList.contains('is-valid')) {
            partPrice.classList.replace('is-valid', 'is-invalid')
        }
        partPrice.classList.add('is-invalid')
        priceMessage.innerHTML = 'Price Must be *between (100 and 9999) chars'
    }
    checInput()
}

// discountReat valiidtion
partdiscountReat.onkeyup = function() {
    pattern = /^[0-9]{1,2}$/
    if (pattern.test(partdiscountReat.value) && partdiscountReat.value <= 100) {
        checDiscountReat = true
        if (partdiscountReat.classList.contains('is-invalid')) {
            partdiscountReat.classList.replace('is-invalid', 'is-valid')
        }
        courseName.classList.add('is-valid')
        DiscountReatMessage.innerHTML = ''
    } else {
        checDiscountReat = false
        if (partdiscountReat.classList.contains('is-valid')) {
            partdiscountReat.classList.replace('is-valid', 'is-invalid')
        }
        partdiscountReat.classList.add('is-invalid')
        DiscountReatMessage.innerHTML = 'Price Must be *between (0 and 99) chars'
    }
    checInput()
}


// Brand valiidtion
partBrand.onkeyup = function() {
    pattern = /^[A-Z][a-z\s]{2,10}$/
    if (pattern.test(partBrand.value)) {
        checBrand = true
        if (partBrand.classList.contains('is-invalid')) {
            partBrand.classList.replace('is-invalid', 'is-valid')
        }
        courseName.classList.add('is-valid')
        BrandtMessage.innerHTML = ''
    } else {
        checBrand = false
        if (partBrand.classList.contains('is-valid')) {
            partBrand.classList.replace('is-valid', 'is-invalid')
        }
        partBrand.classList.add('is-invalid')
        BrandtMessage.innerHTML = 'Please Start With a *Capital Letter And Name Must be *between (3 and 20) chars'
    }
    checInput()
}

for (var i = 0; i < patrImge.length; i++) {
    patrImge[i].addEventListener('click', function(e) {
        if (true) {
            checImg = true
            let img = e.target;
            imgSRC.push(img.getAttribute('src'))
        }
        checInput()
    })
}


addPart.addEventListener('click', function(e) {
    e.preventDefault();
    savePart()
    showData()
    clearInput()
    makeinputFalse()
    checInput()
})

function savePart() {
    let parts = {
        pName: patrName.value,
        pCategary: partCategary.value,
        pPrice: partPrice.value + '.00',
        pDiscount: partPrice.value * partdiscountReat.value / 100 + '$',
        pBrand: partBrand.value,
        pdiscountReat: partdiscountReat.value,
        pPartImg: imgSRC
    }
    partData.push(parts)
    localStorage.setItem('parts', JSON.stringify(partData));
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
    removeValid()
}

function clearInput() {
    patrName.value = ''
    partCategary.value = ''
    partPrice.value = ''
    partBrand.value = ''
    partdiscountReat.value = ''
}

function showData() {
    result = ``
    for (var i = 0; i < partData.length; i++) {
        result +=
            `
        <div class="col-6 col-md-6 col-lg-4 p-0 carPart-card">
            <div class="card p-0 m-0 position-relative">
                <div class="d-flex flex-column custom-postion z-3">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-code-compare"></i>
                </div>
                <div class="discount position-relative">
                    <span class="position-absolute translate-middle badge rounded-pill bg-danger" >
                            -${partData[i].pdiscountReat}%
                    </span>
                    <a href="#" class="nav-link">
                        <img src="${partData[i].pPartImg}" class="card-img-top" alt="...">
                    </a>
                </div>
                <div class="card-body">
                    <h3 class="card-title">
                        <a href="#" class="nav-link"> ${partData[i].pName}</a>
                    </h3>
                    <div class="d-flex align-items-center p-0 m-0 sale-start">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star "></i>
                    </div>
                    <p> $ ${partData[i].pPrice} <span> ${partData[i].pDiscount}</span></p>
                    <button class="btn btn-danger text-center " onclick="deleatePart(${i})">delete</button>
                    
                </div>
            </div>
        </div>
        `
    }
    showDataId.innerHTML = result;
}

function deleatePart(index) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            partData.splice(index, 1);
            localStorage.setItem('parts', JSON.stringify(partData));
            showData()
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
}
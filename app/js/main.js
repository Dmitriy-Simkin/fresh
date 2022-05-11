


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("dropdown__show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropdown__btn')) {

  var dropdowns = document.getElementsByClassName("dropdown__list");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('dropdown__show')) {
      openDropdown.classList.remove('dropdown__show');
    }
  }
}
}

document.querySelector(".dropdown__btn").addEventListener("click", function(e) {
  this.classList.toggle("active");
});
  

$(document).ready(function () {
  $('.slider').slick({

    
});
var mixer = mixitup('.top__products');
  });

  const counter = function () {
    const btns = document.querySelectorAll('.counter__btn');
  
  
    btns.forEach(btn => {
      btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter__value');
        const currentValue = +inp.value;
        let newValue;
  
        if (direction === 'plus') {
          newValue = currentValue + 1 < 99 ? currentValue + 1 : 99;
        } else {
          newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }
  
        inp.value = newValue;
      })
    })
  
  }
  
  counter();
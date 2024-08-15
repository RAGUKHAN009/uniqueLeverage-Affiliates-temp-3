function ShowMore() {

  const DropDown = document.getElementById('DropDown')

  const Bars1 = document.getElementById('Bars1');
  const Bars2 = document.getElementById('Bars2');
  const Bars3 = document.getElementById('Bars3');


  if (DropDown.classList.contains('DropDownH')) {
    DropDown.classList.remove('DropDownH')
    DropDown.classList.add('DropDownS')
  }
  else {
    DropDown.classList.add('DropDownH')
    DropDown.classList.remove('DropDownS')
  }


  if (Bars1.classList.contains('Bars1S')) {
    Bars1.classList.remove('Bars1S')
    Bars1.classList.add('Bars1H')
  }
  else {
    Bars1.classList.add('Bars1S')
    Bars1.classList.remove('Bars1H')
  }


  if (Bars2.classList.contains('Bars2S')) {
    Bars2.classList.remove('Bars2S')
    Bars2.classList.add('Bars2H')
  }
  else {
    Bars2.classList.add('Bars2S')
    Bars2.classList.remove('Bars2H')
  }


  if (Bars3.classList.contains('Bars3S')) {
    Bars3.classList.remove('Bars3S')
    Bars3.classList.add('Bars3H')
  }
  else {
    Bars3.classList.add('Bars3S')
    Bars3.classList.remove('Bars3H')
  }

}

const container = document.getElementById('heroCont');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY || window.pageYOffset;
  const windowHeight = window.innerHeight;

  if (scrollPosition >= windowHeight) {
    container.classList.remove('scrolled');
  } else {
    container.classList.add('scrolled');
  }
});

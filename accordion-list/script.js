const accordionList = document.querySelectorAll('.accordion dt');
if(accordionList.length) {
  accordionList[0].classList.add('active');
  accordionList[0].nextElementSibling.classList.add('active');

  function activeAccordion() {
    this.classList.toggle('active')
  this.nextElementSibling.classList.toggle('active');
  }

  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
  })
}

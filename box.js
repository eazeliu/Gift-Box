document.addEventListener('DOMContentLoaded', () => {
  const boxWrapper = document.getElementById('boxWrapper');
  const totalBoxes = 3;


  for (let i = 1; i <= totalBoxes; i++) {
    const boxItem = document.createElement('div');
    boxItem.className = 'crystal-box';
    boxItem.setAttribute('data-id', i);

    boxItem.innerHTML = `
      <div class="layer layer-aurora"></div>
      <div class="layer layer-particles"></div>
      <div class="layer layer-glass"></div>
    `;

    boxWrapper.appendChild(boxItem);
  }


  boxWrapper.addEventListener('click', (event) => {
    const clickedBox = event.target.closest('.crystal-box');
    
    if (!clickedBox || clickedBox.classList.contains('active')) return;

    const allBoxes = document.querySelectorAll('.crystal-box');

    allBoxes.forEach(box => {
      box.classList.remove('active', 'inactive');
      
      if (box === clickedBox) {
        box.classList.add('active');
      } else {
        box.classList.add('inactive'); 
      }
    });

    setTimeout(() => {
      console.log(`box ${clickedBox.dataset.id} activated`);
    }, 500);
  });
});
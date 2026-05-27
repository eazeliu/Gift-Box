document.addEventListener('DOMContentLoaded', () => {
  const boxWrapper = document.getElementById('boxWrapper');
  const totalBoxes = 3;

  for (let i = 1; i <= totalBoxes; i++) {
    const boxItem = document.createElement('div');
    boxItem.className = 'crystal-box';
    boxItem.setAttribute('data-id', i);

    boxItem.innerHTML = `
      <div class="box-core">
        <div class="layer layer-aurora"></div>
        <div class="layer layer-particles"></div>
        <div class="layer layer-glass"></div>
      </div>
    `;

    boxWrapper.appendChild(boxItem);
  }

  boxWrapper.addEventListener('click', (event) => {
    const clickedBox = event.target.closest('.crystal-box');
    

    if (!clickedBox || clickedBox.classList.contains('active')) return;

    void clickedBox.offsetWidth; 
    clickedBox.classList.add('active');

    const randomNum = Math.floor(Math.random() * 90) + 10; 
    const luckyNumberString = `x${randomNum}`;

    const numberWrapper = document.createElement('div');
    numberWrapper.className = 'lucky-number-wrapper';
    numberWrapper.innerHTML = `
      <div class="lucky-number-box">
        <span class="number-text">${luckyNumberString}</span>
      </div>
    `;
    clickedBox.appendChild(numberWrapper);

    setTimeout(() => {
      console.log(`box ${clickedBox.dataset.id} activated`);
    }, 1800);
  });
});
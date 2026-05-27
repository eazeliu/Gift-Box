document.addEventListener('DOMContentLoaded', () => {
  const boxWrapper = document.getElementById('boxWrapper');
  const totalBoxes = 3;

  // 動態重複生成三個組件結構（精簡為純三層）
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

  // 點擊邏輯控制
  boxWrapper.addEventListener('click', (event) => {
    const clickedBox = event.target.closest('.crystal-box');
    
    if (!clickedBox || clickedBox.classList.contains('active')) return;

    const allBoxes = document.querySelectorAll('.crystal-box');

    allBoxes.forEach(box => {
      box.classList.remove('active', 'inactive');
      
      if (box === clickedBox) {
        box.classList.add('active'); // 觸發快速縮小並放大到 1.2 倍
      } else {
        box.classList.add('inactive'); // 剩下的縮小
      }
    });

    setTimeout(() => {
      console.log(`第 ${clickedBox.dataset.id} 個六角形箱子成功開啟！`);
    }, 500);
  });
});
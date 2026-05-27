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
      <img src="img/glass-base.png" class="layer layer-glass" alt="Glass">
      <img src="img/rainbow-edge.png" class="layer layer-edge" alt="Edge">
      <div class="layer layer-mask"></div>
    `;

    boxWrapper.appendChild(boxItem);
  }

  // 2. 🎯 點擊邏輯控制
  boxWrapper.addEventListener('click', (event) => {
    const clickedBox = event.target.closest('.crystal-box');
    
    // 如果沒點到箱子，或點到了已經被點擊的箱子，就不執行
    if (!clickedBox || clickedBox.classList.contains('active')) return;

    const allBoxes = document.querySelectorAll('.crystal-box');

    allBoxes.forEach(box => {
      // 拔掉原本的狀態
      box.classList.remove('active', 'inactive');
      
      // 判斷是「被點擊的」還是「剩下的」
      if (box === clickedBox) {
        box.classList.add('active'); // 觸發快速縮小並放大到 1.2 倍
      } else {
        box.classList.add('inactive'); // 剩下的縮小到 0.65 倍並變淡
      }
    });

    // 3. 可以在這裡接續 500ms 後的展開動畫
    setTimeout(() => {
      console.log(`第 ${clickedBox.dataset.id} 個六角形箱子成功開啟！`);
    }, 500);
  });
});
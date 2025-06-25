(() => {
  'use strict';

  const button = document.getElementById('change_ld');
  const storedTheme = localStorage.getItem('theme') || 
                     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  // 初始化主题和按钮状态
  function initTheme() {
    document.documentElement.setAttribute('data-bs-theme', storedTheme);
    updateButton(storedTheme);
  }

  // 更新按钮文本和样式
  function updateButton(theme) {
    if (theme === 'dark') {
      button.textContent = 'Light';
      button.classList.remove('light');
	  document.getElementById('change_ld').setAttribute('class','btn btn-light btn-dark-c');
	  button.classList.add('clicked')
	  setTimeout(() => {
	    button.classList.remove('clicked');
	  }, 300);
    } else {
      button.textContent = 'Dark';
      button.classList.add('light');
	  document.getElementById('change_ld').setAttribute('class','btn btn-dark btn-dark-c');
	  button.classList.add('clicked')
	  setTimeout(() => {
	    button.classList.remove('clicked');
	  }, 300);
    }
  }

  // 切换主题
  function toggleTheme() {
    // 添加点击动画
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 300);

    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButton(newTheme);
  }

  // 初始化
  initTheme();
  
  // 添加点击事件
  button.addEventListener('click', toggleTheme);

  // 监听系统主题变化（可选）
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-bs-theme', newTheme);
      updateButton(newTheme);
    }
  });
})();
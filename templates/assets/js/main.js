console.log("Hi from main.js");

// 处理图片加载
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.post-cover img');
  
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.classList.add('loaded');
    });
    
    // 如果图片已经缓存，直接添加 loaded 类
    if (img.complete) {
      img.classList.add('loaded');
    }
  });
});

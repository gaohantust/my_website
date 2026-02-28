document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        // 边界检查
        if (index < 0 || index >= totalSlides) return;

        // 隐藏所有幻灯片
        slides.forEach(slide => slide.classList.remove('active'));
        // 移除所有指示器的激活状态
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // 显示当前索引的幻灯片
        slides[index].classList.add('active');
        // 设置对应指示器为激活状态
        indicators[index].classList.add('active');
        
        currentIndex = index; // 更新当前索引
    }

    function nextSlide() {
        let nextIndex = (currentIndex + 1) % totalSlides;
        showSlide(nextIndex);
    }

    // 设置自动播放，每3秒切换一次
    let slideInterval = setInterval(nextSlide, 3000);

    // 为每个指示器添加点击事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(slideInterval); // 点击后暂停自动播放
            showSlide(index);
            slideInterval = setInterval(nextSlide, 3000); // 重新开始自动播放
        });
    });
});
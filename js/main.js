document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        // 隐藏所有幻灯片
        slides.forEach(slide => slide.classList.remove('active'));
        
        // 显示当前索引的幻灯片
        if (slides[index]) {
            slides[index].classList.add('active');
        } else {
            // 如果索引超出范围，则回到第一个
            slides[0].classList.add('active');
            currentIndex = 0;
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // 设置自动播放，每3秒切换一次
    let slideInterval = setInterval(nextSlide, 3000);

    // 可选：当鼠标悬停在轮播图上时停止自动播放
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    carouselContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 3000);
    });
});
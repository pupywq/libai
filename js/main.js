document.addEventListener('DOMContentLoaded', () => {
    // 1. 获取所有页面和导航按钮
    const pages = document.querySelectorAll('.page');
    const navItems = document.querySelectorAll('.nav-item');
    const bgm = document.getElementById('bgm');

    // 2. 页面切换逻辑
    function switchPage(targetId) {
        // 隐藏所有页面
        pages.forEach(page => page.classList.remove('active'));
        // 显示目标页面
        const targetPage = document.getElementById(targetId);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // 更新导航栏高亮状态
        navItems.forEach(item => {
            if (item.getAttribute('data-target') === targetId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        // 切换页面时滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 绑定导航点击事件
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            switchPage(targetId);
        });
    });

    // 3. 背景音乐 (BGM) 逻辑
    // 由于浏览器限制，音频必须有用户交互（点击）才能播放。
    // 监听全局第一次点击事件来启动 BGM
    let bgmStarted = false;
    
    document.body.addEventListener('click', function startBgm() {
        if (!bgmStarted && bgm) {
            bgm.volume = 0.5; // 设置音量 (0.0 到 1.0)
            bgm.play().then(() => {
                bgmStarted = true;
                // 播放成功后移除监听，避免重复执行
                document.body.removeEventListener('click', startBgm);
            }).catch(error => {
                console.log("播放失败，可能是音频文件路径不对或格式不支持:", error);
            });
        }
    }, { once: false }); // 使用 once: false，配合内部标志位

    // 4. 补充：如果图三（Memory）真的需要滑动切换图片
    // 这里只是简单展示，因为截图里是静态的，你可以根据实际图片数量调整
    const memoryImg = document.querySelector('.memory-img-wrapper img');
    const prevBtn = document.querySelector('.pagination span:first-child');
    const nextBtn = document.querySelector('.pagination span:last-child');
    
    // 假设你有三张图片
    const memoryImages = [
        'assets/img/memory.jpg',
        'assets/img/memory2.jpg',
        'assets/img/memory3.jpg'
    ];
    let currentImgIndex = 0;

    if (prevBtn && nextBtn && memoryImg) {
        prevBtn.addEventListener('click', () => {
            currentImgIndex = (currentImgIndex - 1 + memoryImages.length) % memoryImages.length;
            memoryImg.src = memoryImages[currentImgIndex];
        });
        nextBtn.addEventListener('click', () => {
            currentImgIndex = (currentImgIndex + 1) % memoryImages.length;
            memoryImg.src = memoryImages[currentImgIndex];
        });
    }
});

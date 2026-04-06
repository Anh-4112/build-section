(function () {
    try {
        var items = document.querySelectorAll('.list-item');
        if (!items || items.length === 0) return;

        items.forEach(function (item) {
            var rafId = 0;
            var latestX = 0;
            var latestY = 0;
            var needsUpdate = false;

            function apply() {
                rafId = 0;
                if (!needsUpdate) return;
                item.style.setProperty('--cursor-x', latestX + 'px');
                item.style.setProperty('--cursor-y', latestY + 'px');
                needsUpdate = false;
            }

            item.addEventListener('mouseenter', function () {
                item.classList.add('is-hovering');
            });

            item.addEventListener('mousemove', function (e) {
                latestX = e.clientX;
                latestY = e.clientY;
                needsUpdate = true;
                if (!rafId) {
                    rafId = window.requestAnimationFrame(apply);
                }
            });

            item.addEventListener('mouseleave', function () {
                item.classList.remove('is-hovering');
                item.style.removeProperty('--cursor-x');
                item.style.removeProperty('--cursor-y');
            });
        });
    } catch (e) {
    }
})();
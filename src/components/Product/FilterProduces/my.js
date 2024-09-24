console.log('ayman')
document.addEventListener('DOMContentLoaded', (event) => {
    // الحصول على جميع عناصر li داخل العنصر الذي يحمل الفئة 'category-menu'
    const menuItems = document.querySelectorAll('.category-menu > li');
    const menu = document.querySelector('.category-menu');

    // تحقق من أن العناصر موجودة قبل إضافة الأحداث
    if (menu && menuItems.length > 0) {
        // إضافة حدث mouseenter لكل عنصر li
        menuItems.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                item.classList.add('active');
                e.preventDefault();
            });
        });

        // إضافة حدث mouseleave للعنصر الذي يحمل الفئة 'category-menu'
        menu.addEventListener('mouseleave', (e) => {
            menuItems.forEach(item => item.classList.remove('active'));
            e.preventDefault();
        });
    } else {
        console.error('عناصر .category-menu أو .category-menu > li غير موجودة في الـ DOM');
    }
});

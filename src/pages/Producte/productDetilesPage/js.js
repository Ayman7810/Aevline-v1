document.addEventListener('DOMContentLoaded', function() {
    // العثور على العناصر التي تحتوي على class "pro-qty"
    const proQtyElements = document.querySelectorAll('.pro-qty');
    console.log(proQtyElements)
    proQtyElements.forEach(function(proQty) {
        // إضافة أزرار + و - إلى كل عنصر
        const decBtn = document.createElement('span');
        decBtn.className = 'dec qtybtn';
        decBtn.textContent = '-';
        proQty.prepend(decBtn);
        
        const incBtn = document.createElement('span');
        incBtn.className = 'inc qtybtn';
        incBtn.textContent = '+';
        proQty.append(incBtn);
        
        // إضافة حدث click للأزرار
        proQty.addEventListener('click', function(event) {
            const button = event.target;
            
            // التحقق إذا كان العنصر الذي تم النقر عليه هو زر + أو -
            if (button.classList.contains('qtybtn')) {
                const input = button.parentElement.querySelector('input');
                let oldValue = parseFloat(input.value);
                
                if (button.classList.contains('inc')) {
                    // زيادة القيمة
                    oldValue += 1;
                } else if (button.classList.contains('dec')) {
                    // تقليل القيمة مع التأكد من عدم النزول تحت الصفر
                    if (oldValue > 0) {
                        oldValue -= 1;
                    } else {
                        oldValue = 0;
                    }
                }
                
                // تعيين القيمة الجديدة في الحقل
                input.value = oldValue;
            }
        });
    });
});


  /*------------------
    	Brands Slider
    --------------------*/
 
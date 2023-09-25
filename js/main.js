const links = document.querySelectorAll('.philter-links-item'); //Получаем все кнопки

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        let linkId = link.getAttribute('data-id');
        // console.log(linkId);

        const items = document.querySelectorAll('.philter-block');

        items.forEach((item) => {
            let categoryId = item.getAttribute('data-category');
            // catArray.push(categoryId);

            if (linkId === categoryId) {
                item.style.display = "none";
                
            } else if (linkId != categoryId) {
                console.log("no work");
            }
        })

        
    });
});

// console.log(catArray);
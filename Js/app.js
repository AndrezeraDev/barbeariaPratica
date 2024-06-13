document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('list');
    const dropdownMenu = document.getElementById('dropdownMenu');

    // Toggle do menu dropdown ao clicar no ícone de menu
    menuIcon.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });

    // Ajuste para fechar o menu dropdown se clicar fora dele
    document.addEventListener('click', function(event) {
        if (!dropdownMenu.contains(event.target) && event.target !== menuIcon) {
            dropdownMenu.classList.remove('show');
        }
    });

    // Aqui mantemos o código do slider conforme estava

    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const manualBtns = document.querySelectorAll('.manual-btn');
    const autoBtns = document.querySelectorAll('.auto-btn1, .auto-btn2, .auto-btn3, .auto-btn4');
    let currentSlide = 1;

    // Clona o primeiro e o último slide para efeito de loop
    const firstClone = slide[0].cloneNode(true);
    const lastClone = slide[slide.length - 1].cloneNode(true);

    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone';

    slides.appendChild(firstClone);
    slides.prepend(lastClone);

    slides.style.transform = `translateX(-100%)`;

    // Botões manuais
    manualBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            moveSlide(index + 1);
            updateAutoBtns(index + 1);
        });
    });

    // Botões automáticos
    autoBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            moveSlide(index + 1);
            updateAutoBtns(index + 1);
        });
    });

    // Atualiza os botões automáticos
    function updateAutoBtns(activeBtn) {
        autoBtns.forEach(btn => {
            btn.classList.remove('active');
        });

        document.querySelector(`.auto-btn${activeBtn}`).classList.add('active');
    }

    // Move o slide
    function moveSlide(index) {
        slides.style.transition = 'transform 0.5s ease-in-out';
        slides.style.transform = `translateX(-${index * 100}%)`;
        currentSlide = index;
    }

    // Transição infinita do slider
    slides.addEventListener('transitionend', () => {
        if (slide[currentSlide].id === firstClone.id) {
            slides.style.transition = 'none';
            currentSlide = 1;
            slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
        if (slide[currentSlide].id === lastClone.id) {
            slides.style.transition = 'none';
            currentSlide = slide.length - 2;
            slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
        
    });
});
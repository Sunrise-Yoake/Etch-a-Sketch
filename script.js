document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const changeGridBtn = document.getElementById('changeGrid');

    function createGrid(size) {
        // Очищаем контейнер
        container.innerHTML = '';
        
        // Рассчитываем размер квадрата
        const squareSize = 960 / size;

        // Создаем сетку
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            // Обработчик наведения (с эффектами из дополнительных заданий)
            square.addEventListener('mouseenter', () => {
                // Генерируем случайный цвет
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);

                // Обновляем счетчик взаимодействий
                let interactions = parseInt(square.dataset.interactions) || 0;
                interactions = Math.min(interactions + 1, 10);
                square.dataset.interactions = interactions;

                // Применяем цвет с прозрачностью
                const opacity = interactions * 0.1;
                square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            });

            container.appendChild(square);
        }
    }

    // Обработчик кнопки
    changeGridBtn.addEventListener('click', () => {
        const newSize = parseInt(prompt('Enter grid size (max 100):', 16));
        if (newSize > 0 && newSize <= 100) {
            createGrid(newSize);
        } else {
            alert('Please enter a number between 1 and 100');
        }
    });

    // Инициализация начальной сетки
    createGrid(16);
});
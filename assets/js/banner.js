document.addEventListener('DOMContentLoaded', function() {
    const serviceButtons = document.querySelectorAll('.service-buttons button');
    const serviceImage = document.querySelector('.service-image');
    const serviceImageImg = serviceImage.querySelector('img');
    const serviceImageText = serviceImage.querySelector('p');

    serviceButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const service = this.getAttribute('data-service');

            // Update image source and text based on the selected service
            switch (service) {
                case 'service1':
                    serviceImageImg.src = 'path/to/service1-image.jpg';
                    serviceImageText.textContent = 'Service 1 description';
                    break;
                case 'service2':
                    serviceImageImg.src = 'path/to/service2-image.jpg';
                    serviceImageText.textContent = 'Service 2 description';
                    break;
                case 'service3':
                    serviceImageImg.src = 'path/to/service3-image.jpg';
                    serviceImageText.textContent = 'Service 3 description';
                    break;
                default:
                    serviceImageImg.src = '';
                    serviceImageText.textContent = '';
            }

            serviceImage.classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    fetch('navigation.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navigation').innerHTML = data;
            
            const nav = document.querySelector('.hnav');
            const secondLine = document.querySelectorAll('.hline')[1];
            const currentPage = window.location.pathname;
        
            // Slide down the second line after a delay
            setTimeout(() => {
                secondLine.classList.add('slide-down');
            }, 500); // Adjust the delay as needed
        
            // Reveal the navigation bar after the second line slides down
            setTimeout(() => {
                nav.classList.add('show');
            }, 1000); // Adjust the delay as needed (500ms after the slide-down)

            function activateCurrentPageLink() {
                const links = nav.querySelectorAll('a');
                links.forEach((link, index) => {
                    if (index != 0) {
                        if (link.href.endsWith(currentPage)) {
                            link.classList.add('active');
                            link.classList.remove('hidden');
                        } else {
                            link.classList.remove('active');
                            link.classList.add('hidden');
                        }
                    }
                });
            }
            activateCurrentPageLink();
        });
});
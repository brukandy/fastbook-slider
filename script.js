// Pause animation on hover for better UX
document.addEventListener('DOMContentLoaded', function() {
    const thumbnailRows = document.querySelectorAll('.thumbnail-row');
    
    thumbnailRows.forEach(row => {
        const track = row.querySelector('.thumbnail-track');
        
        row.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });
        
        row.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });
    });

    // Optional: Add intersection observer for performance
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const track = entry.target.querySelector('.thumbnail-track');
            if (entry.isIntersecting) {
                track.style.animationPlayState = 'running';
            } else {
                track.style.animationPlayState = 'paused';
            }
        });
    }, observerOptions);

    thumbnailRows.forEach(row => {
        observer.observe(row);
    });
});

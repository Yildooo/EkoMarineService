// EkoMarineServices Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeNavigation();
    initializeGallery();
    initializeAnimations();
    initializeScrollEffects();
    initializePageLoader();
    initializeBackToTop();
});

// Page loader functionality
function initializePageLoader() {
    const loader = document.getElementById('pageLoader');

    // Hide loader after page is fully loaded
    window.addEventListener('load', function() {
        setTimeout(() => {
            if (loader) {
                loader.classList.add('hidden');
                // Remove loader from DOM after animation
                setTimeout(() => {
                    loader.remove();
                }, 500);
            }
        }, 1000); // Show loader for at least 1 second for better UX
    });
}

// Navigation functionality
function initializeNavigation() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active navigation item on scroll
    window.addEventListener('scroll', updateActiveNavItem);
}

function updateActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Gallery functionality
function initializeGallery() {
    const galleryContainer = document.getElementById('galleryContent');
    
    // Define all media files from the img folder
    const mediaFiles = [
        {
            type: 'image',
            src: 'img/ekomarine-partnership-1.jpg',
            alt: 'EkoMarineServices Ortaklık Belgeleri 1',
            title: 'İş Ortaklığı Belgeleri'
        },
        {
            type: 'image',
            src: 'img/ekomarine-partnership-2.jpg',
            alt: 'EkoMarineServices Ortaklık Belgeleri 2',
            title: 'Uluslararası İş İlişkileri'
        },
        {
            type: 'video',
            src: 'img/ekomarine-operations-1.mp4',
            alt: 'EkoMarineServices Operasyon Videosu 1',
            title: 'Denizcilik Hizmetleri İş Başında'
        },
        {
            type: 'video',
            src: 'img/ekomarine-operations-main.mp4',
            alt: 'EkoMarineServices Operasyon Videosu 2',
            title: 'Profesyonel Deniz Bakımı'
        }
    ];
    
    // Create gallery items
    mediaFiles.forEach((media, index) => {
        const galleryItem = createGalleryItem(media, index);
        galleryContainer.appendChild(galleryItem);
    });
}

function createGalleryItem(media, index) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-lg-6 col-md-6 mb-4';
    
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item fade-in';
    galleryItem.style.animationDelay = `${index * 0.1}s`;
    
    let mediaElement;
    
    if (media.type === 'image') {
        mediaElement = document.createElement('img');
        mediaElement.src = media.src;
        mediaElement.alt = media.alt;
        mediaElement.className = 'img-fluid';
        mediaElement.loading = 'lazy';
    } else if (media.type === 'video') {
        mediaElement = document.createElement('video');
        mediaElement.src = media.src;
        mediaElement.className = 'img-fluid';
        mediaElement.controls = true;
        mediaElement.muted = true;
        mediaElement.preload = 'metadata';
    }
    
    const overlay = document.createElement('div');
    overlay.className = 'gallery-overlay';
    
    const icon = document.createElement('i');
    icon.className = media.type === 'image' ? 'fas fa-search-plus' : 'fas fa-play';
    
    overlay.appendChild(icon);
    galleryItem.appendChild(mediaElement);
    galleryItem.appendChild(overlay);
    
    // Add click event for modal or fullscreen view
    galleryItem.addEventListener('click', () => openMediaModal(media));
    
    colDiv.appendChild(galleryItem);
    return colDiv;
}

function openMediaModal(media) {
    // Create modal for viewing media in fullscreen
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'mediaModal';
    modal.tabIndex = -1;
    
    modal.innerHTML = `
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${media.alt}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body text-center">
                    ${media.type === 'image' 
                        ? `<img src="${media.src}" class="img-fluid" alt="${media.alt}">`
                        : `<video src="${media.src}" class="img-fluid" controls autoplay muted></video>`
                    }
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
    
    // Remove modal from DOM when hidden
    modal.addEventListener('hidden.bs.modal', () => {
        modal.remove();
    });
}

// Animation functionality
function initializeAnimations() {
    // Add fade-in class to elements that should animate
    const animatedElements = document.querySelectorAll('.achievement-card, .feature-card');
    animatedElements.forEach(el => el.classList.add('fade-in'));
    
    // Trigger animations on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Scroll effects
function initializeScrollEffects() {
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 102, 204, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'var(--primary-color)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Parallax effect removed for better stability
    // Hero section now has fixed background
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Contact form functionality (if needed in the future)
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission
            showNotification('Mesajınız için teşekkürler! En kısa sürede size geri döneceğiz.', 'success');
        });
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Performance optimization
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Back to top functionality
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        // Smooth scroll to top when clicked
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Menu Data
const MENU_ITEMS = [
    // Plats de Grand-mère
    {
        id: '1',
        name: 'Pintade Braisée',
        description: 'Pintade marinée avec des épices africaines, braisée lentement avec des légumes locaux.',
        price: 8500,
        category: 'grand-mere'
    },
    {
        id: '2',
        name: 'Crincrin avec poisson fumé',
        description: 'Feuilles de crincrin préparées avec de l\'huile rouge, servi avec du poisson fumé.',
        price: 6500,
        category: 'grand-mere'
    },
    {
        id: '3',
        name: 'Asrokaoun',
        description: 'Plat traditionnel à base de poisson séché, accompagné de sauce tomate épicée.',
        price: 7000,
        category: 'grand-mere'
    },
    {
        id: '4',
        name: 'Bonnyo',
        description: 'Poisson frais grillé aux herbes aromatiques, servi avec une sauce pimentée maison.',
        price: 7500,
        category: 'grand-mere'
    },
    {
        id: '5',
        name: 'Akassa avec sauce gombo',
        description: 'Pâte de maïs fermentée accompagnée d\'une sauce gombo onctueuse.',
        price: 5000,
        category: 'grand-mere'
    },
    
    // Petit Déjeuner
    {
        id: '6',
        name: 'Petit déjeuner continental',
        description: 'Café, jus d\'orange, viennoiseries, confiture maison et fruits frais.',
        price: 4500,
        category: 'petit-dejeuner'
    },
    {
        id: '7',
        name: 'Omelette africaine',
        description: 'Omelette aux oignons, tomates et piments, accompagnée de pain frais.',
        price: 4000,
        category: 'petit-dejeuner'
    },
    
    // Entrées & Salades
    {
        id: '8',
        name: 'Salade La Cloche',
        description: 'Mélange de salades vertes, tomates, concombres, œufs et vinaigrette maison.',
        price: 3500,
        category: 'entrees'
    },
    {
        id: '9',
        name: 'Avocat crevettes',
        description: 'Demi-avocat farci de crevettes fraîches à la mayonnaise légère.',
        price: 5500,
        category: 'entrees'
    },
    
    // Pizzas
    {
        id: '10',
        name: 'Pizza africaine',
        description: 'Sauce tomate, mozzarella, poulet épicé, oignons et poivrons.',
        price: 8000,
        category: 'pizzas'
    },
    {
        id: '11',
        name: 'Pizza végétarienne',
        description: 'Sauce tomate, mozzarella, champignons, artichauts, poivrons et olives.',
        price: 7500,
        category: 'pizzas'
    },
    
    // Volailles & Viandes
    {
        id: '12',
        name: 'Poulet Yassa',
        description: 'Poulet mariné au citron et oignons, servi avec du riz blanc.',
        price: 7000,
        category: 'viandes'
    },
    {
        id: '13',
        name: 'Brochettes de bœuf',
        description: 'Brochettes de bœuf mariné aux épices, servi avec frites et salade.',
        price: 7500,
        category: 'viandes'
    },
    
    // Poissons
    {
        id: '14',
        name: 'Poisson braisé entier',
        description: 'Poisson frais braisé avec des épices, servi avec du riz et de la sauce tomate.',
        price: 8500,
        category: 'poissons'
    },
    {
        id: '15',
        name: 'Crevettes grillées',
        description: 'Crevettes fraîches grillées à l\'ail et au persil, accompagnées de riz basmati.',
        price: 9000,
        category: 'poissons'
    },
    
    // Cocktails & Boissons
    {
        id: '16',
        name: 'Cocktail Béninois',
        description: 'Mélange de jus de fruits tropicaux avec une touche de rhum local.',
        price: 4500,
        category: 'cocktails'
    },
    {
        id: '17',
        name: 'Jus de baobab',
        description: 'Jus naturel de fruit de baobab, riche en vitamine C.',
        price: 3000,
        category: 'cocktails'
    }
];

// Gallery Data
const GALLERY_IMAGES = [
    {
        src: 'im1.jpg',
        alt: 'Restaurant La Cloche - Vue extérieure',
        caption: 'Notre restaurant chaleureux'
    },
    {
        src: 'im2.jpg',
        alt: 'Intérieur du restaurant',
        caption: 'Ambiance conviviale et élégante'
    },
    {
        src: 'im3.jpg',
        alt: 'Salle à manger principale',
        caption: 'Espace spacieux et confortable'
    },
    {
        src: 'im4.jpg',
        alt: 'Coin bar du restaurant',
        caption: 'Notre bar bien approvisionné'
    },
    {
        src: 'im5.jpg',
        alt: 'Terrasse du restaurant',
        caption: 'Terrasse pour déjeuner en plein air'
    },
    {
        src: 'im6.jpg',
        alt: 'Pintade Braisée - Spécialité maison',
        caption: 'Notre fameuse Pintade Braisée'
    },
    {
        src: 'im7.jpg',
        alt: 'Crincrin avec poisson fumé',
        caption: 'Crincrin traditionnel béninois'
    },
    {
        src: 'im8.jpg',
        alt: 'Plats variés de la cuisine béninoise',
        caption: 'Spécialités africaines'
    },
    {
        src: 'im9.jpg',
        alt: 'Desserts maison',
        caption: 'Nos desserts faits maison'
    },
    {
        src: 'im10.jpg',
        alt: 'Cocktails et boissons',
        caption: 'Cocktails et boissons fraîches'
    }
];

// DOM Elements
let currentCategory = 'grand-mere';
let currentGalleryIndex = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Initialize navbar
    initNavbar();
    
    // Initialize gallery
    initGallery();
    
    // Initialize menu
    initMenu();
    
    // Initialize lightbox
    initLightbox();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize animations
    initAnimations();
    
    // Update gallery counter
    updateGalleryCounter();
});

// Navbar functionality
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.mobile-link');
    
    // Handle scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        const isOpen = mobileMenu.style.display === 'block';
        mobileMenu.style.display = isOpen ? 'none' : 'block';
        mobileMenuBtn.innerHTML = isOpen ? '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>';
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.style.display = 'none';
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && mobileMenu.style.display === 'block') {
            mobileMenu.style.display = 'none';
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}

// Gallery functionality
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const totalImagesElement = document.getElementById('totalImages');
    
    // Set total images count
    totalImagesElement.textContent = GALLERY_IMAGES.length;
    
    // Create gallery items
    GALLERY_IMAGES.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item animate-fade-in';
        galleryItem.setAttribute('data-index', index);
        
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
            <div class="gallery-overlay">
                <div class="gallery-caption">${image.caption}</div>
            </div>
        `;
        
        // Add click event to open lightbox
        galleryItem.addEventListener('click', function() {
            currentGalleryIndex = index;
            openLightbox();
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

function updateGalleryCounter() {
    const currentImageElement = document.getElementById('currentImage');
    currentImageElement.textContent = currentGalleryIndex + 1;
}

// Lightbox functionality
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.classList.contains('show')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateGallery('prev');
            if (e.key === 'ArrowRight') navigateGallery('next');
        }
    });
    
    // Navigation buttons
    lightboxPrev.addEventListener('click', () => navigateGallery('prev'));
    lightboxNext.addEventListener('click', () => navigateGallery('next'));
    
    function openLightbox() {
        updateLightbox();
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden';
        updateGalleryCounter();
    }
    
    function closeLightbox() {
        lightbox.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
    
    function navigateGallery(direction) {
        if (direction === 'prev') {
            currentGalleryIndex = (currentGalleryIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
        } else {
            currentGalleryIndex = (currentGalleryIndex + 1) % GALLERY_IMAGES.length;
        }
        updateLightbox();
        updateGalleryCounter();
    }
    
    function updateLightbox() {
        const currentImage = GALLERY_IMAGES[currentGalleryIndex];
        lightboxImage.src = currentImage.src;
        lightboxImage.alt = currentImage.alt;
        lightboxCaption.textContent = currentImage.caption;
    }
}

// Menu functionality
function initMenu() {
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuItemsContainer = document.getElementById('menuItems');
    
    // Load initial menu items
    loadMenuItems(currentCategory);
    
    // Add click event to tabs
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            menuTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get category from data attribute
            const category = this.getAttribute('data-category');
            currentCategory = category;
            
            // Load menu items for selected category
            loadMenuItems(category);
        });
    });
}

function loadMenuItems(category) {
    const menuItemsContainer = document.getElementById('menuItems');
    
    // Filter items by category
    const filteredItems = MENU_ITEMS.filter(item => item.category === category);
    
    // Clear current items
    menuItemsContainer.innerHTML = '';
    
    // If no items found
    if (filteredItems.length === 0) {
        menuItemsContainer.innerHTML = `
            <p class="no-items-message" style="text-align: center; color: #999; font-style: italic; grid-column: 1/-1;">
                Bientôt disponible...
            </p>
        `;
        return;
    }
    
    // Create menu items
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item animate-fade-in';
        menuItem.innerHTML = `
            <div class="menu-item-header">
                <h4 class="menu-item-name">${item.name}</h4>
                <div class="menu-item-divider"></div>
                <span class="menu-item-price">${formatPrice(item.price)} <span>FCFA</span></span>
            </div>
            <p class="menu-item-description">${item.description}</p>
        `;
        menuItemsContainer.appendChild(menuItem);
    });
}

function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR').format(price);
}

// Smooth scrolling
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calculate offset based on navbar height
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animations on scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
    
    // Observe gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        observer.observe(item);
    });
    
    // Observe menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        observer.observe(item);
    });
}

// Add scroll animation to hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    
    if (hero) {
        hero.style.transform = `translate3d(0px, ${rate}px, 0px)`;
    }
});

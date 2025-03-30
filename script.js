// Array of search options - easily editable by developers
const searchOptions = [
    {
        name: "Google",
        icon: "fab fa-google",
        url: "https://www.google.com/search?q="
    },
    {
        name: "YouTube",
        icon: "fab fa-youtube",
        url: "https://www.youtube.com/results?search_query="
    },
    {
        name: "Wikipedia",
        icon: "fab fa-wikipedia-w",
        url: "https://en.wikipedia.org/wiki/Special:Search?search="
    },
    {
        name: "Amazon",
        icon: "fab fa-amazon",
        url: "https://www.amazon.com/s?k="
    },
    {
        name: "GitHub",
        icon: "fab fa-github",
        url: "https://github.com/search?q="
    },
    {
        name: "Twitter",
        icon: "fab fa-twitter",
        url: "https://twitter.com/search?q="
    },
    {
        name: "Reddit",
        icon: "fab fa-reddit",
        url: "https://www.reddit.com/search/?q="
    },
    {
        name: "DuckDuckGo",
        icon: "fas fa-search",
        url: "https://duckduckgo.com/?q="
    },
    {
        name: "IMDb",
        icon: "fab fa-imdb",
        url: "https://www.imdb.com/find?q="
    },
    {
        name: "Stack Overflow",
        icon: "fab fa-stack-overflow",
        url: "https://stackoverflow.com/search?q="
    },
    {
        name: "Spotify",
        icon: "fab fa-spotify",
        url: "https://open.spotify.com/search/"
    },
    {
        name: "Maps",
        icon: "fas fa-map-marker-alt",
        url: "https://www.google.com/maps/search/"
    }
];

// DOM elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchOptionsContainer = document.querySelector('.search-options');

// Initialize the app
function init() {
    renderSearchOptions();
    setupEventListeners();
}

// Render search options
function renderSearchOptions() {
    searchOptionsContainer.innerHTML = '';
    
    searchOptions.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'search-option';
        optionElement.dataset.url = option.url;
        optionElement.innerHTML = `
            <i class="${option.icon}"></i>
            <span class="name">${option.name}</span>
        `;
        searchOptionsContainer.appendChild(optionElement);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search button click
    searchButton.addEventListener('click', performSearch);
    
    // Enter key in search input
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Search option clicks
    document.querySelectorAll('.search-option').forEach(option => {
        option.addEventListener('click', function() {
            const searchUrl = this.dataset.url;
            performSearch(searchUrl);
        });
    });
}

// Perform the search
function performSearch(customUrl = null) {
    const searchTerm = searchInput.value.trim();
    
    if (!searchTerm) {
        searchInput.focus();
        return;
    }
    
    // If a custom URL is provided (from clicking an option), use that
    // Otherwise use the first search option (Google) as default
    const searchUrl = customUrl || searchOptions[0].url;
    window.open(searchUrl + encodeURIComponent(searchTerm), '_blank');
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
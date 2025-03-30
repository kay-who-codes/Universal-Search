// Array of search options - easily editable by developers
const searchOptions = [
    {
        name: "Google",
        icon: "fab fa-google",
        url: "https://www.google.com/search?q=",
        color: "#4285F4" // Google blue
    },
    {
        name: "YouTube",
        icon: "fab fa-youtube",
        url: "https://www.youtube.com/results?search_query=",
        color: "#FF0000" // YouTube red
    },
    {
        name: "Wikipedia",
        icon: "fab fa-wikipedia-w",
        url: "https://en.wikipedia.org/wiki/Special:Search?search=",
        color: "#FFFFFF" // Wikipedia white
    },
    {
        name: "Amazon",
        icon: "fab fa-amazon",
        url: "https://www.amazon.com/s?k=",
        color: "#FF9900" // Amazon orange
    },
    {
        name: "GitHub",
        icon: "fab fa-github",
        url: "https://github.com/search?q=",
        color: "#8B5CF6" // GitHub purple
    },
    {
        name: "Twitter",
        icon: "fab fa-twitter",
        url: "https://twitter.com/search?q=",
        color: "#1DA1F2" // Twitter blue
    },
    {
        name: "Reddit",
        icon: "fab fa-reddit",
        url: "https://www.reddit.com/search/?q=",
        color: "#FF5700" // Reddit orange
    },
    {
        name: "DuckDuckGo",
        icon: "fas fa-search",
        url: "https://duckduckgo.com/?q=",
        color: "#DE5833" // DuckDuckGo red
    },
    {
        name: "IMDb",
        icon: "fab fa-imdb",
        url: "https://www.imdb.com/find?q=",
        color: "#F5C518" // IMDb yellow
    },
    {
        name: "Stack Overflow",
        icon: "fab fa-stack-overflow",
        url: "https://stackoverflow.com/search?q=",
        color: "#F48024" // Stack Overflow orange
    },
    {
        name: "Spotify",
        icon: "fab fa-spotify",
        url: "https://open.spotify.com/search/",
        color: "#1DB954" // Spotify green
    },
    {
        name: "Maps",
        icon: "fas fa-map-marker-alt",
        url: "https://www.google.com/maps/search/",
        color: "#34A853" // Google Maps green
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
            <i class="${option.icon}" style="color: ${option.color}"></i>
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

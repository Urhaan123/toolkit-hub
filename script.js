const tools = [
    {
        name: 'PDF Merger',
        description: 'Combine multiple PDFs into one seamless document',
        icon: 'fa-file-pdf'
    },
    {
        name: 'Image Compressor',
        description: 'Reduce image size without losing quality',
        icon: 'fa-image'
    },
    {
        name: 'Password Generator',
        description: 'Create strong, secure passwords instantly',
        icon: 'fa-key'
    },
    {
        name: 'Unit Converter',
        description: 'Convert between units of length, weight, volume, and more',
        icon: 'fa-exchange-alt'
    },
    {
        name: 'QR Code Generator',
        description: 'Generate custom QR codes for URLs, text, or contacts',
        icon: 'fa-qrcode'
    },
    {
        name: 'Text Summarizer',
        description: 'Quickly condense long articles into concise summaries',
        icon: 'fa-file-alt'
    },
    {
        name: 'Currency Converter',
        description: 'Get real-time currency exchange rates',
        icon: 'fa-money-bill-wave'
    },
    {
        name: 'File Encryptor',
        description: 'Secure your files with advanced encryption',
        icon: 'fa-lock'
    },
    {
        name: 'Plagiarism Checker',
        description: 'Ensure your content is 100% original',
        icon: 'fa-check-double'
    },
    {
        name: 'Color Picker',
        description: 'Extract and copy HEX, RGB, or HSL color codes',
        icon: 'fa-palette'
    },
    {
        name: 'Word Counter',
        description: 'Count words, characters, and sentences in your text',
        icon: 'fa-calculator'
    },
    {
        name: 'YouTube Thumbnail Downloader',
        description: 'Download thumbnails from YouTube videos',
        icon: 'fa-youtube'
    },
    {
        name: 'Age Calculator',
        description: 'Calculate age in years, months, and days',
        icon: 'fa-calendar-alt'
    },
    {
        name: 'BMI Calculator',
        description: 'Check your Body Mass Index for health insights',
        icon: 'fa-weight'
    },
    {
        name: 'Random Name Picker',
        description: 'Randomly select names for contests or teams',
        icon: 'fa-random'
    },
    {
        name: 'Time Zone Converter',
        description: 'Easily convert time between different time zones',
        icon: 'fa-clock'
    },
    {
        name: 'Meme Generator',
        description: 'Create hilarious memes in seconds',
        icon: 'fa-laugh-squint'
    },
    {
        name: 'Gradient Generator',
        description: 'Design beautiful CSS gradients for your projects',
        icon: 'fa-paint-brush'
    },
    {
        name: 'IP Address Lookup',
        description: 'Find your IP address and location details',
        icon: 'fa-network-wired'
    },
    {
        name: 'Website Speed Tester',
        description: "Analyze and improve your website's loading speed",
        icon: 'fa-tachometer-alt'
    }
];

// Populate tools grid
function populateTools() {
    const toolsGrid = document.getElementById('toolsGrid');
    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <i class="fas ${tool.icon}"></i>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
        `;
        toolsGrid.appendChild(toolCard);
    });
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchTools');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const toolCards = document.querySelectorAll('.tool-card');
        
        toolCards.forEach(card => {
            const toolName = card.querySelector('h3').textContent.toLowerCase();
            const toolDescription = card.querySelector('p').textContent.toLowerCase();
            const isVisible = toolName.includes(searchTerm) || toolDescription.includes(searchTerm);
            card.style.display = isVisible ? 'block' : 'none';
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateTools();
    setupSearch();
});

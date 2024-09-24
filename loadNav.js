// JavaScript to dynamically build the navigation bar based on paths.js
document.addEventListener("DOMContentLoaded", function() {
    // Define the navigation bar structure using paths.js
    const navLinks = [
        { name: "Home", path: paths.pages.home },
        { name: "About", path: paths.pages.about },
        { name: "Tech Blog", path: paths.pages.tech },
        { name: "Contact", path: paths.pages.contact }
    ];

    // Create a <nav> element
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.classList.add('navbar'); // Add a class for styling

    // Loop through each link and add it to the navigation bar
    navLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.path; // Use the path from paths.js
        a.textContent = link.name; // Set the name for the link
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);

    // Inject the navigation into the placeholder div
    document.getElementById('nav-placeholder').appendChild(nav);
});

// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// need files to be loaded into DOM first, create a function of the below - the following gets called automatically

export async function loadSvg(containerId) {
    return fetch(`img/${containerId}.svg`)
        .then(response => response.text())
        .then(svgContent => {
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = svgContent;
            } else {
                console.warn(`Container with ID "${containerId}" not found.`);
            }
        })
        .catch(error => console.error(`Error fetching SVG for ${containerId}:`, error));
}
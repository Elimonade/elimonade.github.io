// Alle Platzhalter-Elemente auswählen
const placeholders = document.querySelectorAll('.placeholder');

// Für jedes Platzhalter-Element
placeholders.forEach(placeholder => {
    // Bild aus dem data-image-Attribut holen
    const imageUrl = placeholder.getAttribute('data-image');
    
    // Bild erstellen
    const img = document.createElement('img');
    img.src = imageUrl; // Bildquelle setzen
    placeholder.appendChild(img); // Bild in den Platzhalter einfügen
});

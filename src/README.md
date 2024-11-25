Documentarea proiectului: Catalog de Cărți
1. Descriere scurtă a proiectului și a tehnologiilor utilizate
Proiect:
"Catalog de Cărți" este o aplicație Single Page Application (SPA) creată pentru gestionarea unui catalog de cărți. Aplicația permite utilizatorilor să adauge, să vizualizeze detalii, să listeze și să șteargă cărți. Aceasta este ideală pentru a organiza colecții de cărți într-un mod eficient și simplu.

Tehnologii utilizate:

React.js: Framework JavaScript pentru dezvoltarea interfeței utilizatorului.
CSS: Pentru stilizarea aplicației.
Git/GitHub: Pentru versionare și găzduirea codului sursă.
JavaScript (ES6): Limbajul principal utilizat pentru funcționalitatea aplicației.
Node.js + npm: Gestionarea pachetelor și rularea serverului de dezvoltare.
2. Descrierea componentelor aplicației și a modului de interacțiune între ele
Aplicația este formată din următoarele componente principale:

App.js (Componența principală):
Este punctul central al aplicației și gestionează starea globală a aplicației.
Conține lista de cărți și funcții pentru adăugarea, ștergerea și selectarea unei cărți.
Interacționează cu componentele BookForm, BookList și BookDetails.
BookForm.js:
Este utilizat pentru a colecta informațiile despre o carte (titlu, autor, gen literar, descriere).
Interacțiune:
Primește funcția addBook de la App.js ca prop.
După validarea datelor, transmite o carte nouă către App.js prin funcția addBook.
BookList.js:
Afișează lista cărților sub formă de carduri.
Fiecare card are un buton pentru ștergerea unei cărți.
Interacțiune:
Primește lista cărților din App.js ca prop.
Oferă funcționalitatea de ștergere utilizând funcția deleteBook și selectarea unei cărți utilizând funcția onSelectBook.
BookDetails.js:
Afișează detaliile complete ale unei cărți selectate.
Interacțiune:
Primește cartea selectată ca prop de la App.js.
Se afișează doar dacă o carte este selectată.
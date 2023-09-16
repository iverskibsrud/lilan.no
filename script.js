    // Din liste med milde sitater
const mildeQuotes = ["Vindmøler er jo ikkje miljøvennlige",
    "E tror jo kroppen min får sammenbrudd hvis e spiser vitaminer",
    "E er snekker, ikke svindler",
    "E er så sliten, må ta ein røyk",
    "Du, Mariell, du som er ei sånn jente",
    "Kan ikkje spise blomkål, får jo vitaminsjokk",
    "Hør her Vetle - 6+3, hva er det?",
    "Det er det verste jeg har vært med på på de syv hav",
    "Tenk så gøy å være et vannmolekyl. Tenk så mye de ser",
    "Reise langs vann og strand",
    "Haaland er helt potetgull",
    "Jævlig litteraturisk sagt",
    "Jonathan er for lat til å skrive lat med to t-er",
    "Henrik Wergeland skrev dikt og brukte snus",
    "Hus er hus",
    "Det ølet smakte glassbråt",
    "Penger er jo bare papir",
    "Man må bruke det bestikket man får utdelt",
    "Før man dør skal man ha et siste overblikk over Bygland",
    "Nå er det like før jeg trenger en ispose på hjernen",
    "Nå er jo bilen på surfbrett",
    "Han svarte men han har ikkje svart enda.",
    "(Funnar på flyet) Hvis vi får motorstopp blir vi stuck her oppe.",
    "Han har ikke forandret seg på et prikk",
    "Krabber er mine verste fiender",
    "Ein hest er som ein elg du ikkje kan skyte"
];

  // Din liste med sitater som er "på grensa"
  const pagrensaQuotes = [
];
  
  // Din liste med grove sitater
  const groveQuotes = [

  ];
  

  let availableQuotes = []; // Lager for sitater som er tilgjengelige basert på passordet

  // Funksjon for å vise et tilfeldig sitat fra availableQuotes-listen
  function visTilfeldigSitat() {
      const randomIndex = Math.floor(Math.random() * availableQuotes.length);
      const valgtSitat = availableQuotes[randomIndex];
  
      // Angir det valgte sitatet i en HTML-element (for eksempel en <p> tag med id "quote")
      document.getElementById("quote").innerText = valgtSitat;
  }
  
  function login() {
      const password = document.getElementById("password").value;
  
      if (password === "eggost48") {
          availableQuotes = mildeQuotes;
      } else if (password === "frydenlund") {
          availableQuotes = mildeQuotes.concat(pågrensaQuotes);
      } else if (password === "seksti") {
          availableQuotes = mildeQuotes.concat(pågrensaQuotes, groveQuotes);
      } else {
          alert("Feil passord");
          return;
      }
  
      // Fjerner login-seksjonen fra DOM
      const loginSection = document.getElementById("login-section");
      loginSection.parentNode.removeChild(loginSection);
  
      // Viser quote-seksjonen ved å fjerne "hidden" klassen
      document.getElementById("quote-section").classList.remove("hidden");
  
      // Viser det første sitatet
      visTilfeldigSitat();
  }
  
  // Kjører funksjonen når siden lastes
  window.onload = function() {
      if (availableQuotes.length > 0) {
          visTilfeldigSitat();
      }
  };
  
  
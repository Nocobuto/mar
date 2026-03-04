const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "1507", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "La contraseña es el cumple de Pau", // Title displayed on the passcode entry page
  successMessage: "bieen!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "contraseña incorrecta: pista: es tu dia y mes!", // Message shown for incorrect passcode
  cancelButtonText: "Cancelar", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Hay algo que una colombiana enojona no pueda hacer ?", // Placeholder text in the search input
  trendingTitle: "Busquedas populares", // Title for the trending searches section
  trendingSearches: [
    "Por que Arturo es tan canson?", // Example trending search query
    "Es cierto que en Colombia todos dicen hola bebe que mas pues?", // Another example query
    `Como perdonar a un mexicano en tres sencillos pasos!`, // A personalized trending search
  ],
  proTip: 'Sugerencia: Trata escribiendo exactamente: Cuando conoci a arturo?', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2025-12-25", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "Mucho o poco tiempo, el reloj seguira pasando, y espero sea a tu lado", // Title displayed on the timer page
  timerMessage: "Y vienen muchos y mejores años mas <3 ", // Message shown alongside the timer
  timeUnits: {
    days: "Dias", // Label for days in the timer
    hours: "Horas", // Label for hours in the timer
    minutes: "Minutos", // Label for minutes in the timer
    seconds: "Segundos", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Vamos a recordar un poco", // Title for the recap page
  clickMeText: "Presiona!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Canciones que suenan a ti", // Title for the music page
  musicGallery: [
    {
      title: "Por Ti", // Title of the song
      artist: "Sen Senra", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "BBY ROMEO",
      artist: "Rusowsky & Ralphie Choo",
      left: "40%",
      top: "15%",
    },
    {
      title: "Corazon",
      artist: "Danny Ocean",
      left: "15%",
      top: "40%",
    },
    {
      title: "Dime",
      artist: "Gondwana",
      left: "30%",
      top: "75%",
    },
    {
      title: "Querer Querenos",
      artist: "Canserbero",
      left: "5%",
      top: "65%",
    },
    {
      title: "Otro Atardecer",
      artist: "Bad Bunny & The Marías",
      left: "25%",
      top: "90%",
    },
    {
      title: "Amor de Mis Amores",
      artist: "Agustin Lara",
      left: "35%",
      top: "50%",
    },
    {
      title: "vivo si me exiges",
      artist: "LATIN MAFIA",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Tiempo juntitos", // Title for the messages recap page
    messageGallery: [
      { title: "27 Diciembre, 2025", description: "Un lindo dia" }, // Message entry
      { title: "29 Diciembre, 2025", description: "Un lindo recuerdo" },
      { title: "01 Enero, 2026", description: "Una linda persona ❤️" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Mi costeñita hermosa", // Title for the pictures recap page
    pictureGallery: [
      { title: "Mira que nena tan hermosaaa", description: "❤️" }, // Picture entry
      { title: "Mira que juiciosa esa mujer", description: "❤️ " },
      { title: "Esa sonrisa mas bella de usted", description: "❤️" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Siempre me vas a importar, siempre te tendre presente, siempre seras importante 💖", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Doy gracias a dios por tu vida, y por permitirme de alguna manera, ser parte de ella. Te quiero mucho marii 💖", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Atras", // Text for the previous page button
  nextPageText: "Siguiente", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "Cuando conoci a arturo?", // Example of a correct search query
    "Cuando conoci a arturo?", // Another example of a correct search query
  ],
};

export default config;

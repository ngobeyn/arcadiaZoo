import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
<<<<<<< Updated upstream
    new Route("/signin", "Connexion", "/pages/signin.html"),
=======
    new Route("/signin", "Connexion", "/pages/auth/signin.html", "/js/auth/signin.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html"),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html"),
    new Route("/editAccount", "Modifier mes informations", "/pages/auth/editAccount.html"),
    new Route("/signup", "Création d'un utilsateur", "/pages/auth/signup.html", "/js/auth/signup.js"),
>>>>>>> Stashed changes
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia Zoo";
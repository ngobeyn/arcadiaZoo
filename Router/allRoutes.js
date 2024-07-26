import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html"),
    new Route("/account", "Mon compte", "/pages/auth/account.html"),
<<<<<<< Updated upstream
=======
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html"),
    new Route("/editAccount", "Modifier mes informations", "/pages/auth/editAccount.html"),
>>>>>>> Stashed changes
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia Zoo";
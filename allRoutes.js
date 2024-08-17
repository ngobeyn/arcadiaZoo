import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/signup", "Création Utilisateur", "/pages/auth/signup.html", ["ADMINISTRATEUR"], "js/auth/signup.js"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "js/auth/signin.js"),
    new Route("/avis", "Les Avis", "/pages/avis.html", ["disconnected"], "/js/avis.js")
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia Zoo";


/* 
[] -> Tout le monde peut y accéder
["disconnected"] -> Réserver aux utilisateurs non-connecté
["EMPLOYE"] -> Réserver aux utilisateurs avec le rôle employé
["VETERINAIRE"] -> Réserver aux utilisateurs avec le rôle vétérinaire
["ADMINISTRATEUR"] -> Réserver aux utilisateurs avec le rôle admin
["ADMINISTRATEUR", "VETERINAIRE", "EMPLOYE"] -> Réserver aux utilisateurs avec le rôle admin ou veterinaire ou employé
*/
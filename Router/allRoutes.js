import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "js/auth/signin.js"),
    new Route("/account-adm", "Mon compte", "/pages/auth/account-adm.html", ["admin"], "/js/auth/account.js"),
    new Route("/account-empl", "Mon compte", "/pages/auth/account-empl.html", ["employe"]),
    new Route("/account-vet", "Mon compte", "/pages/auth/account-vet.html", ["veterinaire"]),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html", ["admin", "veterinaire", "employe"]),
    new Route("/editAccount", "Modifier mes informations", "/pages/auth/editAccount.html", ["admin", "veterinaire", "employe"]),
    new Route("/signup", "Création d'un utilsateur", "/pages/auth/signup.html", "/js/auth/signup.js", ["admin"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia Zoo";


/* 
[] -> Tout le monde peut y accéder
["disconnected"] -> Réserver aux utilisateurs non-connecté
["employe"] -> Réserver aux utilisateurs avec le rôle employé
["veterinaire"] -> Réserver aux utilisateurs avec le rôle vétérinaire
["admin"] -> Réserver aux utilisateurs avec le rôle admin
["admin", "veterinaire", "employe"] -> Réserver aux utilisateurs avec le rôle admin ou veterinaire ou employé
*/
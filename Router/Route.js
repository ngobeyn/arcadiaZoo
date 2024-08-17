export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/* 
[] -> Tout le monde peut y accéder
["disconnected"] -> Réserver aux utilisateurs non-connecté
["EMPLOYE"] -> Réserver aux utilisateurs avec le rôle employé
["VETERINAIRE"] -> Réserver aux utilisateurs avec le rôle vétérinaire
["ADMINISTRATEUR"] -> Réserver aux utilisateurs avec le rôle admin
["ADMINISTRATEUR", "VETERINAIRE", "EMPLOYE"] -> Réserver aux utilisateurs avec le rôle admin ou veterinaire ou employé
*/
# Test technique pour Appartoo
L'objectif est de créer un mini carnet d'adresse pour "Pangolin" sur Express.js 
(sous forme d'API) avec un front sur angular &  DB Mongo de préférence. 

(Inscription/Connexion/Déconnexion) du "Pangolin" par login/mot de passe 
(Afficher/Modifier) son rôle (Guerrier, Alchimiste, Sorcier, Espions, Enchanteur) 
(Ajouter/Supprimer) en amis un autre "Pangolin" à partir d'une liste des autres Pangolins inscrits.

## Langages informatiques : Nodes.js / Angular / MongoDB
### Pré-requis : Node.js, NPM, Angular, MongoDB
### Installation
***
```
$ clonez le dépôt :
$ git clone https://github.com/Lattana-sck/test_appartoo.git test_technique
$ Créer une DB sur mongoAtlas, récupérer la 'connection string' pour l'insérer dans la variable MONGO_URL du fichier .env 
$ cd test_technique
$ cd api
$ npm install
$ npm start
$ cd ..
$ cd front
$ npm install
$ ng serve
```

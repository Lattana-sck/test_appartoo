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
## Créer une base de donnée sur MongoAtlas
![Capture d'écran_20221021_190238](https://user-images.githubusercontent.com/74185631/197488097-d75b74cd-bae5-450a-ba8d-640ee7b6b16a.png)
## Cliquer sur "Connect your application"
![Capture d'écran_20221021_190343](https://user-images.githubusercontent.com/74185631/197488256-bfd6ded3-8861-4b67-be51-cb8dc26a4880.png)
## Faire une copier-coller de la string connection
![Capture d'écran_20221021_190412](https://user-images.githubusercontent.com/74185631/197488398-6cb460f8-d045-41f5-92aa-7f187d51d0fe.png)
## Un fichier .env.exemple est a disposition, faites une copie de celui-ci en le renommant .env et remplir toutes les variables.
![Capture d'écran_20221024_110745](https://user-images.githubusercontent.com/74185631/197490552-2188864d-cd3e-4de8-af08-75865693f335.png)
## Page d'inscription
![Capture d'écran_20221024_104234](https://user-images.githubusercontent.com/74185631/197489688-4abe3390-7615-4514-9ae5-b8f18687272d.png)
## Page "Profile" : Consulter votre profile, Votre avatar (qui change selon votre rôle), Modifier/Supprimer votre profile.
![Capture d'écran_20221024_104405](https://user-images.githubusercontent.com/74185631/197489925-0f2d6edb-82f4-475f-ba5b-dee77f75b8b9.png)
## Page "Amis": Consulter la liste des users inscrits, vos amis, ajouter/supprimer des amis.
![Capture d'écran_20221024_104906](https://user-images.githubusercontent.com/74185631/197490211-3b7aed17-a45d-4773-9558-18078d62cf68.png)










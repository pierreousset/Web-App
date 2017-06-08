#!/bin/bash

if [ "$USER" != "root" ]; then
	echo "Veuillez utiliser le script avec sudo"
	exit 1
fi

echo "Démarrage de la procédure"
echo "Configuration mysql :"
read -p "ip = " ip
read -p "port = " port
read -p "Nom de la base = " base
read -p "Utilisateur =" user
read -p "Mot de passe =" pass

echo "const mysql = require('mysql');

var connection = mysql.createConnection({
	host: '$ip',
	port: '$port',
	user: '$user',
	password: '$pass',
	database: '$base'
});


exports.connection = connection;
" > controlleur/mysql.js

echo "Chauffage de l'eau"
apt-get install -y sl $1>/dev/null
echo "Eau chaude"
/usr/games/sl -F
echo "Insertion du café"
node controlleur/create_mysql.js 1>/dev/null
echo "Début du mélange"
npm install 1>/dev/null 2>/dev/null 3>/dev/null
chmod +x start.sh
echo "Votre café est presque prêt." 
echo "Lancez start.sh pour terminer la préparation de votre café."
exit 0
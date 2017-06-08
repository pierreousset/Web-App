#!/bin/bash

if [ "$USER" != "root" ]; then
	echo "Veuillez utiliser le script avec sudo"
	exit 1;
fi

node bin/www
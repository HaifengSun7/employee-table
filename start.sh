#!/bin/sh

cd api
npm start &

# start react
cd ../client
npm start &
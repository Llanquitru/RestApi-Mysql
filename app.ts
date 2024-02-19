import dotenv from 'dotenv';
import Server from './models/server';

//aqui corro el programa en typescript tengo que correrlo en el dist/app.js


//el dote env sirve para poner wea delicadas como clavez y esas cosas
dotenv.config();

const server = new Server

server.listen();
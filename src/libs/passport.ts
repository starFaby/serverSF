/*
import { Request, Response, NextFunction, response } from "express";
import passport from 'passport';
import passportLocal from 'passport-local';
import jwt from 'jsonwebtoken';
import { Authentication } from '../models/Authentication';
import pool from '../database';
import helpers from './helpers';
passport.use('local.signin', new passportLocal.Strategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const row = (await pool).query('SElECT * FROM users Where email = ?', [email]);
    // para poder acceder a los elementos
    const newrow = (await row);
    if (newrow[0] !== undefined) {
        const user = newrow[0];
        const validPassword = await helpers.matchPassword(password, user.password);
        // console.log('============> ', validPassword);
        if (validPassword) {
            const payload = { subject: user.iduser}
            const token = jwt.sign(payload, 'secret');
            console.log('=====> sign in token', token)
            done(null, user, req.flash('open', 'Welcome ' + user.email));
        } else {
            done(null, false, req.flash('message', 'Password incorrecto'));
        }
    } else {
        return done(null, false, req.flash('nouser', 'No registrado'))
    }
}));
passport.use('local.signup', new passportLocal.Strategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const { cedula, nombre, apellido } = req.body;
    const newAuthentication: Authentication = {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
    };
    newAuthentication.password = await helpers.encriptPassword(password);
    const result = (await pool).query('INSERT INTO users SET ?', [newAuthentication]);
    const newResult = (await result)
    newAuthentication.iduser = newResult.insertId;
    const payload = { subject: newResult.insertId }
    const token = jwt.sign(payload, 'secret');
    newAuthentication.token = token;
    // console.log('sign in token ====> ', token);
  /*  (req: Request, res: Response, next: NextFunction) => {
        res.status(200).send({ token });
        next();
    }


    return done(null, newAuthentication);
}));

passport.serializeUser(async (user, done) => {
    const newId = JSON.parse(JSON.stringify(user));
    const id = newId.iduser;
    console.log(id);
    done(null, id);
});

passport.deserializeUser(async (id, done) => {
    const row = (await pool).query('SELECT * FROM users Where iduser = ?', [id]);
    const newrow = (await row);
    console.log(newrow);
    done(null, newrow[0]);
});
*/

// 03:23:42
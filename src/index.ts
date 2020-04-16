import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routerIndex from './router/routerIndex';
import routerGirl from './router/routerGirl';
import routerAuthentication from './router/routerAuthentication';
import routherAuthIn from './router/routherAuthIn';
import routerLogout from './router/routerLogout';
import session from 'express-session';
import passport from 'passport';
import flash from 'connect-flash';
import MySQLStore from 'express-mysql-session';
import './libs/passport';
import './libs/dotenv';
import './keys';
import './Middlewares/toke';
class Server {
    public app: Application;
    constructor() {
        // Intializations
        this.app = express();
        this.config();
        this.routes();

    }
    config(): void {
        // Settings
        this.app.set('port', process.env.PORT || 3000);
        // Middlewares
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
        
      /*  this.app.use(session({
            secret: 'eurekakits',
         //   resave: false,
         //   saveUninitialized: false,
         //   cookie: { secure: true },
         //   store: new MySQLStore(keys.database)
        }));

/*        this.app.use(passport.initialize());
        this.app.use(passport.session());*/




        // Global variables
    /*    this.app.use(flash());
        this.app.use((req, res, next) => {
            this.app.locals.open = req.flash('open');
            this.app.locals.message = req.flash('message');
            this.app.locals.nouser = req.flash('nouser');
            this.app.locals.user = req.user;
            next();
        });*/
    }
    routes() {
        this.app.use(routerIndex);
        this.app.use('/api/girl', routerGirl);
        this.app.use('/api/signup', routerAuthentication);
        this.app.use('/api/signin', routherAuthIn);
       // this.app.use('/api/logout', routerLogout);
    }
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('server online ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
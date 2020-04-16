"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const routerIndex_1 = __importDefault(require("./router/routerIndex"));
const routerGirl_1 = __importDefault(require("./router/routerGirl"));
const routerAuthentication_1 = __importDefault(require("./router/routerAuthentication"));
const routherAuthIn_1 = __importDefault(require("./router/routherAuthIn"));
require("./libs/passport");
require("./libs/dotenv");
require("./keys");
require("./Middlewares/toke");
class Server {
    constructor() {
        // Intializations
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        // Settings
        this.app.set('port', process.env.PORT || 3000);
        // Middlewares
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.json());
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
        this.app.use(routerIndex_1.default);
        this.app.use('/api/girl', routerGirl_1.default);
        this.app.use('/api/signup', routerAuthentication_1.default);
        this.app.use('/api/signin', routherAuthIn_1.default);
        // this.app.use('/api/logout', routerLogout);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server online ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();

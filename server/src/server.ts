import { PlayerApi } from './api/playerApi';
import * as bodyParser from 'body-parser';
import * as express from "express";
import * as morgan from "morgan";
import * as path from "path";
import errorHandler = require("errorhandler");
import mongoose = require("mongoose");
import * as cors from "cors";
import { UserAPI } from './api/userApi';

 

/**
* The server.
*
* @class Server
*/

export class Server {

    /**
    * The express application.
    * @type {Application}
    */

    public app: express.Application; 

    /**
    * Bootstrap the application.
    * @static
    */

    public static bootstrap(): Server {
        return new Server();
    }

 

    /**
    * @constructor
    */

    constructor() {

        //create expressjs application
        this.app = express();

        //configure application
        this.config(); 

        //add api
        this.api();
    }

    /**
    * Create REST API routes
    *
    * @class Server
    */
    public api() {

        let router: express.Router;
        router = express.Router();
        
        //use cors middleware
        router.use(cors());
        
        //add the routes
        UserAPI.create(router);
        PlayerApi.create(router);
        
        //call the server, expose server to use api 
        this.app.use(router);

    }

 

    /**
    * Configure application
    *
    * @class Server
    */

    public config() {

        // morgan middleware to log HTTP requests
        this.app.use(morgan("dev")); 

        //use json form parser middlware
        this.app.use(bodyParser.json()); 

        //use query string parser middlware
        this.app.use(bodyParser.urlencoded({
            extended: true
        })); 

        // connect to mongoose

        mongoose.connect("mongodb://localhost:27017/fantasy", { useNewUrlParser: true });
        mongoose.connection.on("error", error => {
            console.error(error);
        });

        //catch 404 and forward to error handler
        this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        err.status = 404;
        next(err);
    }); 

    //error handling
    this.app.use(errorHandler());
    }
}
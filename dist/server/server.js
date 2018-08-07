"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var playerApi_1 = require("./api/playerApi");
var bodyParser = require("body-parser");
var express = require("express");
var morgan = require("morgan");
var errorHandler = require("errorhandler");
var mongoose = require("mongoose");
var cors = require("cors");
var userApi_1 = require("./api/userApi");
/**
* The server.
*
* @class Server
*/
var Server = /** @class */ (function () {
    /**
    * @constructor
    */
    function Server() {
        //create expressjs application
        this.app = express();
        //configure application
        this.config();
        //add api
        this.api();
    }
    /**
    * Bootstrap the application.
    * @static
    */
    Server.bootstrap = function () {
        return new Server();
    };
    /**
    * Create REST API routes
    *
    * @class Server
    */
    Server.prototype.api = function () {
        var router;
        router = express.Router();
        //use cors middleware
        router.use(cors());
        //add the routes
        userApi_1.UserAPI.create(router);
        playerApi_1.PlayerApi.create(router);
        //call the server, expose server to use api 
        this.app.use(router);
    };
    /**
    * Configure application
    *
    * @class Server
    */
    Server.prototype.config = function () {
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
        mongoose.connection.on("error", function (error) {
            console.error(error);
        });
        //catch 404 and forward to error handler
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        //error handling
        this.app.use(errorHandler());
    };
    return Server;
}());
exports.Server = Server;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUE0QztBQUM1Qyx3Q0FBMEM7QUFDMUMsaUNBQW1DO0FBQ25DLCtCQUFpQztBQUVqQywyQ0FBOEM7QUFDOUMsbUNBQXNDO0FBQ3RDLDJCQUE2QjtBQUM3Qix5Q0FBd0M7QUFJeEM7Ozs7RUFJRTtBQUVGO0lBb0JJOztNQUVFO0lBRUY7UUFFSSw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUVyQix1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsU0FBUztRQUNULElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7SUF6QkQ7OztNQUdFO0lBRVksZ0JBQVMsR0FBdkI7UUFDSSxPQUFPLElBQUksTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQW9CRDs7OztNQUlFO0lBQ0ssb0JBQUcsR0FBVjtRQUVJLElBQUksTUFBc0IsQ0FBQztRQUMzQixNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRTFCLHFCQUFxQjtRQUNyQixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFbkIsZ0JBQWdCO1FBQ2hCLGlCQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLHFCQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpCLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUV6QixDQUFDO0lBSUQ7Ozs7TUFJRTtJQUVLLHVCQUFNLEdBQWI7UUFFSSx5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFNUIsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRWhDLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1lBQy9CLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBRUosc0JBQXNCO1FBRXRCLFFBQVEsQ0FBQyxPQUFPLENBQUMsbUNBQW1DLEVBQUUsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNqRixRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQSxLQUFLO1lBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFSCx3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBUyxHQUFRLEVBQUUsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO1lBQ3ZHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQS9GQSxBQStGQyxJQUFBO0FBL0ZZLHdCQUFNIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllckFwaSB9IGZyb20gJy4vYXBpL3BsYXllckFwaSc7XHJcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCAqIGFzIG1vcmdhbiBmcm9tIFwibW9yZ2FuXCI7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGVycm9ySGFuZGxlciA9IHJlcXVpcmUoXCJlcnJvcmhhbmRsZXJcIik7XHJcbmltcG9ydCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcclxuaW1wb3J0ICogYXMgY29ycyBmcm9tIFwiY29yc1wiO1xyXG5pbXBvcnQgeyBVc2VyQVBJIH0gZnJvbSAnLi9hcGkvdXNlckFwaSc7XHJcblxyXG4gXHJcblxyXG4vKipcclxuKiBUaGUgc2VydmVyLlxyXG4qXHJcbiogQGNsYXNzIFNlcnZlclxyXG4qL1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlcnZlciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFRoZSBleHByZXNzIGFwcGxpY2F0aW9uLlxyXG4gICAgKiBAdHlwZSB7QXBwbGljYXRpb259XHJcbiAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBhcHA6IGV4cHJlc3MuQXBwbGljYXRpb247IFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBCb290c3RyYXAgdGhlIGFwcGxpY2F0aW9uLlxyXG4gICAgKiBAc3RhdGljXHJcbiAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYm9vdHN0cmFwKCk6IFNlcnZlciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTZXJ2ZXIoKTtcclxuICAgIH1cclxuXHJcbiBcclxuXHJcbiAgICAvKipcclxuICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAqL1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICAvL2NyZWF0ZSBleHByZXNzanMgYXBwbGljYXRpb25cclxuICAgICAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbiAgICAgICAgLy9jb25maWd1cmUgYXBwbGljYXRpb25cclxuICAgICAgICB0aGlzLmNvbmZpZygpOyBcclxuXHJcbiAgICAgICAgLy9hZGQgYXBpXHJcbiAgICAgICAgdGhpcy5hcGkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQ3JlYXRlIFJFU1QgQVBJIHJvdXRlc1xyXG4gICAgKlxyXG4gICAgKiBAY2xhc3MgU2VydmVyXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGFwaSgpIHtcclxuXHJcbiAgICAgICAgbGV0IHJvdXRlcjogZXhwcmVzcy5Sb3V0ZXI7XHJcbiAgICAgICAgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3VzZSBjb3JzIG1pZGRsZXdhcmVcclxuICAgICAgICByb3V0ZXIudXNlKGNvcnMoKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9hZGQgdGhlIHJvdXRlc1xyXG4gICAgICAgIFVzZXJBUEkuY3JlYXRlKHJvdXRlcik7XHJcbiAgICAgICAgUGxheWVyQXBpLmNyZWF0ZShyb3V0ZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY2FsbCB0aGUgc2VydmVyLCBleHBvc2Ugc2VydmVyIHRvIHVzZSBhcGkgXHJcbiAgICAgICAgdGhpcy5hcHAudXNlKHJvdXRlcik7XHJcblxyXG4gICAgfVxyXG5cclxuIFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBDb25maWd1cmUgYXBwbGljYXRpb25cclxuICAgICpcclxuICAgICogQGNsYXNzIFNlcnZlclxyXG4gICAgKi9cclxuXHJcbiAgICBwdWJsaWMgY29uZmlnKCkge1xyXG5cclxuICAgICAgICAvLyBtb3JnYW4gbWlkZGxld2FyZSB0byBsb2cgSFRUUCByZXF1ZXN0c1xyXG4gICAgICAgIHRoaXMuYXBwLnVzZShtb3JnYW4oXCJkZXZcIikpOyBcclxuXHJcbiAgICAgICAgLy91c2UganNvbiBmb3JtIHBhcnNlciBtaWRkbHdhcmVcclxuICAgICAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpOyBcclxuXHJcbiAgICAgICAgLy91c2UgcXVlcnkgc3RyaW5nIHBhcnNlciBtaWRkbHdhcmVcclxuICAgICAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtcclxuICAgICAgICAgICAgZXh0ZW5kZWQ6IHRydWVcclxuICAgICAgICB9KSk7IFxyXG5cclxuICAgICAgICAvLyBjb25uZWN0IHRvIG1vbmdvb3NlXHJcblxyXG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3QoXCJtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2ZhbnRhc3lcIiwgeyB1c2VOZXdVcmxQYXJzZXI6IHRydWUgfSk7XHJcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdGlvbi5vbihcImVycm9yXCIsIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vY2F0Y2ggNDA0IGFuZCBmb3J3YXJkIHRvIGVycm9yIGhhbmRsZXJcclxuICAgICAgICB0aGlzLmFwcC51c2UoZnVuY3Rpb24oZXJyOiBhbnksIHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgZXJyLnN0YXR1cyA9IDQwNDtcclxuICAgICAgICBuZXh0KGVycik7XHJcbiAgICB9KTsgXHJcblxyXG4gICAgLy9lcnJvciBoYW5kbGluZ1xyXG4gICAgdGhpcy5hcHAudXNlKGVycm9ySGFuZGxlcigpKTtcclxuICAgIH1cclxufSJdfQ==

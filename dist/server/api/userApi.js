"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserModel_1 = require("../models/UserModel");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromPromise");
/**
* @class UserAPI
*/
var UserAPI = /** @class */ (function () {
    function UserAPI() {
    }
    /**
    * Create the API
    * @static
    */
    UserAPI.create = function (router) {
        router.post('/api/User/', function (req, res, next) {
            new UserAPI().createNewUser(req, res, next);
        });
        router.get('/api/User/', function (req, res, next) {
            new UserAPI().testMethod(req, res, next);
        });
    };
    /**
    * Creates a New user Document in the Users Collection
    *
    * @param req { Request } request
    * @param res { Response } response
    * @param next { NextFunction } next
    *
    * @return void
    */
    UserAPI.prototype.createNewUser = function (req, res, next) {
        var user = new UserModel_1.User({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
        });
        //generate necessary constants for error checking and instance creation
        var error = null;
        //check for missing data. Send 400 - malformed request - if field is missing.
        if (!req.body.email || !req.body.password) {
            if (!req.body.email && !req.body.password)
                error = 'No email or password provided';
            else if (!req.body.email && req.body.password)
                error = 'No email address provided';
            else
                error = 'No password provided';
            res.status(400).json({
                Title: "Malformed Request",
                Error: error
            });
        }
        //create a new user
        console.log('[Saving] ...');
        //create observables
        var userObserv = Observable_1.Observable.fromPromise(user.save());
        //generate response / handle errors.
        userObserv.subscribe(function (user) { res.status(200).send(user.toObject()); }, function (error) {
            res.status(404).json({ Title: "Item Not Found", Error: error });
        }, function () { console.log('[Saved] Created new User'); });
    };
    UserAPI.prototype.testMethod = function (req, res, next) {
        res.send("test gets called");
        next();
        return;
    };
    return UserAPI;
}());
exports.UserAPI = UserAPI;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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a0JBQWtCLENBQUMsQ0FBQztRQUM3QixJQUFJLEVBQUUsQ0FBQztRQUNQLE9BQU87SUFDUixDQUFDO0lBQ0YsY0FBQztBQUFELENBbkVBLEFBbUVDLElBQUE7QUFuRVksMEJBQU8iLCJmaWxlIjoiYXBpL3VzZXJBcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVXNlclNjaGVtYSB9IGZyb20gJy4vLi4vbW9kZWxzL3VzZXJNb2RlbCc7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24sIFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tUHJvbWlzZVwiO1xyXG4vKipcclxuKiBAY2xhc3MgVXNlckFQSVxyXG4qL1xyXG5leHBvcnQgY2xhc3MgVXNlckFQSSB7XHJcblx0LyoqXHJcblx0KiBDcmVhdGUgdGhlIEFQSVxyXG5cdCogQHN0YXRpY1xyXG5cdCovXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGUocm91dGVyIDogUm91dGVyKSB7XHJcblx0XHRyb3V0ZXIucG9zdCgnL2FwaS9Vc2VyLycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQgOiBOZXh0RnVuY3Rpb24pID0+IHtcclxuXHRcdFx0bmV3IFVzZXJBUEkoKS5jcmVhdGVOZXdVc2VyKHJlcSwgcmVzLCBuZXh0KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJvdXRlci5nZXQoJy9hcGkvVXNlci8nLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0IDogTmV4dEZ1bmN0aW9uKSA9PiB7XHJcblx0XHRcdG5ldyBVc2VyQVBJKCkudGVzdE1ldGhvZChyZXEsIHJlcywgbmV4dCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0LyoqXHJcblx0KiBDcmVhdGVzIGEgTmV3IHVzZXIgRG9jdW1lbnQgaW4gdGhlIFVzZXJzIENvbGxlY3Rpb25cclxuXHQqXHJcblx0KiBAcGFyYW0gcmVxIHsgUmVxdWVzdCB9IHJlcXVlc3RcclxuXHQqIEBwYXJhbSByZXMgeyBSZXNwb25zZSB9IHJlc3BvbnNlXHJcblx0KiBAcGFyYW0gbmV4dCB7IE5leHRGdW5jdGlvbiB9IG5leHRcclxuXHQqXHJcblx0KiBAcmV0dXJuIHZvaWRcclxuXHQqL1xyXG5cdHByaXZhdGUgY3JlYXRlTmV3VXNlciAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcclxuXHRcdGNvbnN0IHVzZXIgID0gbmV3IFVzZXIoe1xyXG5cdFx0XHRlbWFpbDogcmVxLmJvZHkuZW1haWwsXHJcblx0XHRcdHBhc3N3b3JkOiByZXEuYm9keS5wYXNzd29yZCxcclxuXHRcdFx0Zmlyc3ROYW1lOiByZXEuYm9keS5maXJzdE5hbWUsXHRcdFxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdC8vZ2VuZXJhdGUgbmVjZXNzYXJ5IGNvbnN0YW50cyBmb3IgZXJyb3IgY2hlY2tpbmcgYW5kIGluc3RhbmNlIGNyZWF0aW9uXHJcbiAgICAgICBcdFx0IGxldCBlcnJvciA9IG51bGw7XHJcblxyXG4gICAgICAgXHRcdCAvL2NoZWNrIGZvciBtaXNzaW5nIGRhdGEuIFNlbmQgNDAwIC0gbWFsZm9ybWVkIHJlcXVlc3QgLSBpZiBmaWVsZCBpcyBtaXNzaW5nLlxyXG4gICAgICAgIFx0XHRpZighcmVxLmJvZHkuZW1haWwgfHwgIXJlcS5ib2R5LnBhc3N3b3JkKXtcclxuXHJcbiAgICAgICAgICAgIFx0XHRpZighcmVxLmJvZHkuZW1haWwgJiYgIXJlcS5ib2R5LnBhc3N3b3JkKSBlcnJvciA9ICdObyBlbWFpbCBvciBwYXNzd29yZCBwcm92aWRlZCc7XHJcbiAgICAgICAgICAgIFx0XHRlbHNlIGlmKCFyZXEuYm9keS5lbWFpbCAmJiByZXEuYm9keS5wYXNzd29yZCkgZXJyb3IgPSAnTm8gZW1haWwgYWRkcmVzcyBwcm92aWRlZCc7XHJcbiAgICAgICAgICAgIFx0XHRlbHNlIGVycm9yID0gJ05vIHBhc3N3b3JkIHByb3ZpZGVkJztcclxuXHJcbiAgICAgICAgICAgIFx0XHRyZXMuc3RhdHVzKDQwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICBcdFx0VGl0bGU6IFwiTWFsZm9ybWVkIFJlcXVlc3RcIixcclxuICAgICAgICAgICAgICAgIFx0XHRFcnJvcjogZXJyb3JcclxuICAgICAgICAgICAgXHRcdH0pO1xyXG4gICAgICAgIFx0fVxyXG5cclxuICAgICAgICBcdC8vY3JlYXRlIGEgbmV3IHVzZXJcclxuICAgICAgIFx0Y29uc29sZS5sb2coJ1tTYXZpbmddIC4uLicpO1xyXG5cclxuICAgICAgICBcdC8vY3JlYXRlIG9ic2VydmFibGVzXHJcbiAgICAgICAgXHRjb25zdCB1c2VyT2JzZXJ2ID0gT2JzZXJ2YWJsZS5mcm9tUHJvbWlzZSh1c2VyLnNhdmUoKSk7XHJcblxyXG4gICAgICAgIFx0Ly9nZW5lcmF0ZSByZXNwb25zZSAvIGhhbmRsZSBlcnJvcnMuXHJcbiAgICAgICAgXHR1c2VyT2JzZXJ2LnN1YnNjcmliZShcclxuICAgICAgICAgICAgXHRcdCh1c2VyOiBJVXNlclNjaGVtYSkgPT4geyByZXMuc3RhdHVzKDIwMCkuc2VuZCh1c2VyLnRvT2JqZWN0KCkpOyB9LFxyXG4gICAgICAgICAgICBcdFx0KGVycm9yIDogRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIFx0cmVzLnN0YXR1cyg0MDQpLmpzb24oeyBUaXRsZSA6IFwiSXRlbSBOb3QgRm91bmRcIiwgRXJyb3I6IGVycm9yfSk7IH0sXHJcbiAgICAgICAgICAgIFx0XHQoKSA9PiB7Y29uc29sZS5sb2coJ1tTYXZlZF0gQ3JlYXRlZCBuZXcgVXNlcicpfVxyXG4gICAgICAgICk7XHJcblx0fVx0XHJcblx0cHJpdmF0ZSB0ZXN0TWV0aG9kIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xyXG5cdFx0cmVzLnNlbmQoXCJ0ZXN0IGdldHMgY2FsbGVkXCIpO1xyXG5cdFx0bmV4dCgpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxufSJdfQ==

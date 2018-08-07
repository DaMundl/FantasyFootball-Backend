import { IUserSchema } from './../models/userModel';
import { Request, Response, NextFunction, Router } from 'express';
import {User} from '../models/UserModel';
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/fromPromise";
/**
* @class UserAPI
*/
export class UserAPI {
	/**
	* Create the API
	* @static
	*/
	public static create(router : Router) {
		router.post('/api/User/', (req: Request, res: Response, next : NextFunction) => {
			new UserAPI().createNewUser(req, res, next);
		});

		router.get('/api/User/', (req: Request, res: Response, next : NextFunction) => {
			new UserAPI().testMethod(req, res, next);
		});
	}
	
	
	/**
	* Creates a New user Document in the Users Collection
	*
	* @param req { Request } request
	* @param res { Response } response
	* @param next { NextFunction } next
	*
	* @return void
	*/
	private createNewUser (req: Request, res: Response, next: NextFunction) {
		const user  = new User({
			email: req.body.email,
			password: req.body.password,
			firstName: req.body.firstName,		
		});
		
		//generate necessary constants for error checking and instance creation
       		 let error = null;

       		 //check for missing data. Send 400 - malformed request - if field is missing.
        		if(!req.body.email || !req.body.password){

            		if(!req.body.email && !req.body.password) error = 'No email or password provided';
            		else if(!req.body.email && req.body.password) error = 'No email address provided';
            		else error = 'No password provided';

            		res.status(400).json({
                		Title: "Malformed Request",
                		Error: error
            		});
        	}

        	//create a new user
       	console.log('[Saving] ...');

        	//create observables
        	const userObserv = Observable.fromPromise(user.save());

        	//generate response / handle errors.
        	userObserv.subscribe(
            		(user: IUserSchema) => { res.status(200).send(user.toObject()); },
            		(error : Error) => {
                	res.status(404).json({ Title : "Item Not Found", Error: error}); },
            		() => {console.log('[Saved] Created new User')}
        );
	}	
	private testMethod (req: Request, res: Response, next: NextFunction) {
		res.send("test gets called");
		next();
		return;
	}
}
import { Request, Response, NextFunction, Router } from 'express';
import Player from '../models/playerModel';
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/fromPromise";

export class PlayerApi {

    public static create(router : Router) {
		router.post('/api/Player/', (req: Request, res: Response, next : NextFunction) => {
			new PlayerApi().createNewPlayer(req, res, next);
		});

		router.get('/api/Player/', (req: Request, res: Response, next : NextFunction) => {
			new PlayerApi().getPlayerList(req, res, next);
        });
        
        router.delete('/api/Player/:id', (req: Request, res: Response, next : NextFunction) => {
            new PlayerApi().deletePlayer(req, res, next);
        });

        router.put('api/Player/:id',(req: Request, res: Response, next : NextFunction) => {
            new PlayerApi().findPlayerById(req, res, next);
        });
	}
    
    private createNewPlayer (req: Request, res: Response, next: NextFunction) {
		const player  = new Player({
			name: req.body.name,
			position: req.body.position,
			avgPoints: req.body.avgPoints,		
        });
        
        player.save(function(err,player){

            if(err) {
             return	res.send(err);
            }
    
            return res.json(player);
        })
    }
    private getPlayerList (req: Request, res: Response, next: NextFunction) {

        Player.find(function(err,data){

            if(err) {
             return	res.send(err);
            }
    
            return res.send(data);
        });
    }

    private findPlayerById (req: Request, res: Response, next: NextFunction) {

        Player.findById(req.params.id,function(err: any, player){

            if(err) {
                return res.send(err);
            }
            if(!player)
            {
                return res.send("No player found!");
            }
    
            player.name = req.body.name;
            player.position = req.body.position;
            player.avgPoints = req.body.avgPoints;
    
            player.save(function(err,player){
                if(err) {
                    return res.send(err);
                }
                return res.json(player);
            })
        });
    }

    private deletePlayer (req: Request, res: Response, next: NextFunction) {

        Player.remove({
            _id: req.params.id }, function (err){
                if(err) {
                    return res.send(err);
                }
                return res.json("deleted :()");
            }
        )
    }
}
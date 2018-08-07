import * as mongoose from 'mongoose';
export const Schema = mongoose.Schema;

export interface IPlayerSchema extends mongoose.Document{
    name: String,
    position: String,
    avgPoints: Number
}
export const playerSchema = new mongoose.Schema({
    name: {type: String},
    position: {type: String},
    avgPoints: {type: Number}
});

 export const  Player = mongoose.model<IPlayerSchema>('Player',playerSchema);   
 export default Player;

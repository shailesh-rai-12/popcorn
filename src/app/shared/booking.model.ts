import { Movie } from "./movie.model";

export class Booking{
    constructor(public userId:string,public movieId:Movie,public date:Date,public time:string,public seats:number){}
}
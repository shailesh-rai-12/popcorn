import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/app/shared/movie.model';
import { MovieService } from 'src/app/shared/movie.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

timings:string[]=["9am-12pm","12pm-3pm","3pm-6pm","6pm-9pm"];
dates:Date[]=[];//[new Date("2018-05-01"),new Date("2018-05-01"),new Date("2018-05-01")]
movieForm!:FormGroup;
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit()
  {
    let movieDates=new FormArray([]),
        movieTimes=new FormArray([]),
        movieName='',
        imageUrl='',
        movieSeats!:number;
        
      
    this.movieForm = new FormGroup({
      'movieName':new FormControl(movieName,Validators.required),
      'imageUrl':new FormControl(imageUrl,Validators.required),
      'pushDate':new FormControl(new Date().toLocaleDateString('en-IN')),
      'movieDates':movieDates,
      'movieTimes':movieTimes,
      'movieSeats':new FormControl(movieSeats,[
        Validators.required, 
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
    })

    this.onPushDate();

    this.timings.forEach(time=>{
      (<FormArray>this.movieForm.get('movieTimes')).push(new FormGroup({
        'time':new FormControl(time)
      }))
    })
  }

  onPushDate(){
    (<FormArray>this.movieForm.get('movieDates')).push(
      new FormGroup({
        'date':new FormControl(this.movieForm.get('pushDate')?.value)
      })
    )

    this.movieForm.get('pushDate')?.reset();

  }

  onRemoveDate(index:number){
   
    if((<FormArray>this.movieForm.get('movieDates')).length > 1){
      (<FormArray>this.movieForm.get('movieDates')).removeAt(index);
    }
   
    
  }

  get controls(){
    return (<FormArray>this.movieForm.get('movieDates')).controls;
  }

  onSubmit(){
     let id:number=Date.now(),
          name:string=this.movieForm.get('movieName')?.value,
          url:string=this.movieForm.get('imageUrl')?.value,
          movieDates:Date[]=this.movieForm.get('movieDates')?.value,
          seats:number=this.movieForm.get('movieSeats')?.value,
          movieTimes:string[]=[];

          (this.movieForm.get('movieTimes')?.value).forEach((element: any) => {
            if(element.time){
              movieTimes.push(element.time)
            } 
          });
            
            
          const movie=new Movie(id,name,url,movieDates,movieTimes,Array(movieTimes.length).fill(seats));
          this.movieService.setMovie(movie);
          console.log(movie);
          
      

     
  }

}

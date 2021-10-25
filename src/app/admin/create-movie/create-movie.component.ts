import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

timings:string[]=["9am-12pm","12pm-3pm","3pm-6pm","6pm-9pm"];
dates:Date[]=[new Date("2018-05-01"),new Date("2018-05-01"),new Date("2018-05-01")]
movieForm!:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit()
  {
    let movieDates=new FormArray([]),
        movieTimes=new FormArray([]),
        movieName='',
        imageUrl='';
        
      
    this.movieForm = new FormGroup({
      'movieName':new FormControl(movieName),
      'imageUrl':new FormControl(imageUrl),
      'pushDate':new FormControl(),
      'movieDates':movieDates,
      'movieTimes':movieTimes
    })

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

  }

  get controls(){
    return (<FormArray>this.movieForm.get('movieDates')).controls;
  }

  onSubmit(){

  }

}

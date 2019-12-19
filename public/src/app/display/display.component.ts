import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpService } from '.././http.service';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { ViewChildren, QueryList } from '@angular/core';
import { InnerDisplayComponent } from '../inner-display/inner-display.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

  export class DisplayComponent implements OnInit{ //afterViewInit
    @ViewChild('canvas', { static: true })
    //@ViewChildren('canv') canvas_childrens: QueryList<HTMLCanvasElement>
    canvas: ElementRef<HTMLCanvasElement>;
    ctx: CanvasRenderingContext2D;
    image: any;
    drawHistory: any; //of the form [[x1,y1], [x2,y2], ...etc]
    errors: any;
    AllTheThings: any;
    displayedImage: any;
    keyword: string;
    constructor(private _httpService: HttpService) { }
  
    ngOnInit() {
      this.ctx = this.canvas.nativeElement.getContext('2d');
      this.image = {type: "image", keyword: "placeholder", image_elements: []}
      this.drawHistory = []; //of the form [[x1,y1], [x2,y2], ...etc]
      this.keyword = '';
      this.displayAllImages();
    }
    
    // ngAfterViewInit(){
    //     //console.log(this.canvas_childrens._results)
    //     this.canvas_childrens.forEach(child => console.log(child));
    //     console.log(this.canvas_childrens.toArray());
    //     this.canvas_childrens.forEach((canvas_iteration:any) => {
    //       this.drawFromHistory(this.AllTheThings.image_elements);
          
    //       console.log("hi");
    //       })
    // }

    setColorHex(element){
      //if(element.color=="black"){
        this.ctx.strokeStyle='#000000';
        this.ctx.fillStyle='#000000';
      //}
      if(element.color=="yellow"){
        this.ctx.strokeStyle="#ffff00";
        this.ctx.fillStyle="#ffff00";
      }
      if(element.color=="blue"){
        this.ctx.strokeStyle="#0099ff";
        this.ctx.fillStyle="#0099ff";
      }
      if(element.color=="red"){
        this.ctx.strokeStyle="#ff0000";
        this.ctx.fillStyle="#ff0000";
      }
      if(element.color=="green"){
        this.ctx.strokeStyle="#00ff00";
        this.ctx.fillStyle="#00ff00"
      }
    }

    drawFromHistory(image_history:any): void {
      this.ctx.clearRect(0, 0, 600, 300);
      var current_element: any; 
      for(var i=0;i<image_history.length; i++){
        current_element = image_history[i];
        this.setColorHex(current_element);
        if(current_element.type == "point"){
          this.ctx.beginPath();
          this.ctx.arc(current_element.point_coordinate[0], current_element.point_coordinate[1], 3, 0, 2 * Math.PI);
          this.ctx.fill();
          this.ctx.stroke();
        }else if(current_element.type == "line"){
          this.ctx.beginPath();
          this.ctx.moveTo(current_element.line_begin[0], current_element.line_begin[1]);
          this.ctx.lineTo(current_element.line_end[0], current_element.line_end[1]);
          this.ctx.stroke();
        }else if(current_element.type == "circle"){
          this.ctx.beginPath();
          this.ctx.arc(current_element.circle_origin[0], current_element.circle_origin[1], current_element.circle_radius, 0, 2 * Math.PI);
          this.ctx.stroke();
        }
      }
    }

    displayAllImages(){
      this.errors = false;
      this._httpService.getImages().subscribe(data => {
        if(data["results"]){
            console.log(data["results"]);
            this.AllTheThings = data["results"];
            
        }else if(data['errors']){
          for(var key in data['errors']){
            this.errors.push(data['errors'][key]['message']);
          }
        }
      })
    }

    displayGroupFromService(){
      if(this.keyword == ""){
        this.displayAllImages();
      }else{
          this._httpService.getImagesByKeyword(this.keyword).subscribe(data => {
          if(data["results"]){
            this.AllTheThings = data["results"];
          }else if(data['errors']){
            for(var key in data['errors']){
              this.errors.push(data['errors'][key]['message']);
            }
          }
        })
      }
    }

    displayOneImage(some_id){
      this._httpService.getImage(some_id).subscribe(data =>{
        if(data["results"]){
          this.displayedImage = data["results"];
          this.drawFromHistory(this.displayedImage.image_elements);
        }else if(data['errors']){
          for(var key in data['errors']){
            this.errors.push(data['errors'][key]['message']);
          }
        }
      })
    }

      deleteImage(id){
        this._httpService.deleteImage(id).subscribe(data => {
          if(data){
            console.log(data);
        }else if(data['errors']){
          for(var key in data['errors']){
            this.errors.push(data['errors'][key]['message']);
          }
        }
        this.displayAllImages();
      })
    }
  }


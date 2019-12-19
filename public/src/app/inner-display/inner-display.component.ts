import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-inner-display',
  templateUrl: './inner-display.component.html',
  styleUrls: ['./inner-display.component.css']
})

export class InnerDisplayComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  image: any;
  drawHistory: any; //of the form [[x1,y1], [x2,y2], ...etc]
  selected: boolean;
  selectedCoor: any; // of the form [x,y]
  mode: string; //type of drawing mode used.
  color: string;
  clientX:any;
  clientY:any;
  constructor(private _httpService: HttpService) { }

  //ctx.fillRect(x, y, width, height);

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.image = {type: "image", keyword: "placeholder", image_elements: []}
    this.clientX = 0;
    this.clientY = 0;
    this.mode = "point"; 
    this.selected = false;
    this.selectedCoor = [];
    this.drawHistory = []; //of the form [[x1,y1], [x2,y2], ...etc]
    //element
    //{}
  }

  distanceFormula(x1, y1, x2, y2): number{
    return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
  }

  displayDrag(ev){
    if (this.selected == true){
        if(this.mode == "circle"){
          this.ctx.clearRect(0, 0, 600, 300);
          this.drawFromHistory();
          var radius = this.distanceFormula(this.selectedCoor[0], this.selectedCoor[1], ev.clientX-10, ev.clientY-81);
          this.ctx.beginPath();
          this.ctx.arc(this.selectedCoor[0], this.selectedCoor[1], radius, 0, 2 * Math.PI);
          this.ctx.stroke();
        }else if(this.mode == "line"){
          this.ctx.clearRect(0, 0, 600, 300);
          this.drawFromHistory();
          this.ctx.beginPath();
          this.ctx.moveTo(this.selectedCoor[0], this.selectedCoor[1]);
          this.ctx.lineTo(ev.clientX-10, ev.clientY-81);
          this.ctx.stroke();
        }else{ //default point
            //do nothing to draw point.
        }
    }
  }

  pointMode(){
    this.selected = false;
    this.mode = "point";
  }

  circleMode(){
    this.selected = false;
    this.mode = "circle";
  }

  lineMode(){
    this.selected = false;
    this.mode = "line";
  }

  drawItem(ev){
    console.log(this.mode);
    if(this.mode == "circle"){
      this.drawCircle(ev);
    }else if(this.mode == "line"){
      this.drawLine(ev);
    }else{ //default point
      this.drawPoint(ev);
    }
  }

  drawPoint(ev):void{
    this.ctx.beginPath();
    this.ctx.fillStyle = 'red';
    this.ctx.arc(ev.clientX-10, ev.clientY-81, 3, 0, 2 * Math.PI); //not sure why we need an offset(-10,-81) but oh well
    this.ctx.stroke();
    this.drawHistory.push(
      {
        type: "point",
        color: "black",
        point_coordinate: [ev.clientX-10, ev.clientY-81]
      });
  }

  drawCircle(ev){
    if(this.selected == true){
      this.selected = false;
      var radius = this.distanceFormula(this.selectedCoor[0], this.selectedCoor[1], ev.clientX-10, ev.clientY-81);
      this.ctx.beginPath();
      this.ctx.arc(this.selectedCoor[0], this.selectedCoor[1], radius, 0, 2 * Math.PI);
      this.ctx.stroke();
      this.drawHistory.push( //circle object
        {
          type:"circle",
          color:"black",
          circle_origin: [this.selectedCoor[0],this.selectedCoor[1]],
          circle_radius: radius
        });
      this.selectedCoor = [];
    }else{
      this.selected = true;
      this.selectedCoor = [ev.clientX-10, ev.clientY-81];
    }
  }

  drawLine(ev){
    if(this.selected == true){
      this.selected = false;
      this.ctx.beginPath();
      this.ctx.moveTo(this.selectedCoor[0], this.selectedCoor[1]);
      this.ctx.lineTo(ev.clientX-10, ev.clientY-81);
      this.ctx.stroke();
      this.drawHistory.push(
        {
          type:"line",
          color:"black",
          line_begin:[this.selectedCoor[0], this.selectedCoor[1]],
          line_end:[ev.clientX-10, ev.clientY-81]
        });
    }else{ 
      this.selected = true;
      this.selectedCoor = [ev.clientX-10, ev.clientY-81];
    }
    this.ctx.beginPath();
  }

  drawFromHistory(): void {
    var current_element:any; 
    for(var i=0;i<this.drawHistory.length; i++){
      current_element = this.drawHistory[i];
      if(current_element.type == "point"){
        this.ctx.fillStyle = current_element.color;
        this.ctx.beginPath();
        this.ctx.arc(current_element.point_coordinate[0], current_element.point_coordinate[1], 3, 0, 2 * Math.PI);
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

  undoLast(){
    this.drawHistory.pop();
    this.ctx.clearRect(0, 0, 600, 300);
    this.drawFromHistory();
  }

  saveImage(){
    this.image = {type: "image", keyword: "placeholder", image_elements: this.drawHistory};
    console.log(this.image);
    this._httpService.postNewImage(this.image).subscribe(data => {
      console.log(data);
    });
  }
}

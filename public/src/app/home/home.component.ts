import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
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
  constructor(private _httpService: HttpService,
    private _router: Router,) { }

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
          this.setColorHex({color:this.color});
          var radius = this.distanceFormula(this.selectedCoor[0], this.selectedCoor[1], ev.clientX-35, ev.clientY);
          this.ctx.beginPath();
          this.ctx.arc(this.selectedCoor[0], this.selectedCoor[1], radius, 0, 2 * Math.PI);
          this.ctx.stroke();
        }else if(this.mode == "line"){
          this.ctx.clearRect(0, 0, 600, 300);
          this.drawFromHistory();
          this.setColorHex({color:this.color});
          this.ctx.beginPath();
          this.ctx.moveTo(this.selectedCoor[0], this.selectedCoor[1]);
          this.ctx.lineTo(ev.clientX-35, ev.clientY);
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
    this.ctx.arc(ev.clientX-35, ev.clientY, 3, 0, 2 * Math.PI);
    this.ctx.stroke();
    this.drawHistory.push(
      {
        type: "point",
        color: this.color,
        point_coordinate: [ev.clientX-35, ev.clientY]
      });
    this.drawFromHistory();
  }

  drawCircle(ev){
    if(this.selected == true){
      this.selected = false;
      var radius = this.distanceFormula(this.selectedCoor[0], this.selectedCoor[1], ev.clientX-35, ev.clientY);
      this.ctx.beginPath();
      this.ctx.arc(this.selectedCoor[0], this.selectedCoor[1], radius, 0, 2 * Math.PI);
      this.ctx.stroke();
      this.drawHistory.push( //circle object
        {
          type:"circle",
          color: this.color,
          circle_origin: [this.selectedCoor[0],this.selectedCoor[1]],
          circle_radius: radius
        });
      this.drawFromHistory();
      this.selectedCoor = [];
    }else{
      this.selected = true;
      this.selectedCoor = [ev.clientX-35, ev.clientY];
    }
  }

  drawLine(ev){
    if(this.selected == true){
      this.selected = false;
      this.ctx.beginPath();
      this.ctx.moveTo(this.selectedCoor[0], this.selectedCoor[1]);
      this.ctx.lineTo(ev.clientX-35, ev.clientY);
      this.ctx.stroke();
      this.drawHistory.push(
        {
          type:"line",
          color:this.color,
          line_begin:[this.selectedCoor[0], this.selectedCoor[1]],
          line_end:[ev.clientX-35, ev.clientY]
        });
        this.drawFromHistory();
    }else{
      this.selected = true;
      this.selectedCoor = [ev.clientX-35, ev.clientY];
    }
    this.ctx.beginPath();
  }

  changeColor(color){
    this.color = color;
  }

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

  drawFromHistory(): void {
    var current_element:any;
    for(var i=0;i<this.drawHistory.length; i++){
      current_element = this.drawHistory[i];
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

  undoLast(){
    this.drawHistory.pop();
    this.ctx.clearRect(0, 0, 600, 300);
    this.drawFromHistory();
  }

  saveImage(){
    this.image.image_elements = this.drawHistory;
    console.log(this.image);
    this._httpService.postNewImage(this.image).subscribe(data => {
      console.log(data);
      this._router.navigate(['/']);
    });
  }
}

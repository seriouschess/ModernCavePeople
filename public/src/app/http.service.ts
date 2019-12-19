import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) {
    this.getImages();
  }

  getImages(){
    return this._http.get('/api');
  }

  getImagesByKeyword(keyword){
    return this._http.get(`/api/get_keyword/${keyword}`);
  }

  getImage(id){
    return this._http.get(`api/${id}`);
  }

  deleteImage(id){
    return this._http.get(`api/remove/${id}`);
  }

  postNewImage(new_Image){
    return this._http.post('/api/new', new_Image);
  }

  updateImage(updated_image){
    return this._http.put(`/api/edit/${updated_image._id}`, updated_image);
  }
}


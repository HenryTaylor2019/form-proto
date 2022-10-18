import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormActions } from '../actions/action.types';

@Injectable({
  providedIn: 'root',
})
export class fileUploadService {
  constructor(private http: HttpClient, private store: Store) {}

  // Returns an observable
  upload(img: any) {
    let imgSrc = img.target.files[0];
    let url;

    const reader = new FileReader();
    reader.readAsDataURL(img.target.files[0]);
    
    reader.onload = (_event) => {
      url = reader.result;
      console.log(reader.result)
      this.addToStore(url)
    }
    // const formData = new FormData();
  }

  addToStore(url: any) {
    this.store.dispatch(FormActions.uploadImage({imgSrc: url}))
  }
}

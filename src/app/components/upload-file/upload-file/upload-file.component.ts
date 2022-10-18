import { Component, OnInit } from '@angular/core';
import { fileUploadService } from 'src/app/store/services/file-upload.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {
  public loading: boolean = false; 
  public file!: File; 
  public currentInput: any;
  public url!: any;

  constructor(private fileUploadService: fileUploadService) {}

  ngOnInit(): void {
  }

  onUpload(file: any) {
    // this.file = file.target.files[0];
    // this.loading = !this.loading;

    // const reader = new FileReader();
    // reader.readAsDataURL(file.target.files[0]);

    // reader.onload = (_event) => {
    //   this.url = reader.result;
    // };

    this.fileUploadService.upload(file)

  }
}

import { Component, OnInit,ViewChild } from '@angular/core';
import { CustomerServiceService } from '../../Services/customer-service.service'
@Component({
  selector: 'app-app-fileupload',
  templateUrl: './app-fileupload.component.html',
  styleUrls: ['./app-fileupload.component.css']
})
export class AppFileuploadComponent implements OnInit {
  errorMessage: string;
    filesToUpload: Array<File>;
    selectedFileNames: string[] = [];
    public isLoadingData: Boolean = false;
    @ViewChild('fileUpload') fileUploadVar: any;
    uploadResult: any;
    res: Array<string>;
  constructor(private customerservice:CustomerServiceService) { 
    this.errorMessage = "";
        this.filesToUpload = [];
        this.selectedFileNames = [];
        this.uploadResult = "";
  }

  ngOnInit() {
  }
  fileChangeEvent(fileInput: any)
  {
      //Clear Uploaded Files result message
      this.uploadResult = "";
      this.filesToUpload = <Array<File>>fileInput.target.files;

      for (let i = 0; i < this.filesToUpload.length; i++)
      {
          this.selectedFileNames.push(this.filesToUpload[i].name);
      }
  }

  cancelUpload()
  {
      this.filesToUpload = [];
      this.fileUploadVar.nativeElement.value = "";
      this.selectedFileNames = [];
      this.uploadResult = "";
      this.errorMessage = "";
  }
  upload()
    {
        if (this.filesToUpload.length == 0)
        {
            alert('Please select at least 1 PDF files to upload!');
        }
        else if (this.filesToUpload.length > 3) {
            alert('Please select a maximum of 3 PDF files to upload!');
        }
        else
        {
            if (this.validatePDFSelectedOnly(this.selectedFileNames))
            {
                this.uploadFiles();
            }
        }
    }

    validatePDFSelectedOnly(filesSelected: string[])
    {
        for (var i = 0; i < filesSelected.length; i++)
        {
            if (filesSelected[i].slice(-3).toUpperCase() != "PDF")
            {
                alert('Please selecte PDF files only!');
                return false;
            }
            else {
                return true;
            }
        }
    }

    uploadFiles()
    {
        this.uploadResult = "";

        if (this.filesToUpload.length > 0)
        {
            this.isLoadingData = true;

            let formData: FormData = new FormData();

            for (var i = 0; i < this.filesToUpload.length; i++)
            {
                formData.append('uploadedFiles', this.filesToUpload[i], this.filesToUpload[i].name);
            }

            let apiUrl = "/api/Upload/UploadFiles";

            this.customerservice.UploadFiles(formData)
                .subscribe
                (
                    data => {
                        this.uploadResult = data;
                        this.errorMessage = "";
                    },
                    err => {
                        console.error(err);
                        this.errorMessage = err;
                        this.isLoadingData = false;
                    },
                    () => {
                        this.isLoadingData = false,
                            this.fileUploadVar.nativeElement.value = "";
                        this.selectedFileNames = [];
                        this.filesToUpload = [];
                    }
                );
        }
    }

}

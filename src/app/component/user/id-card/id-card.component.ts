import { Component, OnInit } from '@angular/core';
import { ViewChild, ViewEncapsulation } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class IdCardComponent implements OnInit {

  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent;

  qrdata: string;
  user: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.getUserDetails(JSON.parse(localStorage.getItem('user'))._id).subscribe((response: any) => {
    //   this.user = response;
    //   this.qrdata = this.user.gmID;
    //   console.log(response)
    // })
    // this.qrScannerComponent.getMediaDevices().then(devices => {
    //   const videoDevices: MediaDeviceInfo[] = [];
    //   for (const device of devices) {
    //     if (device.kind.toString() === 'videoinput') {
    //       videoDevices.push(device);
    //     }
    //   }
    //   if (videoDevices.length > 0) {
    //     let choosenDev;
    //     for (const dev of videoDevices) {
    //       if (dev.label.includes('front')) {
    //         choosenDev = dev;
    //         break;
    //       }
    //     }
    //     if (choosenDev) {
    //       this.qrScannerComponent.chooseCamera.next(choosenDev);
    //     } else {
    //       this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
    //     }
    //   }
    // });

    // this.qrScannerComponent.capturedQr.subscribe(result => {
    //   console.log(result);
    // });
  }

}

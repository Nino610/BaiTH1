import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TH1';
  arrayname = [
    { hoten: 'Nguyen Thi Mai', diemthi: 9 },
    { hoten: 'Hoang Thi Dung', diemthi: 8.3 },
    { hoten: 'Tran Thi Anh', diemthi: 7.5 },
  ];
  arraynumber = [1, 2, -3, -4, -5, 6];
  sortType = 'hoten';
  sortReverse = false;
  s = 0;
  s1 = 0;
  s2 = 0;
  s3 = 0;
  n: any;
  x: any;
  hanhdong() {
    for (let i = 1; i <= this.n; i++) {
      this.s += 1.0 / i;
    }
    // this.s += 1.0 / this.array[1];
  }
  hanhdong1() {
    for (let i = 1; i <= this.n; i++) {
      this.s1 += this.x ** i;
    }
  }
  hanhdong2() {
    let tmp = 1;
    for (let i = 1; i <= this.n; ++i) {
      this.s2 = this.s2 + Math.pow(-1, i) * (Math.pow(this.x, i) / Giaithua(i));
    }
  }
  hanhdong3() {
    for (let i = 0; i <= 5; i++) {
      if (this.arraynumber[i] >= 0) {
        this.s3 += this.arraynumber[i];
      }
    }
  }
}
function Giaithua(a: number) {
  let gt = 1;
  for (let i = 1; i <= a; i++) {
    gt *= i;
  }
  return gt;
}

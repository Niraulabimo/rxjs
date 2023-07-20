import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements OnInit {
  constructor() {}
  DellAvailable() {
    return false;
  }
  HpAvailable() {
    return false;
  }
  dell = {
    brand: 'Dell',
    status: 'excellent',
    performance: 'Toofan',
  };

  hp = {
    brand: 'HP',
    status: 'excellent',
    performance: 'average',
  };

  notAvailable = {
    brand: 'not available',
    status: 'failed',
  };
  promiseVal = {};

  ngOnInit(): void {
    // let buylaptop = promise(function(resolve,reject) {
    //   resolve('promise is resolved')
    // });

    let buylaptop = new Promise((accept, reject) => {
      // accept('promise is confirmed');
      // reject('promise is broked');
      // });

      if (this.DellAvailable()) {
        return setTimeout(() => {
          accept(this.dell);
        }, 3000);
      } else if (this.HpAvailable()) {
        return setTimeout(() => {
          accept(this.hp);
        }, 4000);
      } else {
        return setTimeout(() => {
          reject(this.notAvailable);
        }, 4000);
      }
    });

    buylaptop
      .then((res) => {
        // console.log('success');
        console.log('', res);
        this.promiseVal = 'res';
      })
      .catch((res) => {
        console.log('res=>', res);
        this.promiseVal = res;
      });

    //   myFunction() {
    //     console.log('my function called');
    //   }
  }
}

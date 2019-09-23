import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolve-tester',
  templateUrl: './resolve-tester.component.html',
  styleUrls: ['./resolve-tester.component.scss']
})
export class ResolveTesterComponent implements OnInit {
  resolvedData = [];
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data
      .subscribe((data: any) => {
        this.resolvedData = data.resolvedData;
        console.log(this.resolvedData)
      });
  }

  ngOnInit() {
  }

}

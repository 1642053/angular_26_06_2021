import { Component, OnInit } from '@angular/core';

// Gọi 2 thư viện lấy params
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  name_category:any;

  ngOnInit(): void {
    this.router
    .paramMap
    .subscribe((params:ParamMap)=>{

      this.name_category = params.get('id');

      //console.log( params.get('id') );

    })
  }

}

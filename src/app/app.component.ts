import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  constructor(private _appService: AppService){}

  // Searching
  isLoading: boolean;
  response: any;
  searchString: string = '';
  previousSearch: string;

  // Pagination
  page: number = 1;
  pageLowNum: number;
  pageHighNum: number;
  itemsPerPage: number = 10;
  numArticles: number;

  ngOnInit() {
    this.getArticles();
  }

  getArticles(){
    this.isLoading = true;
    this._appService.searchArticles(this.searchString.split(' '), this.page).subscribe(
      response => {
        this.response = response;
        this.computePaginationNumbers();
        this.isLoading = false;
      }, error => {
          console.log("Error searching articles");
      });
  }

  computePaginationNumbers(){
    this.numArticles = this.response.response.total;
    this.pageLowNum = this.itemsPerPage * (this.page - 1);
    if((this.itemsPerPage * (this.page)) > this.numArticles){
      this.pageHighNum = this.numArticles;
    }else{
      this.pageHighNum = (this.itemsPerPage * this.page);
    }
  }

  filterArticles(){
    this.page = 1;
    if(this.searchString.split(' ').length > 0){
      this.previousSearch = this.searchString;
    }else{
      this.previousSearch = null;
    }
    
    this.getArticles();
  }

  searchKeyPressed(event: any){
    if(event.keyCode == 13){  //13 = enter key
      this.filterArticles();
    }  
  }

  onPageChanged(page: any){
    this.page = page;
    this.getArticles();
  };

  viewArticle(url: string){
    window.open(url);
  }

  multiplePagesPagination(){
    if(this.numArticles > this.itemsPerPage){
      return true;
    }else{
      return false;
    }
  }

}

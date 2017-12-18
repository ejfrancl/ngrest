import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'POST TEST';
  results = '';

  constructor(private http: HttpClient){

  }

   ngOnInit(): void {
   
    const data = "";
    const headers = new HttpHeaders()
    //.set('Access-Control-Allow-Origin', '*');
    //.set('X-Requested-With', 'XMLHttpRequest')
    .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    const req = this.http.post('https://www.deskflow-asp3.com/wk_api/main.php', 
    data, 
     {
      headers: headers
      }
    )
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    ); 


/*     const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      ); */

/*     this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(
      data => {
        console.log("User Login: " + data.login);
        console.log("Bio: " + data.bio);
        console.log("Company: " + data.company);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );
 */  }

}
interface UserResponse {
  login: string;
  bio: string;
  company: string;
}





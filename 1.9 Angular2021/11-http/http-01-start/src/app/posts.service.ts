import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };
    console.log(postData);
    this.http
      .post<{ name: string }>( // define the response data types
        "https://ng-course-5f32f-default-rtdb.firebaseio.com/post.json",
        postData,
        {
            observe: 'response'
        }
      )
      .subscribe(
        (respData) => {
          console.log(respData); // respData.body
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>( // define the response data types
        "https://ng-course-5f32f-default-rtdb.firebaseio.com/post.json", {
            headers: new HttpHeaders({'custom-header': 'hi'}),
            params: new HttpParams().set('print', 'hello'),
            responseType: 'json'
        }
      )
      .pipe(
        map((respData) => {
          const postArray: Post[] = [];
          for (const key in respData) {
            if (respData.hasOwnProperty(key)) {
              postArray.push({ ...respData[key], id: key });
            }
          }
          return postArray;
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  clearPosts() {
    return this.http.delete(
      "https://ng-course-5f32f-default-rtdb.firebaseio.com/post.json",
      {
          observe: 'events',
          responseType: 'text'
      }
    ).pipe(tap(event => {
        console.log(event);
        if (event.type === HttpEventType.Sent) {
            //
            
        }
        if (event.type === HttpEventType.Response) {
            console.log(event.body);
            
        }
    }));
  }
}

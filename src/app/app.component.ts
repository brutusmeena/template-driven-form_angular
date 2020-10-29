import { Component, VERSION, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  @ViewChild("myForm") myForm: NgForm;
  userName = "";
  defaultCourse = "Angular";

  onSubmit(form: NgForm) {
    console.log(this.myForm);
  }

  defaultGender = "Male";

  genders = [{ id: "1", gender: "Male" }, { id: "2", gender: "Female" }];
}

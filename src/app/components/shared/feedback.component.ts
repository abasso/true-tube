import { Component, OnInit } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html'
})
export class FeedbackComponent implements OnInit {
  public showFeedback = false
  public textarea: string
  constructor() { }

  ngOnInit() {
  }

  toggleFeedback() {
    if (this.showFeedback === false) {
      this.showFeedback = true
    } else {
      this.showFeedback = false
    }
  }

  updateTextArea(event: any) {
  }

  submitFeedback(event: any) {
  }

}

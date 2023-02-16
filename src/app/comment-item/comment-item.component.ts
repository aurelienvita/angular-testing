import { Component, Input } from '@angular/core'
import type { Comment } from '../models/Comment'

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent {
  @Input()
  public comment!: Comment
}

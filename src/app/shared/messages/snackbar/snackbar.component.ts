import { Component, OnInit } from '@angular/core'
import { trigger, state, style, transition, animate} from '@angular/animations'
import { NotificationService } from '../../services/notification.service'
import { timer } from 'rxjs'
import { tap, switchMap } from 'rxjs/operators'

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'        
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')), // animate(<duracao> <delay> <easing>)
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string
  snackVisibility: string = 'hidden'
  
  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    type T = (msg: string) => void
    const action: T = message => {
      this.message = message
      this.snackVisibility = 'visible'
    }
    this.notificationService.notifier.pipe(
      tap(action),
      switchMap(() => timer(3000)) // troca o Observable, faz o unsubscribe se houver Observable anterior ativo
    ).subscribe(() => this.snackVisibility = 'hidden')
  }
}

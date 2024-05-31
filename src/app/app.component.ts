import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShortcutInputComponent } from './shortcut-input/shortcut-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShortcutInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-angular';
}

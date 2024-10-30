import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Note: it should be 'styleUrls' not 'styleUrl'
})
export class AppComponent {
  title = 'package-tracking-frontend';
}
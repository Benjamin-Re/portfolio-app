import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Card } from './card/card';
import { Project, projects } from './projects'

@Component({
  imports: [RouterOutlet, Header, Card, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio-app');
  protected readonly projects:Project[] = projects
}

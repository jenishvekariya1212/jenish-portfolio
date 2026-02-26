import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, RevealDirective],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  educations = inject(PortfolioService).getEducation();
  certificates = inject(PortfolioService).getCertificates();
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, MatCardModule, MatButtonModule, MatIconModule,
    MatInputModule, MatFormFieldModule, FormsModule, RevealDirective
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  profile = inject(PortfolioService).getProfile();
  name = '';
  email = '';
  message = '';
  sent = false;

  onSubmit(): void {
    if (this.name && this.email && this.message) {
      this.sent = true;
    }
  }
}

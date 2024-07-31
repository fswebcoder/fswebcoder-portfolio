import { Component } from '@angular/core';
import { TitleComponent } from '../../components';
import { SubTitleComponent } from '../../components/sub-title/sub-title.component';
import { DescriptionComponent } from '../../components/description/description.component';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-information-section',
  standalone: true,
  imports: [TitleComponent, SubTitleComponent, DescriptionComponent, MenuComponent],
  templateUrl: './information-section.component.html',
  styleUrl: './information-section.component.scss'
})
export class InformationSectionComponent {
  title: string = 'Fabio Sánchez Sánchez';
  subtitle: string = 'Desarrollador Full Stack';
}

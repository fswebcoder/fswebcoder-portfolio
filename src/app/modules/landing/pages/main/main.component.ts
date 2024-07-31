import { AfterViewInit, Component, HostListener } from '@angular/core';
import { InformationSectionComponent } from '../information-section/information-section.component';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [InformationSectionComponent, RouterLinkActive],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',

})
export class MainComponent implements AfterViewInit {

  private debounceTimer: any;


  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {
      const x = event.clientX;
      const y = event.clientY;
      const gradient = `radial-gradient(circle at  ${x}px ${y}px, rgba(29, 78, 216, 0.4), rgba(15, 23, 42, 0) 80%)`;
      document.body.style.background = `${gradient}, rgb(15, 23, 42)`;
    }, 2);
  }


  ngAfterViewInit() {
    // const orbitales = document.querySelectorAll('.imagen-orbital');
    // orbitales.forEach((orbital, index) => {
    //   const angulo = (index * 72) - 90; // 72 grados entre cada imagen (360 / 5)
    //   (orbital as HTMLElement).style.setProperty('--rotacion', `${angulo}deg`);
    // });
  }

}

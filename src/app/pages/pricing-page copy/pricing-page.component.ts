import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector:'page-pricing',
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent implements OnInit {
    private title = inject(Title)
   private meta = inject(Meta);

   ngOnInit(): void {
     this.title.setTitle('contact-page');
     this.meta.updateTag({name:'description', content: 'este es mi contact page'})
     this.meta.updateTag({name:'og:title', content: 'contact page'})
     this.meta.updateTag({name:'keywords', content: 'Hola'})
   }
}

import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector:'page-pricing',
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent implements OnInit {
    private title = inject(Title)
    private meta = inject(Meta);
    // private platform = inject(PLATFORM_ID);

   ngOnInit(): void {

    //  if(isPlatformBrowser(this.platform)){
    //   document.title = 'pricing page'
    //  }


     this.title.setTitle('contact-page');
     this.meta.updateTag({name:'description', content: 'este es mi contact page'})
     this.meta.updateTag({name:'og:title', content: 'contact page'})
     this.meta.updateTag({name:'keywords', content: 'Hola'})
   }
}

/** Angular Imports */
import { NgModule } from '@angular/core';

/** App Imports */
import { CardComponent } from './card.component';

@NgModule({ declarations: [CardComponent], exports: [CardComponent] })
export class SharedModule {}

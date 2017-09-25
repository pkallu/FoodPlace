import { NgModule } from '@angular/core';
import { MdButtonModule,
        MdCheckboxModule,
        MatInputModule,
        MatTabsModule } from '@angular/material';

@NgModule({
  imports: [MdButtonModule,
    MdCheckboxModule,
    MatInputModule,
    MatTabsModule],
  exports: [MdButtonModule,
    MdCheckboxModule,
    MatInputModule,
    MatTabsModule],
})
export class MaterialModule {

}

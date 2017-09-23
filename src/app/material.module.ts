import { NgModule } from '@angular/core';
import { MdButtonModule,
        MdCheckboxModule,
        MatInputModule } from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MatInputModule],
  exports: [MdButtonModule, MdCheckboxModule, MatInputModule],
})
export class MaterialModule {

}

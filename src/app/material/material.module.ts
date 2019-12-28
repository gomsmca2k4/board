import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatListModule, MatIconModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
const Material = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  imports: [ Material ],
  exports: [ Material ]
})
export class MaterialModule { }

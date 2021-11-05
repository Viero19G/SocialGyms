import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ContadorComponent } from "../contador/contador.component";

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule],
    declarations: [ContadorComponent],
    exports: [ContadorComponent]
})

export class ComponentsModule{}
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataComponent } from './resume-data.component';
import { ResumeRoutingModule } from './resumedata.routing';
import { MaterialModule } from '../../../core_modules/material/material.module';

@NgModule({
    imports: [CommonModule,
        ResumeRoutingModule,
        RouterModule,
        MaterialModule
    ],
    declarations: [ResumeDataComponent],
    exports: [RouterModule, CommonModule, ResumeDataComponent]

})
export class ResumeDataModule { }
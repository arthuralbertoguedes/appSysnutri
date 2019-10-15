import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HomePage } from "./home";
import { HomeProvider } from "../../providers/home/home";

@NgModule({
    declarations: [HomePage],
    imports: [IonicPageModule.forChild(HomePage)],
    providers: [
        HomeProvider
    ]
})
export class HomeModule{}
import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListComponent } from "./components/list/list.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";

const routes : Routes=[

    { path: '', component: ListComponent },
    { path: ':cpf', component: ItemDetailComponent },
]
@NgModule({
    declarations:[],
    imports: [RouterModule.forRoot(routes)],
    exports : [RouterModule],
})
export class AppRoutingModule{}
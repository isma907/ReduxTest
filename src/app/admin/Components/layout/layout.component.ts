import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import * as searchActions from '../../_actions/search.actions'
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    constructor(private store: Store<{ search: any[] }>) { }

    ngOnInit() {

    }
    search: string
    items$: Observable<any[]> = this.store.select(state => state.search);

    buscar() {
        this.store.dispatch(searchActions.search({ query: this.search }))
    }

}
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import * as searchActions from '../../_actions/search.actions'
import * as searchSelectors from '../../_selectors/search.selectors'
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    constructor(private store: Store<any>) { }

    ngOnInit() {

    }
    search: string
    loading$ = this.store.select(searchSelectors.getLoading)


    buscar() {
        this.store.dispatch(searchActions.search({ query: this.search }))
    }

}
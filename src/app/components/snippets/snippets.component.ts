import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'

import { AppContext } from '../../infrastructure/app.context';
import { ResourceTextService } from '../../infrastructure/resourceText.service';
import { SnippetsModel } from '../../models/snippets';
import { ConstantValues } from '../../models/constantValues';
import { Tariff } from '../../models/tariff';

@Component({
    selector: 'snippets',
    templateUrl: 'snippets.component.html'
})

export class SnippetsComponent extends ResourceTextService implements OnInit {
    bindingPaths: string[] = [];
    searchTerms = new Subject<string>();
    foundTariffs: Observable<Tariff[]> = undefined;
    fullPathForDebugging: string;
    indexInHistory: number;
    jsCodeForPausingOnSet: string;
    pathsInHistory: string[] = [];
    snippetsModel: SnippetsModel = new SnippetsModel();


    constructor(private appContext: AppContext) {
        super();
    }

    ngOnInit() {
        this.pathsInHistory = JSON.parse(localStorage.getItem(ConstantValues.WLLast10BindingPaths));
        if (!this.pathsInHistory) {
            this.pathsInHistory = [];
        }

        if (this.pathsInHistory.length > 0)
            this.indexInHistory = this.pathsInHistory.length;
        else
            this.indexInHistory = -1;

        this.bindingPaths = this.appContext.Repository.BindingPath.getAll();

        this.foundTariffs = this.searchTerms
            .debounceTime(200)
            .distinctUntilChanged()
            .switchMap(term => (term && term !== "") ? this.appContext.Repository.Tariff.search(term) : Observable.of<Tariff[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Tariff[]>([])
            });
    }

    onPathForJSChanged($event) {
        var parent = this.appContext.Naming.getParentPath(this.snippetsModel.PathForJS);
        var property = this.appContext.Naming.getLastElement(this.snippetsModel.PathForJS);
        if (parent != property)
            this.jsCodeForPausingOnSet = `impeo.zurich.weblife.application.data.currentVorgang.DataAsObject.${parent}.bind(\"set\",function(arg){ if (arg.field === \"${property}\") debugger;})`;
        else
            this.jsCodeForPausingOnSet = `impeo.zurich.weblife.application.data.currentVorgang.DataAsObject.bind(\"set\",function(arg){ if (arg.field === \"${property}\") debugger;})`;
    }

    onPathForFullChanged($event) {
        this.fullPathForDebugging = "impeo.zurich.weblife.application.data.currentVorgang.DataAsObject." + this.snippetsModel.PathForFull;
    }

    onTextBoxClickSelectAll($event) {
        $event.target.select();
    }

    searchTariff(term:string):void {
        this.searchTerms.next(term);
    }

    showNextPath() {
        if (this.pathsInHistory.length > 0) {
            if (this.indexInHistory < this.pathsInHistory.length - 1) {
                this.indexInHistory++;
                this.snippetsModel.PathForFull = this.pathsInHistory[this.indexInHistory];
                this.onPathForFullChanged(undefined);
            }
        }
    }

    showPreviousPath() {
        if (this.pathsInHistory.length > 0) {
            if (this.indexInHistory === -1)
                this.indexInHistory = this.pathsInHistory.length;

            if (this.indexInHistory > 0) {
                this.indexInHistory--;
                this.snippetsModel.PathForFull = this.pathsInHistory[this.indexInHistory];
                this.onPathForFullChanged(undefined);
            }
        }
    }

    updateHistorie() {
        if (this.pathsInHistory.indexOf(this.snippetsModel.PathForFull) < 0) {
            if (this.pathsInHistory.length > 10)
                this.pathsInHistory.shift();
            this.pathsInHistory.push(this.snippetsModel.PathForFull);
            localStorage.setItem(ConstantValues.WLLast10BindingPaths, JSON.stringify(this.pathsInHistory));
        }
    }
}


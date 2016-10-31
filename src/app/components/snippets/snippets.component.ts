import { Component, OnInit } from '@angular/core';
import { NamingService } from '../../services/naming.service';
import { ResourceTextComponent } from '../resourceText.component';
import { SnippetsModel} from '../../models/snippets';

@Component({
    selector: 'snippets',
    templateUrl: 'snippets.component.html'
})

export class SnippetsComponent extends ResourceTextComponent implements OnInit{

    snippetsModel: SnippetsModel = new SnippetsModel();
    fullPathForDebugging:string;
    jsCodeForPausingOnSet:string;
    

    constructor(private namingService: NamingService) {
        super();
    }

    ngOnInit(){
        
    }

    onPathForJSChanged($event){
        var parent = this.namingService.getParentPath(this.snippetsModel.PathForJS);
        var property = this.namingService.getLastElement(this.snippetsModel.PathForJS); 
        this.jsCodeForPausingOnSet = `impeo.zurich.weblife.application.data.currentVorgang.DataAsObject.${parent}.bind(\"set\",function(arg){ if (arg.field === \"${property}\") debugger;})`;
    }

    onPathForFullChanged($event){
        this.fullPathForDebugging = "impeo.zurich.weblife.application.data.currentVorgang.DataAsObject." + this.snippetsModel.PathForFull;
    }
}
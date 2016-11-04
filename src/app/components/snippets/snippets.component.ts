import { Component, OnInit } from '@angular/core';
import { NamingProvider } from '../../services/naming.provider';
import { ResourceTextService } from '../../services/resourceText.service';
import { SnippetsModel} from '../../models/snippets';

@Component({
    selector: 'snippets',
    templateUrl: 'snippets.component.html'
})

export class SnippetsComponent extends ResourceTextService implements OnInit{

    snippetsModel: SnippetsModel = new SnippetsModel();
    fullPathForDebugging:string;
    jsCodeForPausingOnSet:string;
    

    constructor(private namingProvider: NamingProvider) {
        super();
    }

    ngOnInit(){
        
    }

    onPathForJSChanged($event){
        var parent = this.namingProvider.getParentPath(this.snippetsModel.PathForJS);
        var property = this.namingProvider.getLastElement(this.snippetsModel.PathForJS);       
        this.jsCodeForPausingOnSet = `impeo.zurich.weblife.application.data.currentVorgang.DataAsObject.${parent}.bind(\"set\",function(arg){ if (arg.field === \"${property}\") debugger;})`;
    }

    onPathForFullChanged($event){
        this.fullPathForDebugging = "impeo.zurich.weblife.application.data.currentVorgang.DataAsObject."+this.snippetsModel.PathForFull;
    }

    onTextBoxClickSelectAll($event)
    {
        $event.target.select();
    }
}
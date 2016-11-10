import { Injectable } from '@angular/core';
import { CommandApi } from './api/command/command.api';
import { NamingProvider } from './naming.provider';
import { Repository } from './dal/repository';

@Injectable()
export class AppContext {
    Command: CommandApi;
    Naming:NamingProvider;
    Repository:Repository;
    constructor(
        
        private commandApi: CommandApi,
        private namingProvider: NamingProvider,
        private repository:Repository) {            
            this.Command = commandApi;
            this.Naming = namingProvider;
            this.Repository = repository; 
    }
}
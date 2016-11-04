import { Injectable } from '@angular/core';
import { BindingPathRepository } from './bindingPath.repository';
import { CommandApi } from './command.api';
import { NamingProvider } from './naming.provider';

@Injectable()
export class AppContext {
    BindingPath: BindingPathRepository;
    Command: CommandApi;
    Naming:NamingProvider;

    constructor(
        private bindingPathRepository : BindingPathRepository,
        private commandApi: CommandApi,
        private namingProvider: NamingProvider) {
            this.BindingPath = bindingPathRepository;
            this.Command = commandApi;
            this.Naming = namingProvider;
    }
}
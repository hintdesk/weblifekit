import { Injectable } from '@angular/core';
import { BindingPathRepository } from './bindingPath.repository';
import { TariffRepository } from './tariff.repository';

@Injectable()
export class Repository {
    private bindingPath: BindingPathRepository;
    private tariff: TariffRepository;


    constructor(
        private bindingPathRepository: BindingPathRepository,
        private tariffRepository: TariffRepository
    ) {
        this.bindingPath = bindingPathRepository;
        this.tariff = tariffRepository;
    }

    get BindingPath() {
        return this.bindingPath;
    }

    get Tariff() {
        return this.tariff;
    }
}
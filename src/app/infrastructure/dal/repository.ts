import { Injectable } from '@angular/core';
import { BindingPathRepository } from './bindingPath.repository';
import { TariffRepository } from './tariff.repository';

@Injectable()
export class Repository {
    BindingPath: BindingPathRepository;
    Tariff: TariffRepository;
    constructor(
        private bindingPathRepository: BindingPathRepository,
        private tariffRepository: TariffRepository
    ) {
        this.BindingPath = bindingPathRepository;
        this.Tariff = tariffRepository;
    }
}
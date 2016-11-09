export class Tariff {
    paths: string[] = [];

    constructor(paths: string[]) {
        this.paths = paths;
    }
    toString() {
        return this.paths.join(" → ");
    }
}

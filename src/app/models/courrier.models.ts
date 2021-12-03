export class courrier {
    photo!: string;

    constructor(public id: string,
                public nom: string,
                public type: string,
                public valeur: number,
                public dimension: string) {}
}
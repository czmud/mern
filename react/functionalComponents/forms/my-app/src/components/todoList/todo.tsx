
export class Todo{
    description: string;
    isComplete: boolean;

    constructor( description: string, isComplete: boolean = false){
        this.description = description;
        this.isComplete = isComplete;
    }
}
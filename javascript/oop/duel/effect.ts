import { Card } from "./card";
import { Unit } from "./unit";



export class Effect extends Card{
    text: string;
    stat: string;
    magnitude: number;

    constructor(name: string, cost:number, stat: string, magnitude: number){
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
        this.text = this.generateText();
    }

    generateText(): string{
        let textString: string = "";
        textString += (this.magnitude < 0 ? "Decrease " : "Increase ");
        textString += "the target's ";
        textString += this.stat;
        textString += "by ";
        textString += (this.magnitude < 0 ? -this.magnitude : this.magnitude);
        return textString;
    }

    play( target: Unit ): void{
        if( this.stat === "resilience"){
            target.res += this.magnitude;
        } else if ( this.stat == "power"){
            target.power += this.magnitude;
        }
    }
}
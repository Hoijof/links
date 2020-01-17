import Character from './character';
import { executeAction } from './action';

export default class CharacterManager {
    constructor() {
        this.characters = [];
        this._lastId = 0;
    }

    addCharacter(name) {
        const c = new Character(++this._lastId, `Character_${this._lastId}`);
        
        this.characters.push(c);

        return c;
    }

    relateCharacters(c1, c2) {
        if (c1.hasRelation(c2) || c2.hasRelation(c1)) {
            throw new Error('Characters already related');
        }

        c1.addRelation(c2);
        c2.addRelation(c1);
    }

    doAction(action) {
        executeAction(action);
    }
}
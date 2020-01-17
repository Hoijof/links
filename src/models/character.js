import Relation from './relation'

export default class Character {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.relations = {};

        this.stats = {
            memory: this.getRandomStat(1, 10),
            forgiveness: this.getRandomStat(1,10),
            anger: this.getRandomStat(1, 10)
        };
    }

    /**
     * Relations is an Array of relations where each key of the array is the id 
     * of the related character
     * @param {Object} relation 
     */
    addRelation(c) {
        const relation = new Relation(this, c);

        this.relations[c.id] = relation;
    }

    hasRelation(c) {
        return (typeof this.relations[c.id] === 'object');
    }

    getRelation(c) {
        return this.relations[c.id];
    }

    getRandomStat(min, max) {
        const res = Math.random() * max;

        return res > min ? res : min;
    }

    reportStats() {
        const res = [];

        Object.keys(this.stats).forEach((statName) => {
            res.push(`${statName}: ${this.stats[statName].toFixed(2)} `);
        });

        return res;
    }
}
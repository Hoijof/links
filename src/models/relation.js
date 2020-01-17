export const ZONES = {
    knowledge: ['who dis', 'meh', 'aaah, you', 'hey', 'you!'],
    attitude: ['hate', 'uff', 'meh', 'fine', 'heeey'],
    traits: {}
};

export default class Relation {
    constructor(c1, c2) {
        this.source = c1;
        this.dest = c2;

        this.knowledge = 0;
        this.attitude = 3;
        this.traits = {};
        this.events = [];
    }

    reportStatus() {
        return `From ${this.source.name} to ${this.dest.name}
        knowledge: ${this.getKnowledge()}
        Attitude: ${this.getAttitude()}`
    }

    getKnowledge() {
        const knowledge = Math.floor(this.knowledge);
        const computedKnowledge = knowledge > 4 ? 4 : knowledge;
        const computedKnowledgeMin = computedKnowledge < 0 ? 0 : computedKnowledge

        return ZONES.knowledge[computedKnowledgeMin];
    }

    
    getAttitude() {
        const attitude = Math.floor(this.attitude);
        const computedAttitude = attitude > 4 ? 4 : attitude;
        const computedAttitudeMin = computedAttitude < 0 ? 0 : computedAttitude

        return ZONES.attitude[computedAttitudeMin];
    }
}
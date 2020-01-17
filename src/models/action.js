export const ACTION_TYPES = {
    CONSTRUCTIVE: 0,
    DESTRUCTIVE: 1,
    NEUTRAL: 2
};

/*
const action = {
    type: ACTION_TYPES.CONSTRUCTIVE,
    source: c,
    dest: c2,
    ratio: 1,
    unidirectional: false
  };
*/
/**
 * Executes an action taking into account both of the characters profiles and
 * affects the relation.
 * 
 * @param {Object} action 
 */
export function executeAction(action) {
    const relation = action.source.getRelation(action.dest);
    run(relation, action);

    if (action.unidirectional) {
        return;
    }

    const relation2 = action.dest.getRelation(action.source);
    run(relation2, action);
    
}

function run(relation, action) {
    switch(action.type) {
        case ACTION_TYPES.CONSTRUCTIVE:
            relation.knowledge += computeKnowledge(1, relation.source);
            relation.attitude += computeAttitude(1, relation.source);
        break;
        case ACTION_TYPES.DESTRUCTIVE:
            relation.knowledge += computeKnowledge(1, relation.source);
            relation.attitude += computeAttitude(-1, relation.source);
        break;
        case ACTION_TYPES.NEUTRAL:
            relation.knowledge += computeKnowledge(1, relation.source);
        break;
        default:
    } 
}

function computeKnowledge(number, character) {
    return number * (0.05 * character.stats.memory);
}

function computeAttitude(number, character) {
    if (number < 0) {
        return number * (0.05 * character.stats.anger);
    }

    return number * (0.05 * character.stats.forgiveness);
}
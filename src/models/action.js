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
            relation.knowledge += 1 * action.ratio;
            relation.attitude += 1 * action.ratio;
        break;
        case ACTION_TYPES.DESTRUCTIVE:
            relation.knowledge += 1 * action.ratio;
            relation.attitude -= 1 * action.ratio;
        break;
        case ACTION_TYPES.NEUTRAL:

        break;
        default:
    } 
}
export const valueSchema = {
    type: 'object',
    required: ['uf','state','cases','deaths','suspects','refuses','datetime'],
    properties: {
        uid: {
            type: 'integer'
        },
        uf: {
            type: 'string'
        },
        state: {
            type: 'string'
        },
        cases: {
            type: 'integer'
        },
        deaths: {
            type: 'integer'
        },
        suspects: {
            type: 'integer'
        },
        refuses: {
            type: 'integer'
        },
        datetime: {
            type: 'integer'
        }
    }
};
export const valueSchema = {
    type: 'object',
    required: ['uid','uf','state','cases','deaths','suspects','refuses','datetime'],
    properties: {
        uid: {
            type: 'string'
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
            type: 'string'
        },
        datetime: {
            type: 'string'
        }
    }
};
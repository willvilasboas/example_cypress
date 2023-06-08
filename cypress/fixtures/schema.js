export const valueSchema = {
    type: 'object',
    properties: {
      page: { type: 'number' },
      per_page: { type: 'number' },
      total: { type: 'number' },
      total_pages: { type: 'number' },
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'number' },
            email: { type: 'string', format: 'email' },
            first_name: { type: 'string' },
            last_name: { type: 'string' },
            avatar: { type: 'string', format: 'uri' }
          },
          required: ['id', 'email', 'first_name', 'last_name', 'avatar']
        }
      },
      support: {
        type: 'object',
        properties: {
          url: { type: 'string', format: 'uri' },
          text: { type: 'integer' }
        },
        required: ['url', 'text']
      }
    },
    required: ['page', 'per_page', 'total', 'total_pages', 'data', 'support']   
};
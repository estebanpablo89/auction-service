const schema = {
  properties: {
    queryStringParameters: {
      properties: {
        status: {
          type: 'string',
          enum: ['OPEN', 'CLOSED'],
        },
      },
    },
  },
  required: ['queryStringParameters'],
};

export default schema;

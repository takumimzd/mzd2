module.exports = {
  openapi: {
    output: {
      mode: 'split',
      target: './src/apis/index.ts',
      schemas: 'src/apis/types',
      client: 'swr',
      hooks: {
        afterAllFilesWrite: 'prettier --write',
      },
    },
    input: {
      target: './openapi.yml',
    },
  },
};

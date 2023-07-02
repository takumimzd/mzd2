module.exports = {
  openapi: {
    output: {
      mode: 'split',
      target: './src/apis/index.ts',
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

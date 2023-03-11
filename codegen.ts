/** @type {import('graphql-config').IGraphQLConfig } */
module.exports = {
  projects: {
    vebapp: {
      schema: ['./schema.graphql'],
      documents: ['./**/*.{tsx,ts}'],
      extensions: {
        codegen: {
          generates: {
            './graphql.ts': {
              plugins: ['typescript', 'typescript-operations'],
            },
          },
        },
      },
      overwrite: true,
    },
  },
}

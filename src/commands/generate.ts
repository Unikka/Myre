module.exports = {
  name: 'generate',
  alias: ['g'],
  run: async (context) => {
    const { parameters, template: { generate } } = context

    const name = parameters.first

    await generate({
      template: 'model.ts.ejs',
      target: `models/${name}-model.ts`,
      props: { name }
    })
  }
}

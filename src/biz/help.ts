import { gql } from '@apollo/client'
import { parse } from 'graphql'
import { print, visit } from 'graphql/index'
import { buildClientSchema } from 'graphql/utilities'

import { IntrospectionQuery } from '../apollo'
import { client } from '../apollo/client'
// import { buildClientSchema } from 'graphql/utilities'

// import { IntrospectionQuery } from '../apollo'
// import { client } from '../apollo/client'
let schema
export const getAllQuery = async () => {
  const result = await client.query({ query: IntrospectionQuery })
  schema = buildClientSchema(result.data)
  const queryType = schema.getQueryType()!
  const fields = queryType.getFields()
  // const queries = Object.keys(fields).map((fieldName) => {
  //   const field = fields[fieldName]
  //   const args = field.args
  //   const returnType = field.type
  //
  //   console.log('field', field)
  // })

  const description = queryType.getFields()['npmvs_lucky_packages']
  console.log(schema)
  console.log(
    "queryType.getFields()['npmvs_lucky_packages']",
    queryType.getFields()['npmvs_lucky_packages'],
  )
  console.log('description', description)
}

export function handleResData(data: any) {
  return Object.keys(data).map((key) => {
    return key
  })
}

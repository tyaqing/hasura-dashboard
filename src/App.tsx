import { Box } from '@chakra-ui/react'
import { buildClientSchema } from 'graphql/utilities'
import { useEffect } from 'react'

import { IntrospectionQuery } from './apollo'
import { client } from './apollo/client'

function App() {
  useEffect(() => {
    test()
  }, [])

  return <Box className="App">hahah</Box>
}

const test = async () => {
  const result = await client.query({ query: IntrospectionQuery })
  console.log('data', result.data)
  const schema = buildClientSchema(result.data)
  console.log('schema', schema.getQueryType()?.getFields())
}

export default App

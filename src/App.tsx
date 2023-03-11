import { gql } from '@apollo/client'
import { Box, Button, Textarea } from '@chakra-ui/react'
import { buildASTSchema, parse, print, visit } from 'graphql'
import { OperationTypeNode } from 'graphql/language/ast'
import { buildClientSchema } from 'graphql/utilities'
import { useEffect, useState } from 'react'

import { client } from './apollo/client'
import { getAllQuery } from './biz/help'

function App() {
  const [query, setQuery] = useState('')
  useEffect(() => {
    getAllQuery()
  })
  const onQuery = async () => {
    return client.query({
      query: gql(query),
    })
  }
  return (
    <Box className="App">
      <Textarea onChange={(e) => setQuery(e.target.value)} />
      <Button onClick={onQuery}>Query</Button>
    </Box>
  )
}

export default App

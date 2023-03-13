import { gql } from '@apollo/client'
import {
  Box,
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Textarea,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { buildASTSchema, parse, print, visit } from 'graphql'
import { OperationTypeNode } from 'graphql/language/ast'
import { buildClientSchema } from 'graphql/utilities'
import { useEffect, useState } from 'react'

import { client } from './apollo/client'
import { getAllQuery, handleResData } from './biz/help'

function App() {
  const [query, setQuery] = useState(`query MyQuery {
  npmvs_lucky_packages(args: {num: 10}) {
    name
    id
    weight
  }
}
`)
  const [unknownTypeData, setUnknownTypeData] = useState()
  const [allKey, setAllKey] = useState<string[]>([])
  useEffect(() => {
    getAllQuery()
  })
  const onQuery = async () => {
    const { data } = await client.query({
      query: gql(query),
    })
    setAllKey(handleResData(data))
    setUnknownTypeData(data)
  }
  return (
    <Box className="App">
      <Textarea defaultValue={query} onChange={(e) => setQuery(e.target.value)} />
      <Button onClick={onQuery}>Query</Button>
      {allKey.join('|')}
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            {unknownTypeData?.['npmvs_lucky_packages'] &&
              Object.values(unknownTypeData?.['npmvs_lucky_packages']).map((key, index) => {
                return (
                  <Tr key={index}>
                    <Td>{key}</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                )
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default App

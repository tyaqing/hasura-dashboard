import { gql } from '@apollo/client'
import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Textarea,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { client } from './apollo/client'
import { handleResData } from './biz/help'

function App() {
  const [query, setQuery] = useState(`query MyQuery {
  npmvs_lucky_packages(args: {num: 10}) {
    id
    name
    weight
  }
}
`)
  const [unknownTypeData, setUnknownTypeData] = useState()
  const [allKey, setAllKey] = useState<string[]>([])
  useEffect(() => {
    // getAllQuery()
  })
  const onQuery = async () => {
    const { data } = await client.query({
      query: gql(query),
    })

    const { allKey, res } = handleResData(data)
    setAllKey(allKey)
    console.log('data', res)
    setUnknownTypeData(res)
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
              {unknownTypeData?.['npmvs_lucky_packages'] &&
                unknownTypeData?.['npmvs_lucky_packages'].field.map((v) => {
                  return <Th key={v}>{v}</Th>
                })}
            </Tr>
          </Thead>
          <Tbody>
            {unknownTypeData?.['npmvs_lucky_packages'] &&
              unknownTypeData?.['npmvs_lucky_packages'].data.map((item) => {
                console.log('item', item)
                return (
                  <Tr key={item.id}>
                    {Object.values(item).map((v) => {
                      return <Td key={v}>{v}</Td>
                    })}
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

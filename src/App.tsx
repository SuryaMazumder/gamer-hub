import { useState } from 'react'
import { Box, Grid, GridItem, Show } from '@chakra-ui/react';
import './App.css'
import Navbar from './components/Navbar';
function App() {
  return (

    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,

    }}>
      <GridItem area="nav" >
        <Navbar />
      </GridItem>

      <Show above='lg'>
        <GridItem area="aside" bg="blue">
          aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="orange">
        main
      </GridItem>


    </Grid>

  )
}

export default App

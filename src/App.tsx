import { useState } from 'react'
import { Box, Grid, GridItem, Show } from '@chakra-ui/react';
import './App.css'
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
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
        <GridItem area="aside" >

        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid />
      </GridItem>


    </Grid>

  )
}

export default App

import React, { Component } from 'react'
import axios from 'axios'
import { Card, Button } from 'antd'

class CharactersAll extends Component {
  state = {
    characters: [],
    character: {}
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/characters')
      .then(({ data: { characters } }) => {
        this.setState({ characters })
      })
      .catch(err => {
        console.log('donde están mis TAs?', err)
      })
  }

  fetchDetail = name => {
    axios
      .get('http://localhost:3000/characters/' + name)
      .then(({ data: { character } }) => {
        this.setState({ character })
      })
      .catch(err => {
        console.log('where the fuck are the TAs')
      })
  }

  render() {
    const { characters, character } = this.state
    return (
      <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
        {characters.map(character => {
          return (
            <Card
              style={{
                width: '25vw',
                height: '500px'
              }}
              key={character._id}
              title={character.name}
            >
              <img width="200" height="300" src={character.image} alt={character.name} />
              <p>{character.birthday}</p>
              <Button onClick={() => this.fetchDetail(character.name)}>See details</Button>
            </Card>
          )
        })}
        <p>{character.name}</p>
        <p>{character.age}</p>
        <p>{character.job}</p>
      </div>
    )
  }
}

export default CharactersAll

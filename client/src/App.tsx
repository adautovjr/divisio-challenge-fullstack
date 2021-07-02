import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GlobalStyle } from './style-guide/GlobalStyle'
import { handleInitialData } from './actions/shared'
import { getDataFor, setActivePokemon } from './actions/pokemons'
import Modal from 'react-modal'

import * as S from './styles'

Modal.setAppElement('#root')

const customModalStyles = {
  overlay: {
    backgroundColor: '#282c34'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const App = ({ dispatch, pokemons, activePokemon }: any) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  useEffect(() => {
    dispatch(handleInitialData())
  }, [])

  const handleClickOnPokemon = (pokemon: string): void => {
    dispatch(getDataFor(pokemon)).then(() => setIsOpen(true))
  }

  const closeModal = (): void => {
    setIsOpen(false)
    dispatch(setActivePokemon(null))
  }

  return (
    <>
      <GlobalStyle />
      <S.Container>
        <S.Header>
          {pokemons ? (
            pokemons.map((pokemon: any) => (
              <div key={pokemon.name}>
                <button
                  type="button"
                  onClick={() => handleClickOnPokemon(pokemon.name)}
                >
                  {pokemon.name}
                </button>
              </div>
            ))
          ) : (
            <div> Loading... </div>
          )}
        </S.Header>
      </S.Container>
      <Modal
        isOpen={modalIsOpen}
        style={customModalStyles}
        contentLabel="Pokemon View"
      >
        {activePokemon ? (
          <>
            <S.PokemonName>{activePokemon.name}</S.PokemonName>
            <S.CloseModalButton onClick={() => closeModal()}>
              X
            </S.CloseModalButton>
            <S.PictureContainer>
              <S.PokePicture
                src={activePokemon.sprites.front_default}
                alt={activePokemon.name}
              />
            </S.PictureContainer>
          </>
        ) : (
          <>
            <div className="Error">Error loading this pokemon data.</div>
          </>
        )}
      </Modal>
    </>
  )
}

function mapStateToProps({ payload }: any) {
  const { pokemons, activePokemon } = payload
  return {
    pokemons: Object.values(pokemons),
    activePokemon
  }
}

export default connect(mapStateToProps)(App)

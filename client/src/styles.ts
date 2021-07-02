import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
`

export const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const Modal = styled.div``

export const PokemonName = styled.h2`
  color: #282c34;
  font-size: 20px;
  padding-right: 80px;
  margin-top: 3px;
`

export const CloseModalButton = styled.div`
  font-size: 16px;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  align-content: center;
  justify-content: center;
  border: 1px solid #282c34;
  border-radius: 6px;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

export const Link = styled.a.attrs({
  href: 'https://reactjs.org',
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  color: #61dafb;
`

export const PokePicture = styled.img`
  pointer-events: none;
  max-width: 100%;
`

export const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

// pages/about.js

import { chakra, Container } from '@chakra-ui/react'

export default function AboutPage() {

    return (
        <Container maxW="container.md">
            <chakra.h1 fontSize="3xl" lineHeight={1.8} letterSpacing={-1}>About</chakra.h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Container>
    )
}
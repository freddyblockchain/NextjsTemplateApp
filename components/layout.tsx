import Link from 'next/link'
import { Box, Button, chakra, Container, Flex, HStack } from '@chakra-ui/react'

export const Layout = (props) => {
    const { children } = props;
    return (
        <div className="page-wrap">
            <Box as="header">
                <Container as={Flex} maxW="container.xl" h="full" justify="space-between" align="center">
                    <chakra.h1 fontSize="2xl" fontWeight="bold" color="gray.700" _hover={{ color: 'blue.300' }}>
                        <Link href="/">Chakra Sandbox</Link>
                    </chakra.h1>
                    <HStack as="nav" align="center" gap={4}>
                        <chakra.p color="blue.400" _hover={{ color: 'blue.300' }}><Link href="/posts/first-post">First Post</Link></chakra.p>
                        <Button variant="solid" colorScheme="blue" size="sm" onClick={() => alert('This feature is coming soon, check back again.')}>Sign up</Button>
                    </HStack>
                </Container>
            </Box>
            <Box as="main">
                {children}
            </Box>
            <Box as="footer">
                <Container as={Flex} h="full" maxW="container.xl" justify="space-between" align="center">
                    <chakra.p>Sandbox <chakra.span color="blue.400">&copy; {new Date().getFullYear()}</chakra.span></chakra.p>
                    <chakra.p mr={6} color="blue.400" _hover={{ color: 'blue.300' }}>
                        <Link href="/">Home</Link>
                    </chakra.p>
                </Container>
            </Box>
        </div>
    );
}
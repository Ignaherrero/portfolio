import React from "react";
import {
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  UnorderedList,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { ReactComponent as SvgGitHub } from "../../assets/menu_black_24dp.svg";
import { motion } from "framer-motion";
/*
      <Menu>
        <MenuButton aria-label="Options" variant="outline" />
        <MenuList>
          <>Sobre mi</>
          <>Contactame</>
          <>Skills</>
          <>Proyectos</>
          <>Cursos</>
          <>Actividades</>
        </MenuList>
      </Menu>

*/

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box width="100%" bg="#f7fafc">
      <Box boxShadow="xl" rounded="md" bg="white" maxH="80px">
        <Menu boxShadow="xl" rounded="md">
          <Flex maxW="1050px" m="auto" justifyContent="space-between">
            {/* <MenuList minWidth="50px"> */}
            <Flex>
              <MenuItem width="auto">
                <Image
                  src="https://avatars.githubusercontent.com/u/44342115?v=4"
                  borderRadius="full"
                  boxSize="50px"
                />
              </MenuItem>
              {/* <MenuItem width="auto">Sobre mi</MenuItem>
              <MenuItem width="auto">Links</MenuItem> */}
            </Flex>
            <HStack spacing="50px">
              <MenuItem width="auto">
                <Link
                  href="https://github.com/Ignaherrero"
                  isExternal
                  colorScheme="purple"
                >
                  <Image src="https://icongr.am/devicon/github-original.svg?size=30&color=d605a9"></Image>
                </Link>
              </MenuItem>
              {/* <MenuItem width="auto" onClick={toggleColorMode}>
                <Image src="https://icongr.am/fontawesome/moon-o.svg?size=30color=black"></Image>
              </MenuItem> */}
            </HStack>
          </Flex>
        </Menu>
      </Box>

      <Container
        maxW="container.lg"
        bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        bg="#f7fafc"
        marginTop={7}
      >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Flex>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 10 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Box width="150px">
                <Image
                  src="https://avatars.githubusercontent.com/u/44342115?v=4"
                  borderRadius="full"
                  boxSize="80px"
                />
              </Box>
            </motion.div>
            <Box>
              <Text color="#2d3748" fontSize="2xl">
                Hola!
              </Text>
              <Text fontSize="2xl" color="#323c4c">
                Mi nombre es{" "}
                <Text fontWeight="bold" display="inline">
                  Ignacio Herrero
                </Text>{" "}
                y soy programador frontend, este es mi porfolio donde comparto
                mis experiencias, trabajos y lugares donde participe.
              </Text>
            </Box>
          </Flex>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Heading mt="30px" fontSize="2xl">
            {" "}
            Proyectos
          </Heading>

          <VStack spacing={3} mt={5}>
            <Box
              boxShadow="base"
              p="6"
              rounded="md"
              bg="white"
              maxW="800px"
              width="100%"
              borderRadius="lg"
              overflow="hidden"
            >
              <Heading fontSize="lg">Ecommerce</Heading>
              <Text color="#8b97a9">
                Tecnologias: next, api whatsapp, netlify, chakraui
              </Text>
              <HStack spacing="20px">
                <Link
                  href="https://github.com/Ignaherrero/ecommerce-next-apiWhatsapp"
                  isExternal
                >
                  Code
                </Link>
                <Link
                  href="https://ecommerce-next-api-whatsapp-google-sheet.vercel.app/main"
                  isExternal
                >
                  Live
                </Link>
              </HStack>
            </Box>
            <Box
              boxShadow="base"
              p="6"
              rounded="md"
              bg="white"
              maxW="800px"
              borderRadius="lg"
              overflow="hidden"
              width="100%"
            >
              <Heading fontSize="lg">Adogtemos</Heading>
              <Text color="#8b97a9">
                Tecnologias: typescript, react, styled-components, react router,
                netlify, husky, eslint
              </Text>
              <HStack spacing="20px">
                <Link href="https://github.com/GammaFec" isExternal>
                  Code
                </Link>
                <Link href="https://develop--adogtemos.netlify.app/" isExternal>
                  Live
                </Link>
              </HStack>
            </Box>
            <Box
              boxShadow="base"
              p="6"
              rounded="md"
              bg="white"
              maxW="800px"
              borderRadius="lg"
              overflow="hidden"
              width="100%"
            >
              <Heading fontSize="lg">Todo</Heading>
              <Text color="#8b97a9">
                Tecnologias: next, api whatsapp, netlify, localstorage
              </Text>
              <HStack spacing="20px">
                <Link href="https://github.com/Ignaherrero/todo" isExternal>
                  Code
                </Link>
                <Link href="https://nacho93-todo.netlify.app/" isExternal>
                  Live
                </Link>
              </HStack>
            </Box>

            <Box
              boxShadow="base"
              p="6"
              rounded="md"
              bg="white"
              maxW="800px"
              borderRadius="lg"
              overflow="hidden"
              width="100%"
            >
              <Heading fontSize="lg">Journal</Heading>
              <Text color="#8b97a9">
                Tecnologias: next, api whatsapp, netlify
              </Text>
              <HStack spacing="20px">
                <Link
                  href="https://github.com/Frontend-Cafe/dev-tools-react"
                  isExternal
                >
                  Code
                </Link>
                <Link
                  href="https://autenticacion-firebase-firestone-redux-tests.vercel.app/auth/login"
                  isExternal
                >
                  Live
                </Link>
              </HStack>
            </Box>
            <Box
              boxShadow="base"
              p="6"
              rounded="md"
              bg="white"
              maxW="800px"
              borderRadius="lg"
              overflow="hidden"
              width="100%"
            >
              <Heading fontSize="lg">Calendar</Heading>
              <Text color="#8b97a9">
                Tecnologias: next, api whatsapp, netlify
              </Text>
              <HStack spacing="20px">
                <Link
                  href="https://github.com/Ignaherrero/calendar-react-redux-localStorage-bootstrap-fontAwsome"
                  isExternal
                >
                  Code
                </Link>
                <Link
                  href="https://calendar-react-redux-local-storage-bootstrap-font-awsome.vercel.app/"
                  isExternal
                >
                  Live
                </Link>
              </HStack>
            </Box>
          </VStack>
        </motion.div>
      </Container>
      <Container maxW="container.lg" mt={5} padding={30}>
        <footer>
          <nav>
            <List>
              <HStack spacing="100px" justifyContent="center">
                <ListItem>
                  <Link
                    href="https://www.linkedin.com/in/ignacioah/"
                    isExternal
                  >
                    <Image src="https://icongr.am/devicon/linkedin-plain.svg?size=35&color=000000" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://github.com/Ignaherrero" isExternal>
                    <Image src="https://icongr.am/devicon/github-original.svg?size=35&color=d605a9" />
                  </Link>
                </ListItem>
              </HStack>
            </List>
          </nav>
        </footer>
      </Container>
    </Box>
  );
};

export default Index;

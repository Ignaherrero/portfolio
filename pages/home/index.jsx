import React from "react";
import {
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Menu,
  MenuItem,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import Head from "next/head";

function Index({ data, urlImg }) {
  return (
    <body>
      <Head>
        <meta
          name="description"
          content="mi portfolio, acerca de mi y mis proyectos"
        />
        <meta
          property="og:description"
          content="mi portfolio, acerca de mi y mis proyectos"
        />
        <meta property="og:site_name" content="ignacio herrero portfolio" />
        <meta property="og:image" content={urlImg} />
        <title>Ignacio Herrero</title>
      </Head>
      <Box width="100%">
        <Box boxShadow="xl" rounded="md" maxH="80px">
          <Menu boxShadow="xl" rounded="md">
            <Flex maxW="1050px" m="auto" justifyContent="space-between">
              <Flex>
                <MenuItem width="auto">
                  <Image
                    src="https://avatars.githubusercontent.com/u/44342115?v=4"
                    borderRadius="full"
                    boxSize="50px"
                    alt="profile-img"
                  />
                </MenuItem>
              </Flex>
              <HStack spacing="50px">
                <MenuItem width="auto">
                  <Link
                    href="https://github.com/Ignaherrero"
                    isExternal
                    colorScheme="purple"
                  >
                    <Image
                      src="https://icongr.am/devicon/github-original.svg?size=30&color=d605a9"
                      alt="icon-github"
                    ></Image>
                  </Link>
                </MenuItem>
              </HStack>
            </Flex>
          </Menu>
        </Box>

        <Container
          maxW="container.lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          marginTop={7}
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Flex flexDirection={{ base: "column", md: "row", sm: "column" }}>
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 10 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <Flex
                  width="150px"
                  height="100%"
                  justifyContent="center"
                  m="auto"
                >
                  <Image
                    src="https://avatars.githubusercontent.com/u/44342115?v=4"
                    borderRadius="full"
                    boxSize="80px"
                    alt="profile-img"
                    alignSelf="center"
                  />
                </Flex>
              </motion.div>
              <Box mt={{ base: 6 }}>
                <Text fontSize="2xl">Hola!</Text>
                <Text fontSize={{ base: "xl", sm: "2xl" }}>
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
              {data.map((proyect) => (
                <Box
                  boxShadow="base"
                  p="6"
                  rounded="md"
                  maxW="800px"
                  width="100%"
                  borderRadius="lg"
                  overflow="hidden"
                  key={nanoid()}
                >
                  <Heading fontSize="lg">{proyect.name}</Heading>
                  <Text>Tecnologias: {proyect.tec}</Text>
                  <HStack spacing="20px">
                    {proyect?.liveUrl && (
                      <>
                        <Link href={proyect.liveUrl} isExternal>
                          Live
                        </Link>
                        <Button>asfasdf</Button>
                      </>
                    )}
                    <Link href={proyect.codeUrl} isExternal>
                      Code
                    </Link>
                  </HStack>
                </Box>
              ))}
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
                      <Image
                        src="https://icongr.am/devicon/linkedin-plain.svg?size=35&color=000000"
                        alt="icon-linkedin"
                      />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://github.com/Ignaherrero" isExternal>
                      <Image
                        src="https://icongr.am/devicon/github-original.svg?size=35&color=d605a9"
                        alt="icon-github"
                      />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="mailto:nachoherrero93@hotmail.com" isExternal>
                      <Image
                        src="https://icongr.am/clarity/envelope.svg?size=40&color=currentColor"
                        alt="icon-email"
                      />
                    </Link>
                  </ListItem>
                </HStack>
              </List>
            </nav>
          </footer>
        </Container>
      </Box>
    </body>
  );
}

export async function getStaticProps() {
  // If this request throws an uncaught error, Next.js will
  // not invalidate the currently shown page and
  // retry getStaticProps on the next request.
  const res = await fetch("https://my-portfolio-nacho93.vercel.app/api/hello");
  const data = await res.json();

  if (!res.ok) {
    // If there is a server error, you might want to
    // throw an error instead of returning so that the cache is not updated
    // until the next successful request.
    throw new Error(`Failed to fetch posts, received status ${res.status}`);
  }

  // If the request was successful, return the posts
  // and revalidate every 10 seconds.

  return {
    props: {
      data,
      urlImg: "https://www.foo.software/content/images/2020/08/react-next.png",
    },
    revalidate: 60,
  };
}

export default Index;

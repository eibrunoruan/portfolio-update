import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="MangaPreso">
    <Container>
      <Title>
        MangaPreso <Badge>2023-atual</Badge>
      </Title>
      <Center my={6}>
      </Center>
      <P>
        MangaPreso é um site de leitura de mangás, desenvolvido com Java e Angular, e integrado a um banco de dados SQL.
      </P>
      <P>
        Com MangaPreso, os usuários podem explorar uma ampla coleção de mangás e desfrutar de uma experiência de leitura intuitiva e personalizada.
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Leitura rápida e sem limitações de tamanho de arquivo.</ListItem>
        <ListItem>Conexão estável e simultânea em vários dispositivos.</ListItem>
        <ListItem>
          Interface intuitiva que facilita a navegação e a busca por mangás.
        </ListItem>
        <ListItem>
          Sincronização em nuvem para acessar seus mangás favoritos em qualquer lugar.
        </ListItem>
        <ListItem>
          Integração com recursos de recomendação personalizada baseada no histórico de leitura.
        </ListItem>
        <ListItem>
          Comunidade ativa para interagir e compartilhar suas opiniões sobre mangás.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Plataforma</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Tecnologias</Meta>
          <span>Java, Angular, SQL</span>
        </ListItem>
        <ListItem>
          <Meta>Última atualização</Meta>
          <span>2024/08/15</span>
        </ListItem>
        <ListItem>
          <Meta>Manual</Meta>
          <Link href="https://mangapreso.com/guia-de-uso">Guia de Uso</Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Imprensa</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://mangapreso.com/">
            <Badge mr={2}>Mangá News</Badge>
            Descubra as últimas novidades do MangaPreso{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/mangapreso1.png" alt="MangaPreso Screenshot 1" />
        <WorkImage src="/images/works/mangapreso2.png" alt="MangaPreso Screenshot 2" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

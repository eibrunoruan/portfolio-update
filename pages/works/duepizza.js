import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Duepizza">
    <Container>
      <Title>
        Duepizza <Badge>2024</Badge>
      </Title>
      <P>
        Duepizza é um aplicativo desenvolvido como parte de um projeto acadêmico
        para a matéria de Fundamentos Web UX. O objetivo do projeto foi criar uma
        solução intuitiva e eficiente para pedidos de pizza em uma pizzaria local.
      </P>
      <P>
        O app oferece uma interface amigável, permitindo que os usuários façam
        pedidos de pizza de forma rápida e fácil, e também inclui recursos para
        personalizar pedidos e acompanhar o status de entrega.
      </P>
      <UnorderedList my={4}>
        <ListItem>Interface intuitiva para pedidos de pizza</ListItem>
        <ListItem>Personalização de pedidos</ListItem>
        <ListItem>Acompanhamento do status de entrega</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Plataforma</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Tecnologia</Meta>
          <span>JavaScript, React, Node.js</span>
        </ListItem>
        <ListItem>
          <Meta>Documentação</Meta>
          <Link href="https://example.com/duepizza-docs">
            Documentação do Projeto <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repositório</Meta>
          <Link href="https://github.com/eibrunoruan/duepizza">
            github.com/eibrunoruan/duepizza <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>


      <WorkImage src="/images/works/duepizza.png" alt="duepizza" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

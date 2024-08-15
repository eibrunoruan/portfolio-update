import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Cooperbam - Cooperativa de Bananas">
    <Container>
      <Title>
        Cooperbam - Cooperativa de Bananas <Badge>2024</Badge>
      </Title>
      <P>
        Cooperbam, uma cooperativa voltada para a agricultura familiar e
        o cultivo de bananas, é uma referência no setor agrícola.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Agrotech, Cooperative, Sustainability</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://cooperbam.example.com/presentation">
            Cooperbam Presentation <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://cooperbam.example.com/blog">
            Saiba mais sobre a Cooperbam{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://eibrunoruan.github.io/estrutura">
            <Badge mr={2}>Agriculture News</Badge>
            Cooperbam: Uma Cooperativa Inovadora
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://eibrunoruan.github.io/estrutura">
            <Badge mr={2}>Agro Example</Badge>
            Cooperbam destaca-se pela sustentabilidade
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage
        src="/images/works/cooperbam.png"
        alt="Cooperbam"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

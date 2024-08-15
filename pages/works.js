import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbInkdrop from '../public/images/works/mangapreso.png'
import thumbWalknote from '../public/images/works/about-cooperbam.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/aboutduepizza.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Projetos">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Trabalhos
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="mangapreso" title="Site de Mangás" thumbnail={thumbInkdrop}>
            Site de mangás utilizando estruturação em Java com front-end em Angular com bibliotecas relacionais.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="cooperbam"
            title="Cooperbam"
            thumbnail={thumbWalknote}
          >
            Website para cooperativa de bananas
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="duepizza" thumbnail={thumbMenkiki} title="Duepizza">
            App para realização de pedidos de Pizza
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'

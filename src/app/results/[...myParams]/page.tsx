import Gallery from '@/app/components/Gallery'

type Props = {
  params: {
    myParams: (string | undefined)[] // myParams pode ser um array de string ou undefined
  }
}

export function generateMetadata({ params: { myParams } }: Props) {
  const topic = myParams?.[0] ?? 'curated' // se o item do topico for undefined, eu vou colocar 'curated' como padrao na busca de imagens
  const page = myParams?.[1] ?? '1' // se o item da pagina for undefined, eu vou colocar '1' como padrao na pagina
  return {
    title: `Results for ${topic} - Page ${page}`,
  }
}
export default function searchResults({ params: { myParams } }: Props) {
  const topic = myParams?.[0] ?? 'curated' // se o item do topico for undefined, eu vou colocar 'curated' como padrao na busca de imagens
  const page = myParams?.[1] ?? '1' // se o item da pagina for undefined, eu vou colocar '1' como padrao na pagina

  return <Gallery topic={topic} page={page} />
}

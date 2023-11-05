import Gallery from '@/app/components/Gallery'

type Props = {
  params: {
    term: string
  }
}

export function generateMetadata({ params: { term } }: Props) {
  // adiciona o titulo abaixo na TAB
  return {
    title: `Results for ${term}`,
  }
}
export default function searchResults({ params: { term } }: Props) {
  return <Gallery topic={term} />
}

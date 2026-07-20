import { SectionTitle } from '../components/SectionTitle'
import { Gallery } from '../components/Gallery'
import type { GalleryItem, Language } from '../types'

interface GalleryPageProps {
  items: GalleryItem[]
  t: Language['gallery']
}

const categories = ['treinamentos', 'operacoes', 'eventos', 'projetos']

export function GalleryPage({ items, t }: GalleryPageProps) {
  return (
    <div className="section-padding pt-28">
      <div className="max-container">
        <SectionTitle
          title={t.title}
          subtitle="Registros de uma trajetória marcada por liderança, operações e resultados"
        />

        <Gallery items={items} categories={categories} filterLabel={t.all} />
      </div>
    </div>
  )
}

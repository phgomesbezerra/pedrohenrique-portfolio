import { SectionTitle } from '../components/SectionTitle'
import { Dashboard } from '../components/Dashboard'
import { BarChart, DonutChart } from '../components/Charts'
import { motion } from 'framer-motion'
import type { Stat, Language } from '../types'

interface ResultsProps {
  stats: Stat[]
  t: Language['results']
}

const barData = [
  { label: '2019', value: 85 },
  { label: '2020', value: 88 },
  { label: '2021', value: 82 },
  { label: '2022', value: 90 },
  { label: '2023', value: 92 },
  { label: '2024', value: 95 },
]

const donutData = [
  { label: 'Operações', value: 40, color: '#00d4ff' },
  { label: 'Gestão Equipes', value: 30, color: '#0066ff' },
  { label: 'Vendas', value: 20, color: '#7c3aed' },
  { label: 'Treinamentos', value: 10, color: '#06b6d4' },
]

export function Results({ stats, t }: ResultsProps) {
  return (
    <div className="section-padding pt-28">
      <div className="max-container">
        <SectionTitle
          title={t.title}
          subtitle="Métricas que comprovam uma trajetória de excelência e entregas consistentes"
        />

        <Dashboard stats={stats} title={t.indicators} />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass rounded-2xl p-6 mb-4">
              <h3 className="text-white font-semibold mb-1">Evolução de Performance</h3>
              <p className="text-muted text-sm mb-6">Índice de eficiência operacional ao longo dos anos</p>
              <BarChart data={barData} height={220} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-1">Distribuição de Atuação</h3>
              <p className="text-muted text-sm mb-6">Áreas de maior impacto e contribuição</p>
              <DonutChart data={donutData} size={220} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

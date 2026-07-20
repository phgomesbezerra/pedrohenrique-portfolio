import { motion } from 'framer-motion'

interface BarChartProps {
  data: { label: string; value: number; color?: string }[]
  height?: number
}

export function BarChart({ data, height = 200 }: BarChartProps) {
  const max = Math.max(...data.map((d) => d.value))

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-end gap-3" style={{ height }}>
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${(item.value / max) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
              className="w-full rounded-t-lg bg-gradient-to-t from-primary-500/60 to-primary-500/20 relative group cursor-pointer"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.value}%
              </div>
            </motion.div>
            <span className="text-xs text-muted-light text-center mt-1">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

interface DonutChartProps {
  data: { label: string; value: number; color: string }[]
  size?: number
}

export function DonutChart({ data, size = 200 }: DonutChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0)
  let cumulative = 0

  const segments = data.map((item) => {
    const startAngle = (cumulative / total) * 360
    cumulative += item.value
    const endAngle = (cumulative / total) * 360
    return { ...item, startAngle, endAngle }
  })

  const radius = 80
  const circumference = 2 * Math.PI * radius

  return (
    <div className="glass rounded-2xl p-6 flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {segments.map((segment, index) => {
          const arcLength = ((segment.endAngle - segment.startAngle) / 360) * circumference
          const offset = (segment.startAngle / 360) * circumference

          return (
            <motion.circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth={20}
              strokeDasharray={`${arcLength} ${circumference - arcLength}`}
              strokeDashoffset={-offset}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset: -offset }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
            />
          )
        })}
        <circle cx={size / 2} cy={size / 2} r={radius - 20} fill="rgba(10,10,26,0.5)" />
        <text x={size / 2} y={size / 2 - 5} textAnchor="middle" className="fill-white text-lg font-bold">
          {total}
        </text>
        <text x={size / 2} y={size / 2 + 12} textAnchor="middle" className="fill-white/40 text-xs">
          Total
        </text>
      </svg>
      <div className="flex flex-wrap gap-3 mt-4 justify-center">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-xs text-muted">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

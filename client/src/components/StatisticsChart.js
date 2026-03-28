import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';

const perspectiveColors = {
  'left': '#2563EB',
  'center-left': '#7C3AED',
  'center': '#059669',
  'center-right': '#D97706',
  'right': '#DC2626',
};

const perspectiveLabels = {
  'left': 'Left',
  'center-left': 'Ctr-Left',
  'center': 'Center',
  'center-right': 'Ctr-Right',
  'right': 'Right',
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="chart-tooltip">
        <p className="tooltip-perspective">{data.fullLabel}</p>
        <p className="tooltip-count">{data.count} articles</p>
        <p className="tooltip-pct">{data.percentage}% of coverage</p>
      </div>
    );
  }
  return null;
};

function StatisticsChart({ statistics }) {
  const chartData = statistics.stats.map(s => ({
    ...s,
    label: perspectiveLabels[s.perspective] || s.perspective,
    fullLabel: s.perspective.charAt(0).toUpperCase() + s.perspective.slice(1),
    fill: perspectiveColors[s.perspective] || '#64748b',
  }));

  const dominantPerspective = [...chartData].sort((a, b) => b.count - a.count)[0];

  return (
    <div className="statistics-chart">
      <div className="chart-header">
        <h3 className="panel-title">📈 Coverage by Perspective</h3>
        <div className="chart-summary">
          <span className="total-articles">{statistics.total} total articles</span>
          {dominantPerspective && (
            <span className="dominant-label" style={{ color: perspectiveColors[dominantPerspective.perspective] }}>
              Most coverage: {dominantPerspective.fullLabel} ({dominantPerspective.percentage}%)
            </span>
          )}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="label" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={{ stroke: '#334155' }} />
          <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={{ stroke: '#334155' }} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="count" radius={[4, 4, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={index} fill={entry.fill} />
            ))}
            <LabelList dataKey="percentage" position="top" formatter={(v) => `${v}%`} style={{ fill: '#94a3b8', fontSize: 11 }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="legend">
        {chartData.map(item => (
          <div key={item.perspective} className="legend-item">
            <span className="legend-dot" style={{ background: item.fill }}></span>
            <span className="legend-label">{item.fullLabel}</span>
            <span className="legend-count">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatisticsChart;

import { h } from "preact"
import { useMemo } from "preact/hooks"

function domain (values: number[], percent: number, invert: boolean = false, as_log: boolean = false): [number, number]
{
  const max = Math.max(...values)
  const min = Math.min(...values)
  const diff = Math.max(max - min, Number.EPSILON)
  const ratio = percent / 100
  const margin = diff * ratio

  let max_marg = max + margin
  let min_marg = min - margin

  if (as_log)
  {
    max_marg = Math.pow(10, Math.ceil(Math.log10(max))) * (1 + ratio)
    min_marg = Math.pow(10, Math.floor(Math.log10(min))) * (1 - ratio)

    if (Math.sign(min_marg) !== 0 && Math.sign(min_marg) !== Math.sign(max_marg))
    {
      if (Math.abs(min_marg - 0) < Math.abs(max_marg - 0))
      {
        min_marg = Number.EPSILON
      }
      else
      {
        max_marg = -Number.EPSILON
      }
    }
  }

  return invert ? [max_marg, min_marg] : [min_marg, max_marg]
}


interface TickMark
{
  value: number
  offset: number
}

interface TickMarkLengths
{
  end: number
  mid: number
}

interface Axis
{
  domain: [number, number]
  range: [number, number]
  as_log: boolean
  tick_lengths: TickMarkLengths
}

// Adapted from: https://wattenberger.com/blog/react-and-d3
const GraphAxes = ({ x_axis, y_axis }: { x_axis: Axis, y_axis: Axis }) => {

  const [left, right] = x_axis.range
  const [top, bottom] = y_axis.range

  const ticks: { x_ticks: TickMark[], y_ticks: TickMark[] } = useMemo(() => {

    const x_scale = (x_axis.as_log ? d3.scaleLog() : d3.scaleLinear())
      .domain(x_axis.domain)
      .range(x_axis.range)
    const width = right - left

    const y_scale = (y_axis.as_log ? d3.scaleLog() : d3.scaleLinear())
      .domain(y_axis.domain)
      .range(y_axis.range)
    const height = bottom - top

    const pixels_per_tick = 20

    const number_of_x_ticks_target = Math.max(1, Math.floor(width / pixels_per_tick))
    const number_of_y_ticks_target = Math.max(1, Math.floor(height / pixels_per_tick))

    return {
      x_ticks: x_scale.ticks(number_of_x_ticks_target)
        .map(value => ({ value, offset: x_scale(value) })),
      y_ticks: y_scale.ticks(number_of_y_ticks_target)
        .map(value => ({ value, offset: y_scale(value) }))
    }
  }, [
    x_axis.domain.join("-"),
    x_axis.range.join("-"),
    y_axis.domain.join("-"),
    y_axis.range.join("-")
  ])

  return <g>
    <XAxis
      top={bottom}
      ticks={ticks.x_ticks}
      tick_lengths={x_axis.tick_lengths}
      range={x_axis.range}
    />
    <YAxis
      left={left}
      ticks={ticks.y_ticks}
      tick_lengths={y_axis.tick_lengths}
      range={y_axis.range}
    />
  </g>
}


interface XAxisProps
{
  top: number
  ticks: TickMark[]
  tick_lengths: TickMarkLengths
  range: [number, number]
}

interface YAxisProps
{
  left: number
  ticks: TickMark[]
  tick_lengths: TickMarkLengths
  range: [number, number]
}


const XAxis = ({
  top,
  ticks,
  tick_lengths,
  range,
}: XAxisProps) => {

  return (
    <svg>
      <path
        d={[
          "M", range[0], top + tick_lengths.end,
          "v", -tick_lengths.end,
          "H", range[1],
          "v", tick_lengths.end,
        ].join(" ")}
        fill="none"
        stroke="currentColor"
        stroke-width="0.5"
      />

      {ticks.map(({ value, offset }) => (
        <g
          key={value}
          transform={`translate(${offset}, 0)`}
        >
          <line
            y1={top}
            y2={top + tick_lengths.mid}
            stroke="currentColor"
            stroke-width="0.5"
          />
          <text
            key={value}
            style={{
              fontSize: "5px",
              textAnchor: "middle",
              transform: `translateY(${top + Math.max(tick_lengths.end, tick_lengths.mid) + 5}px)`
            }}>
            { value }
          </text>
        </g>
      ))}
    </svg>
  )
}


const YAxis = ({
  left,
  ticks,
  tick_lengths,
  range,
}: YAxisProps) => {

  return (
    <svg>
      <path
        d={[
          "M", left - tick_lengths.end, range[0],
          "h", tick_lengths.end,
          "V", range[1],
          "h", -tick_lengths.end,
        ].join(" ")}
        fill="none"
        stroke="currentColor"
        stroke-width="0.5"
      />

      {ticks.map(({ value, offset }) => (
        <g
          key={value}
          transform={`translate(0, ${offset})`}
        >
          <line
            x1={left}
            x2={left - tick_lengths.mid}
            stroke="currentColor"
            stroke-width="0.5"
          />
          <text
            key={value}
            style={{
              fontSize: "5px",
              textAnchor: "end",
              alignmentBaseline: "central",
              transform: `translateX(${left - Math.max(tick_lengths.end, tick_lengths.mid) - 1}px)`,
            }}>
            { value }
          </text>
        </g>
      ))}
    </svg>
  )
}

export const Graph = ({ results }: { results: [number, number][] }) =>
{

  const x_as_log = true
  const x_axis: Axis = {
    domain: domain(results.map(v => v[0]), 15, false, x_as_log),
    range: [15, 90],
    as_log: x_as_log,
    tick_lengths: {
      end: 0,
      mid: 3,
    },
  }
  const y_axis: Axis = {
    domain: domain(results.map(v => v[1]), 15, true),
    range: [10, 90],
    as_log: false,
    tick_lengths: {
      end: 0,
      mid: 3,
    },
  }

  const { x_scale, y_scale } = useMemo(() => {

    const x_scale = (x_axis.as_log ? d3.scaleLog() : d3.scaleLinear())
      .domain(x_axis.domain)
      .range(x_axis.range)

    const y_scale = (y_axis.as_log ? d3.scaleLog() : d3.scaleLinear())
      .domain(y_axis.domain)
      .range(y_axis.range)

    return { x_scale, y_scale }
  }, [
    x_axis.domain.join("-"),
    x_axis.range.join("-"),
    y_axis.domain.join("-"),
    y_axis.range.join("-")
  ])

  return <svg viewBox="0 0 100 100">
    {results.map(v => <circle
      cx={x_scale(v[0])}
      cy={y_scale(v[1])}
      r="1"
      fill="cornflowerblue"
    />)}
    <GraphAxes
      x_axis={x_axis}
      y_axis={y_axis}
    />
  </svg>
}

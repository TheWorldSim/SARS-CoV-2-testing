import { h } from "preact"
import { Section } from "./common"
import { useRef, useEffect, useMemo } from "preact/hooks"
/// <reference types="d3" />
declare global {
  const d3: typeof d3;
}


function parse_results_text (results_text: string)
{
  let results = []

  if (results_text.length)
  {
    results = results_text
      .split("\n")
      .map(row => row.split(/\s*,\s*/).map(v => parseFloat(v)))
  }

  return results
}

// Results section and layout

export function ResultsSection (props: {
  results_text: string,
  on_change_results_text: (results_text: string) => void,
})
{
  const subtitle = <div>
    <p>
      Contains the results from conducting the protocol.
    </p>
  </div>

  const results = parse_results_text(props.results_text)

  let results_table = <div></div>
  if (results.length) results_table = <table className="data_results_table">
    <thead></thead>
    <tbody>
      {results.map(row => <tr>
        {row.map(v => <td>{v}</td>)}
      </tr>)}
    </tbody>
  </table>

  const content = <div>
    <textarea
      rows={5}
      placeholder="type or paste your data here, in comma or tab delimited format"
      className="data_input_text_area"
      value={props.results_text}
      onInput={e => props.on_change_results_text(e.currentTarget.value)}
    />
    {results_table}
    <svg viewBox="0 0 100 100">
      <AnimatedCircle index={1} isShowing={true}/>
      <AnimatedCircle index={2} isShowing={true}/>
      <Graph
        x_domain={[0, 100]}
        x_range={[15, 90]}
        y_domain={[0, 100]}
        y_range={[10, 90]}
      />
    </svg>
  </div>

  return <Section title="Results" subtitle={subtitle} content={content} />
}

const AnimatedCircle = ({ index, isShowing }) => {
  const wasShowing = useRef(false)
  useEffect(() => {
    wasShowing.current = isShowing
  }, [isShowing])

  return (
    <circle
      cx={index * 15 + 10}
      cy={10}
      r="3"
      fill={
        wasShowing.current ? (isShowing ? "lightgrey" : "tomato") : "cornflowerblue"
      }
    />
  )
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

// Adapted from: https://wattenberger.com/blog/react-and-d3
const Graph = ({
  x_domain,
  x_range,
  y_domain,
  y_range,
}) => {

  const [left, right] = x_range
  const [top, bottom] = y_range

  const ticks: { x_ticks: TickMark[], y_ticks: TickMark[] } = useMemo(() => {

    const x_scale = d3.scaleLinear()
      .domain(x_domain)
      .range(x_range)
    const width = right - left

    const y_scale = d3.scaleLinear()
      .domain(y_domain)
      .range(y_range)
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
    x_domain.join("-"),
    x_range.join("-"),
    y_domain.join("-"),
    y_range.join("-")
  ])

  const tick_lengths: TickMarkLengths = {
    end: 4,
    mid: 3,
  }

  return <g>
    <XAxis
      top={bottom}
      ticks={ticks.x_ticks}
      tick_lengths={tick_lengths}
      range={x_range}
    />
    <YAxis
      left={left}
      ticks={ticks.y_ticks}
      tick_lengths={tick_lengths}
      range={y_range}
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
              transform: `translateY(${top + 10}px)`
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
              transform: `translateX(${left - tick_lengths.end}px)`,
            }}>
            { value }
          </text>
        </g>
      ))}
    </svg>
  )
}

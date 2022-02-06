import React, { useEffect, useRef} from 'react'
import {scaleLinear, max, arc, interpolate, scaleOrdinal, schemeCategory10} from 'd3'


function Radial() {
    const width= 650,
        height = 600,
        chartRadius = height/2 - 40;
    const color = scaleOrdinal(schemeCategory10)

    const data = [
        {
          name: "Apple",
          value : 2.861,
        },
        {
          name: "Mircrosoft",
          value: 2.861,
        },
        {
          name : "Saudi Aramco",
          value : 1.965,
        },
        {
          name : "Google",
          value : 1.961,
        },
        {
          name : "Apple",
          value : 1.965,
        },
        {
          name : "Amazon",
          value: 1.598,
        },
        
      ]
    

    // const chartArcs = useRef(chartArcs)
    const PI = Math.PI,
        arcMinRadius = 10,
        arcPadding = 10,
        labelPadding = -120,
        numTicks = 10;

    //scale
    const scale = scaleLinear()
     .domain([0, max(data, d => d.value) * 1.2])
     .range([0, 2 * PI])

    const ticks = scale.ticks(numTicks).slice(0,-1)
    const keys = data.map((d,i) => d.name)
    // console.log(keys)

    const getInnerRadius = index => (arcMinRadius + (numArcs - (index + 1)) * (arcWidth + arcPadding))
    const getOuterRadius = index => (getInnerRadius(index) + arcWidth);

    const arcGenerator = arc().cornerRadius(10)
        // .innerRadius((d,i) => getInnerRadius(2))
        // .outerRadius((d,i) => getOuterRadius(2))
        // .startAngle(0)
        // .endAngle((d,i) => scale(d))

    //number of arcs
    const numArcs = keys.length
    const arcWidth = (chartRadius - arcMinRadius - numArcs * arcPadding) / numArcs;


    function arcTween(d, i){
        const interpolate = interpolate(0, d.value)
        return t => arcGenerator(interpolate(i), i)
    }

    const rad2deg = angle => angle * 180 / PI;

    

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${width/2},${height/2})`}>
                {data.map((d,i)=> (
                    <g className='r axis'>
                        {/* <circle r={getOuterRadius(i) + arcPadding}/> */}
                        {/* <circle r={25* i + arcPadding}/> */}
                        <text className='font-bold text-lg' x={labelPadding} y={-getOuterRadius(i) + arcPadding}>{d.name}</text>
                    </g>
                ))}

                {ticks.map((d,i) => (
                    <g className='a axis' transform={`rotate(${rad2deg(scale(d)) - 90})`}>
                        {/* <line x2={chartRadius}/> */}
                        <text className='font-bold text-gray-500' style={{textAnchor: (scale(d) >= PI && scale(d) < 2 * PI ? 'end': null)}}x={chartRadius + 10} transform={`rotate(${90 - rad2deg(scale(d))},${chartRadius+ 10},0)`}>${d}</text>
                    </g>
                ))}
                {data.map((d,i) => (
                    <g className='data'>
                        {/* {console.log(arcGenerator(d))} */}
                        <path d={arcGenerator({innerRadius: getInnerRadius(i), outerRadius: getOuterRadius(i), startAngle: 0, endAngle: scale(d.value) })} style={{fill: color(d)}} className='arc'/>
                        {/* {console.log(arcGenerator(d))} */}
                        {/* {console.log(arcGenerator({innerRadius: getInnerRadius(i), outerRadius: getOuterRadius(i), endAngle: scale(d) }))} */}
                    </g>
                ))}
            </g>
        </svg>
    )
}

export default Radial
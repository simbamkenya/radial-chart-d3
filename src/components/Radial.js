import React, { useEffect, useRef, useState} from 'react'
import {scaleLinear, max, arc, interpolate, scaleOrdinal, schemeCategory10, select} from 'd3'
import { gsap } from 'gsap'


function Radial() {
    const [toolTip, setTooltip] = useState('')
    const width= 650,
        height = 600,
        chartRadius = height/2 - 40;

    const svgRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(()=>{
        gsap.from(svgRef.current, {
            x: 150
          });
    }, [])

    console.log(gsap)

    const colors = ['#FFE44D', '#FFD401', '#E98C00', '#E98C00', '#E88D00', '#B8B8B8' ]
    const color = scaleOrdinal(colors)

    const data = [
        {
          name: "Apple",
          value : 2.861,
          country: 'USA'
        },
        {
          name: "Mircrosoft",
          value: 2.861,
          country: 'USA'
        },
        {
          name : "Saudi Aramco",
          value : 1.965,
          country: 'Saudi Arabia'
        },
        {
          name : "Google",
          value : 1.961,
          country: 'USA'
        },
        {
          name : "Apple",
          value : 1.965,
          country: 'USA'
        },
        {
          name : "Amazon",
          value: 1.598,
          country: 'USA'
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
     .domain([0, max(data, d => d.value) * 1.35])
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
    // const container = select('#radialContainer')
    //     .style('position', 'relative')

    select('#svgcontainer')
    const tooltip = select('.tooltip')


    const handleMouseMove = (e,d) => {
        const value = d.value;
        const country = d.country;
          setTooltip({value, country})
        //   console.log(mousePosition)
        // tooltip.style('left', (e.pageX + 10) + 'px')
        //     .style('top', (e.pageY - 25) + 'px')

            // .attr('class', 'font-medium absolute text-lg shadow-md text-white px-2 py-2 border-gray-200')
            // .style('display', 'inline-block')
            // .style('z-index', 999)
            // .html(`${d.name}: $${d.value} T <br/> ${d.country}`)

            // console.log({e})
    }

    const handleMouseOut = (e, d) => {
        tooltip.style('opacity', 1)

    }


    return (
            <div id='svgcontainer' ref={svgRef} className='relative'>
                {/* {console.log('value', toolTip.value)} */}
               <div className='absolute inset-x-0 top-0 left-12 h-16 w-40 tooltip font-medium text-lg shadow-md text-white px-2 py-2'>
                   <div>Value: ${toolTip.value} T</div>
                   <div>Country: {toolTip.country}</div>
               </div>
            <svg  width={width} height={height} className='fill-white'>
                <g transform={`translate(${width/2},${height/2})`}>
                    {data.map((d,i)=> (
                        <g className='r axis'>
                            {/* <circle r={getOuterRadius(i) + arcPadding}/> */}
                            {/* <circle r={25* i + arcPadding}/> */}
                            <text key={i} className='font-bold text-lg' x={labelPadding} y={-getOuterRadius(i) + arcPadding}>{d.name}</text>
                        </g>
                    ))}

                    {data.map((d,i) => (
                        <g className='data' key={i}>
                            {/* {console.log(arcGenerator(d))} */}
                            <path d={arcGenerator({innerRadius: getInnerRadius(i), outerRadius: getOuterRadius(i), startAngle: 0, endAngle: 2 * Math.PI* 0.78 })} style={{fill: 'gray'}} className='arc'/>
                            <path onMouseOut={handleMouseOut} onMouseMove={(e) => handleMouseMove(e,d)} d={arcGenerator({innerRadius: getInnerRadius(i), outerRadius: getOuterRadius(i), startAngle: 0, endAngle: scale(d.value) })} style={{fill: color(d)}} className='arc hover:opacity-50'><title className='text-white'>{d.name}</title></path>

                            {/* <text x={chartRadius -120} transform={`rotate(${rad2deg(90 * 0.3 * i) - 90})`}>00000000</text> */}
                            {/* {console.log(arcGenerator(d))} */}
                            {/* {console.log(arcGenerator({innerRadius: getInnerRadius(i), outerRadius: getOuterRadius(i), endAngle: scale(d) }))} */}
                       </g>
                    ))}

                    {ticks.map((d,i) => (
                        <g key={i} className='a axis' transform={`rotate(${rad2deg(scale(d)) - 90})`}>
                            <line x2={chartRadius} style={{strokeDasharray: 4, stroke: 'white', strokeLinecap:"round", zIndex:999}}/>
                            <text className='font-bold text-gray-500' style={{textAnchor: (scale(d) >= PI && scale(d) < 2 * PI ? 'end': null)}}x={chartRadius + 10} transform={`rotate(${90 - rad2deg(scale(d))},${chartRadius+ 10},0)`}>${d} T</text>
                        </g>
                    ))}
                </g>
            </svg>

        </div>
    )
}

export default Radial

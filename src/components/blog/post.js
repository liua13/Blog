import React, { useEffect } from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import * as d3 from "d3"
import $ from "jquery"

import LinkWrapper from "../linkWrapper"
import Nav from "../nav"
import Footer from "../footer"

import "../../styles/data_vis.css"

const ImageWrapper = styled.div`
  height: 70vh;
  overflow: hidden;
  margin: 75px 0 0 0;
`

const BackgroundText = styled.div`
  color: white;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 55%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 80%;
`

const BodyWrapper = styled.div`
  width: 50%;
  margin: 50px auto 75px auto;

  @media (max-width: 825px) {
    width: 425px;
  }
  @media (max-width: 525px) {
    width: 80%;
  }
`

const HeaderWrapper = styled.div`
  padding: 0px 0px 30px 0;
  border-bottom: 1px solid #a9a9a9;
`

const Title = styled.div`
  font-size: 40px;
  margin: 0 0 5px 0;
`

// const Subtitle = styled.div`
//   font-size: 20px;
//   width: 100%;
// `

const Caption = styled.div`
  font-size: 20px;
`

const Date = styled.div`
  font-size: 19px;
  font-family: "Barlow", sans-serif;
`

const Category = styled.span`
  font-size: 15px;
  text-transform: uppercase;

  a {
    color: black;
  }

  a:hover {
    color: purple;
  }
`

const Content = styled.div`
  margin: 30px 0;
  font-size: 18px;

  p {
    margin: 20px 0;
  }
`

const BlogPost = props => {
  const {
    slug,
    date,
    title,
    subtitle,
    image,
    caption,
    categories,
    data_vis,
    content,
    previous,
    next,
  } = props.pageContext

  const ImageComponent = styled(BackgroundImage)`
    min-height: 100vh;
    ::before {
      filter: brightness(60%);
    }
  `

  useEffect(() => {
    if (data_vis) {
      if (data_vis[1] === "json") {
        d3.json(data_vis[0])
          .then(oldData => {
            let data = oldData.map(element => {
              const newDate = element.date.split("T")[0]
              return {
                ...element,
                date: parseDate(newDate),
              }
            })

            const sortByDateAscending = (obj1, obj2) => {
              return obj1.date - obj2.date
            }
            // sort data
            data = data.sort(sortByDateAscending)
            updateCharts(data)

            let resize
            window.addEventListener("resize", () => {
              clearTimeout(resize)
              resize = setTimeout(() => updateCharts(data), 150)
            })
          })
          .catch(error => console.log(error))
      }
    }
  }, [])

  const updateCharts = data => {
    d3.selectAll(".chart").html(null)
    $(".lineGraph").each((i, obj) => {
      const id = $(obj).attr("id")
      displayLineGraph(id, data)
    })

    $(".barGraph").each((i, obj) => {
      const id = $(obj).attr("id")
      displayBarGraph(id, data)
    })

    $(".pieChart").each((i, obj) => {
      const id = $(obj).attr("id")
      displayPieChart(id, data)
    })
  }

  return (
    <div>
      <Nav />
      <ImageWrapper>
        <ImageComponent fluid={image}>
          <BackgroundText>
            <Fade bottom>
              <>
                <Title>{title}</Title>
                <Caption>{caption}</Caption>
              </>
            </Fade>
          </BackgroundText>
        </ImageComponent>
      </ImageWrapper>
      {/* <Subtitle>{subtitle}</Subtitle> */}
      <BodyWrapper>
        <HeaderWrapper>
          <Date>{date}</Date>
          {categories.map((category, index) => (
            <Category key={category}>
              {index ? ", " : ""}
              <LinkWrapper to={`/category/${category}/`}>
                {category}
              </LinkWrapper>
            </Category>
          ))}
        </HeaderWrapper>

        <Content dangerouslySetInnerHTML={{ __html: content }}></Content>

        <NeighborPostWrapper>
          <div>
            <PreviousNext postInfo={previous} symbol="<" text="previous" />
          </div>

          <div>
            <PreviousNext postInfo={next} symbol=">" text="next" />
          </div>
        </NeighborPostWrapper>
      </BodyWrapper>

      <Footer />
      {/* <span dangerouslySetInnerHTML={{__html:`<script></script>`}} */}
    </div>
  )
}

export default BlogPost

// --------------------
// for the PREVIOUS / NEXT links on bottom of page

const PreviousNext = ({ postInfo, symbol, text }) => {
  if (postInfo) {
    return (
      <PreviousNextWrapper>
        <PreviousNextLink to={`/post${postInfo.fields.slug}`}>
          <Symbol style={{ marginRight: "10px" }}>
            {symbol === "<" ? symbol : ""}
          </Symbol>
        </PreviousNextLink>

        <div>
          <PreviousNextText>{text} post</PreviousNextText>
          <PreviousNextLink
            to={`/post${postInfo.fields.slug}`}
            style={{ fontSize: "20px" }}
          >
            {postInfo.frontmatter.title}
          </PreviousNextLink>
        </div>

        <PreviousNextLink to={`/post${postInfo.fields.slug}`}>
          <Symbol style={{ marginLeft: "10px" }}>
            {symbol === ">" ? symbol : ""}
          </Symbol>
        </PreviousNextLink>
      </PreviousNextWrapper>
    )
  } else {
    return <span></span>
  }
}

const NeighborPostWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const PreviousNextLink = styled(LinkWrapper)`
  :hover {
    color: #a9a9a9;
  }
`

const Symbol = styled.div`
  font-size: 25px;
  font-weight: lighter;
  height: 100%;
`

const PreviousNextWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
`

const PreviousNextText = styled.div`
  text-transform: uppercase;
  color: #a9a9a9;
`
// --------------------

const parseDate = d3.timeParse("%Y-%m-%d")
const formatDate = d3.timeFormat("%Y-%m-%d")
const displayDate = d3.timeFormat("%b %-d, %Y")
const parseDayOfWeek = d3.timeFormat("%a")

const margin = { left: 50, right: 50, top: 25, bottom: 0 }

// colors used for all graphs
const legendColors = d3.scaleOrdinal().range(d3.schemeDark2)

const allDataKeys = [
  "distance",
  "restingHeartRate",
  "minutesSleep",
  "minutesSleepInBed",
  "minutesNapped",
  "minutesNappedInBed",
  "totalSleep",
  "totalSleepInBed",
]

const allLegendKeys = [
  "Distance",
  "Resting Heart Rate",
  "Main Sleep (deep + light + rem)",
  "Main Sleep in Bed (deep + light + rem + wake)",
  "Nap (deep + light + rem)",
  "Nap in Bed (deep + light + rem + wake)",
  "Total Sleep (deep + light + rem)",
  "Total Sleep in Bed (deep + light + rem + wake)",
]

const tooltip = d3.select("body").append("div").attr("class", `tooltip`)

const WINTER = "Winter",
  SPRING = "Spring",
  SUMMER = "Summer",
  FALL = "Fall"
const seasons = {}

seasons[SPRING] = {
  start: 221, // Mar 21
  end: 520, // Jun 20
}

seasons[SUMMER] = {
  start: 521, // Jun 21
  end: 820, // Sep 20
}

seasons[FALL] = {
  start: 821, // Sep 21
  end: 1120, // Dec 20
}

const displayLineGraph = (id, data) => {
  const height = 300
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  const lineGraphWidth = width >= 750 ? width - 225 : width - 75
  console.log(lineGraphWidth)

  let keys = $(`#${id}`).data().value
  keys = keys ? keys.split(" ") : allDataKeys

  let rolling = 1

  if (keys[keys.length - 1].indexOf("rolling") !== -1) {
    rolling = +keys.pop().split("-")[1]
  }

  const [dataKeys, legendKeys] = getKeys(keys)
  data = getMovingAverage(data, rolling)

  const x = d3
    .scaleTime()
    .domain(d3.extent(data, d => d.date))
    .range([0, lineGraphWidth])

  const xAxis = d3
    .axisBottom(x)
    .ticks(d3.timeMonth.every(1))
    .tickFormat(d => {
      return d.getMonth() === 0
        ? d3.timeFormat("%b %Y")(d)
        : d3.timeFormat("%b")(d)
    })

  const y = d3.scaleLinear().domain([0, 1]).range([height, 0])
  const yAxis = d3.axisLeft(y)

  const svg = d3
    .select(`#${id}`)
    .append("svg")
    .attr("height", 350)
    .attr("width", width)

  const chartGroup = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)

  chartGroup
    .append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0,${height})`)
    .call(xAxis)
    .selectAll(".x .tick text") // select all the x tick texts
    .call(function (t) {
      t.each(function (d) {
        const self = d3.select(this)
        const [month, year] = self.text().split(" ") // get the text and split it
        self.text("") // clear it out

        self
          .append("tspan") // insert two tspans
          .attr("x", 0)
          .attr("dy", 5)
          .text(month)
        self.append("tspan").attr("x", 0).attr("dy", 10).text(year)
      })
    })

  chartGroup.append("g").attr("class", "y axis").call(yAxis)

  dataKeys.forEach((key, i) => {
    chartGroup
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", () => {
        return legendColors(dataKeys[i])
      })
      .attr("class", `line ${dataKeys[i]}Line ${id}Line`)
      .attr("stroke-width", 1)
      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            return x(d.date)
          })
          .y(function (d) {
            return y(d[key])
          })
      )

    const mouseCircles = chartGroup
      .selectAll(`.mouseCircle${id}`)
      .data(dataKeys)
      .enter()
      .append("g")
      .attr("class", `mouseCircle${id}`)

    // a circle for every data point
    mouseCircles.append("circle").style("fill", function (d, i) {
      return legendColors(d)
    })
  })

  createLegend(
    svg,
    chartGroup,
    dataKeys,
    legendKeys,
    legendColors,
    lineGraphWidth,
    height,
    width
  )

  const mouseG = chartGroup.append("g").attr("class", "mouseG")
  mouseG.append("path").attr("id", `mouseLine${id}`)

  mouseG
    .append("rect")
    .attr("width", lineGraphWidth)
    .attr("height", height)
    .attr("fill", "none")
    .attr("pointer-events", "all")
    .on("mouseout", function () {
      d3.select(`#mouseLine${id}`).style("opacity", "0")
      d3.selectAll(`.mouseCircle${id} circle`).style("opacity", 0)
      tooltip.style("display", "none")
    })
    .on("mouseover", function (d) {
      d3.select(`#mouseLine${id}`).style("opacity", "1")
      d3.selectAll(`.mouseCircle${id} circle`).style("opacity", 1)
      tooltip.style("display", "block")
    })
    .on("mousemove", function () {
      let [mouseX, _] = d3.mouse(this)

      // move the vertical line
      d3.select(`#mouseLine${id}`).attr("d", function () {
        return `M${mouseX},${height} ${mouseX},0`
      })

      // text for tooltip
      const hoveredDate = formatDate(x.invert(mouseX))
      let hoveredData = data.filter(element => {
        return formatDate(element.date) === hoveredDate
      })
      hoveredData = hoveredData[0]

      let text = `<b>${displayDate(parseDate(hoveredDate))}</b> <br>`
      if (hoveredData) {
        dataKeys.forEach((key, index) => {
          text +=
            key === "date"
              ? ""
              : `${legendKeys[index].split("(")[0]} ${hoveredData[key].toFixed(
                  2
                )} <br>`
        })
      } else {
        text += "No info available for this date. Sorry!"
      }

      const offsetTop = $(`.${id}Line`).offset().top
      const graphHeight = $(`.${id}Line`)[0].getBoundingClientRect().height
      const tooltipSizes = $(".tooltip")[0].getBoundingClientRect()

      tooltip
        .html(text)
        .style("left", `${d3.event.pageX + 3}px`)
        .style("top", () => {
          return `${offsetTop + (graphHeight - tooltipSizes.height) / 2}px`
        })

      d3.selectAll(`.mouseCircle${id} circle`)
        .attr("cx", d => {
          return x(parseDate(hoveredDate))
        })
        .attr("cy", d => {
          return hoveredData ? y(hoveredData[d]) : -100000
        })
        .attr("r", 4)
    })
}

// creates legend for line graph
const createLegend = (
  svg,
  chartGroup,
  dataKeys,
  legendKeys,
  legendColors,
  lineGraphWidth,
  height,
  width
) => {
  const changeHeight = (d, xValue) => {
    let currentXValue = xValue
    xValue += 20
    if (d.indexOf("(") !== -1) {
      xValue += 10
    }
    return [currentXValue, xValue]
  }

  const getLegendKeyFromDataKey = dataKey => {
    const index = dataKeys.indexOf(dataKey)
    return index === -1 ? null : legendKeys[index]
  }

  const onMouseover = (d, i) => {
    svg.selectAll(".line").style("stroke-opacity", 0.1)
    svg.selectAll(".legend").style("opacity", 0.1)
    d3.selectAll(`.${dataKeys[i]}Legend`).style("opacity", 1)
    svg.selectAll(`.${dataKeys[i]}Line`).style("stroke-opacity", 1)
  }

  const onMouseout = d => {
    svg.selectAll(".line").style("stroke-opacity", 1)
    svg.selectAll(".legend").style("opacity", 1)
  }

  let xDot = 0 // x position of legend dots
  let xLabel = 0 // x position of legend label

  const legend = chartGroup
    .append("g")
    .attr("class", "legendGroup")
    .attr("height", height)
    .attr("width", 225)
    .attr("transform", `translate(0, ${margin.top})`)
    .attr("display", () => {
      return width >= 750 ? "block" : "none"
    })

  legend
    .selectAll("mydots")
    .data(dataKeys)
    .enter()
    .append("circle")
    .attr("cx", 25)
    .attr("cy", d => {
      d = getLegendKeyFromDataKey(d)
      const [currentXValue, tempXDot] = changeHeight(d, xDot)
      xDot = tempXDot
      return currentXValue
    })
    .attr("r", 4)
    .attr("transform", `translate(${lineGraphWidth}, 0)`)
    .attr("class", function (d, i) {
      return `legend ${dataKeys[i]}Legend`
    })
    .style("fill", function (d) {
      return legendColors(d)
    })
    .on("mouseover", (d, i) => onMouseover(d, i))
    .on("mouseout", d => onMouseout(d))

  legend
    .selectAll("mylabels")
    .data(legendKeys)
    .enter()
    .append("text")
    .attr("y", d => {
      const [currentXValue, tempXLabel] = changeHeight(d, xLabel)
      xLabel = tempXLabel
      return currentXValue
    })
    .attr("transform", `translate(${lineGraphWidth + 35}, 0)`)
    .attr("class", function (d, i) {
      return `legend ${dataKeys[i]}Legend`
    })
    .style("fill", function (d) {
      return "#43464b"
    })
    // .text(function (d) {
    //   return d;
    // })
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")
    .each(function (d) {
      let [label, sublabel] = d.split("(")
      sublabel = sublabel ? sublabel.slice(0, -1) : ""
      d3.select(this)
        .append("tspan")
        .attr("x", 0)
        .attr("dy", "0em")
        .attr("class", "label")
        .style("alignment-baseline", "middle")
        .style("font-size", 17)
        .text(label)
      d3.select(this)
        .append("tspan")
        .attr("x", 0)
        .attr("dy", "1.25em")
        .attr("class", "sublabel")
        .style("alignment-baseline", "middle")
        .style("font-size", 10)
        .text(sublabel)
    })
    .on("mouseover", (d, i) => onMouseover(d, i))
    .on("mouseout", d => onMouseout(d))
}

// --------------------

// returns appropriate dataKeys and legendKeys
const getKeys = dataKeys => {
  const legendKeys = []
  dataKeys.map(key => {
    const index = allDataKeys.indexOf(key)
    if (index !== -1) {
      legendKeys.push(allLegendKeys[index])
      return key
    }
  })
  return [dataKeys, legendKeys]
}

function getMovingAverage(values, N) {
  if (N === 1) return values
  N = N > values.length ? values.length - 1 : N

  let dataIndex = 0
  let newDataIndex = 0
  const sums = new Array(allDataKeys.length).fill(0)
  const newData = new Array(values.length - N + 1).fill(null)

  for (let n = N - 1; dataIndex < n; ++dataIndex) {
    allDataKeys.forEach((key, index) => {
      sums[index] += values[dataIndex][key]
    })
  }

  for (let n = values.length; dataIndex < n; ++dataIndex) {
    newData[newDataIndex] = JSON.parse(JSON.stringify(values[dataIndex])) // copy all data over
    newData[newDataIndex]["date"] = values[dataIndex]["date"]

    allDataKeys.forEach((key, index) => {
      sums[index] += values[dataIndex][key]
      newData[newDataIndex][key] = sums[index] / N // replace all keys from allDataKeys
      sums[index] -= values[dataIndex - N + 1][key]
    })
    newDataIndex += 1
  }
  return newData
}

// data has to formatted as an array of {key: _, value: _}
const addPercentage = data => {
  let total = 0
  const newData = []
  data.forEach(element => (total += element.value))
  data.forEach(element => {
    newData.push({ ...element, percentage: (element.value / total) * 100 })
  })
  return newData
}

const getSeason = date => {
  const tempDate = new window.Date(date)
  const dateVal = tempDate.getMonth() * 100 + tempDate.getDate()

  if (seasons[SPRING].start <= dateVal && dateVal <= seasons[SPRING].end)
    return SPRING
  else if (seasons[SUMMER].start <= dateVal && dateVal <= seasons[SUMMER].end)
    return SUMMER
  else if (seasons[FALL].start <= dateVal && dateVal <= seasons[FALL].end)
    return FALL
  return WINTER
}

const getSeasonData = (data, field) => {
  const frequency = {}
  const seasonsData = {}
  data.forEach(element => {
    const season = getSeason(element.date)
    if (!seasonsData[season]) {
      seasonsData[season] = 0
      frequency[season] = 0
    }
    seasonsData[season] += element[field]
    frequency[season] += 1
  })
  Object.keys(seasonsData).forEach(key => (seasonsData[key] /= frequency[key]))
  return seasonsData
}

const getDayOfWeekData = (data, field) => {
  const frequency = {}
  const daysOfWeek = {}
  data.forEach(element => {
    const day = parseDayOfWeek(element.date)
    if (!daysOfWeek[day]) {
      daysOfWeek[day] = 0
      frequency[day] = 0
    }
    daysOfWeek[day] += element[field]
    frequency[day] += 1
  })
  Object.keys(daysOfWeek).forEach(key => (daysOfWeek[key] /= frequency[key]))
  return daysOfWeek
}

// --------------------

const displayBarGraph = (id, barData) => {
  const height = 300
  // const width =
  //   window.innerWidth ||
  //   document.documentElement.clientWidth ||
  //   document.body.clientWidth

  const widthWithMargin = height - margin.left
  const heightWithMargin = height

  let keys = $(`#${id}`).data().value
  keys = keys ? keys.split(" ") : allDataKeys

  const [dataKeys, legendKeys] = getKeys(keys)

  dataKeys.forEach((key, index) => {
    const title = legendKeys[index]
    let data = getDayOfWeekData(barData, key)
    data = d3.entries(data)
    data = addPercentage(data)

    const x = d3
      .scaleBand()
      .range([0, widthWithMargin])
      .domain(data.map(d => d.key)) //.padding(0.1);
    const y = d3
      .scaleLinear()
      .range([heightWithMargin, 0])
      .domain([0, d3.max(data, d => d.value)])

    const xAxis = d3.axisBottom(x)
    const yAxis = d3.axisLeft(y)

    const svg = d3
      .select(`#${id}`)
      .append("svg")
      .attr("width", heightWithMargin)
      .attr("height", heightWithMargin + margin.top + 50)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)

    svg
      .append("text")
      .attr("x", widthWithMargin / 2)
      .attr("y", -10)
      .attr("text-anchor", "middle")
      .text(title)

    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function (d) {
        return x(d.key)
      })
      .attr("width", x.bandwidth())
      .attr("y", function (d) {
        return y(d.value)
      })
      .attr("height", function (d) {
        return heightWithMargin - y(d.value)
      })
      .attr("fill", (d, i) => legendColors(i))
      .on("mouseout", function () {
        tooltip.style("display", "none")
        d3.select(this).style("opacity", 0.75)
      })
      .on("mouseover", function () {
        tooltip.style("display", "block")
        d3.select(this).style("opacity", 1)
      })
      .on("mousemove", d => {
        tooltip
          .html(`${d.key}: ${d.percentage.toFixed(1)}% (${d.value.toFixed(3)})`)
          .style("left", `${d3.event.pageX}px`)
          .style("top", `${d3.event.pageY}px`)
      })

    svg
      .append("g")
      .attr("transform", "translate(0," + heightWithMargin + ")")
      .attr("class", "x axis")
      .call(xAxis)

    svg.append("g").call(yAxis)
  })
}

// --------------------

const displayPieChart = (id, pieData) => {
  const height = 300
  // const width =
  //   window.innerWidth ||
  //   document.documentElement.clientWidth ||
  //   document.body.clientWidth

  let keys = $(`#${id}`).data().value
  keys = keys ? keys.split(" ") : allDataKeys

  const [dataKeys, legendKeys] = getKeys(keys)

  dataKeys.forEach((key, index) => {
    const title = legendKeys[index]
    let data = getSeasonData(pieData, key)
    data = d3.entries(data)
    data = addPercentage(data)

    const offset = 100
    const radius = height / 2

    const svg = d3
      .select(`#${id}`)
      .append("svg")
      .attr("width", height + offset)
      .attr("height", height + offset)
      .append("g")
      .attr(
        "transform",
        `translate(${radius + offset / 2}, ${radius + offset / 2})`
      )

    svg
      .append("text")
      .attr("x", 0)
      .attr("y", -radius - 10)
      .attr("text-anchor", "middle")
      .text(title)

    const pie = d3
      .pie()
      .value(d => d.value)
      .sort(null)

    const arc = d3
      .arc()
      .innerRadius(radius * 0.6)
      .outerRadius(radius)

    // adds pie chart to svg
    const path = svg.selectAll(`.${key}Path`).data(pie(data)).enter()

    path
      .append("path")
      .attr("fill", (d, i) => legendColors(i))
      .attr("d", arc)
      .on("mouseout", function () {
        tooltip.style("display", "none")
        d3.select(this).style("opacity", 0.75)
      })
      .on("mouseover", function () {
        tooltip.style("display", "block")
        d3.select(this).style("opacity", 1)
      })
      .on("mousemove", d => {
        tooltip
          .html(
            `${d.data.key}: ${d.data.percentage.toFixed(
              1
            )}% (${d.data.value.toFixed(3)})`
          )
          .style("left", `${d3.event.pageX}px`)
          .style("top", `${d3.event.pageY}px`)
      })

    const legend = svg
      .selectAll(`.${key}Legend`)
      .data(data)
      .enter()
      .append("g")
      .attr("class", `.${key}CircleLegend`)
      .attr("transform", function (d, i) {
        return `translate(${
          -radius * 0.3
        }, ${-radius * (((data.length - 1) * 0.2) / 3) + i * 20})`
      })

    legend
      .append("circle")
      .style("fill", (d, i) => legendColors(i))
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 6)

    legend
      .append("text")
      .attr("x", 15)
      .attr("y", (d, i) => i)
      .text(d => {
        return `${d.key}: ${d.value.toFixed(3)}`
      })
  })
}

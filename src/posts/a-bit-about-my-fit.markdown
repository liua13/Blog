---
title: "A Bit About My Fit"
subtitle: "Combining my love for computer science with my love — though lesser now — for running, I learned a lot about my habits through Fitbit's Web API."
date: "2020-08-09"
image: "fitbit.jpg"
caption: "Two of my high school track buddies and I at the NYC Track Armory after winning the Indoor Borough Championships"
categories: ["projects", "data", "running"]
data_vis: ["https://fitbit-data-analysis.herokuapp.com/", "json"]
published: true
---

<script
    src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.12.0/d3.min.js"
    integrity="sha256-+9Mf3cAVmxxudDsr1XwXUeRZFtvdWVYdq5/vcgiYyNU="
    crossOrigin="anonymous"
></script>

For four years, running served as the syntax of my life. Whether it was struggling through eight mile reservoir runs in the heat or cheering teammates on during their races, practices provided structure for my weekdays and meets on my weekends. And not the mention the main goal: make a new personal record, or as the track community calls it: PR.

Growing up, I'd always admired long distance runners for their stamina, grit, and the simple fact that I thought running looked cool. I was part of my middle school track team, but it wasn't very serious; we held practices once a week and attended one or two meets a year. So before I even started my first day at Bronx Science, I attended a pre-season practice that the womxn Cross Country and Track coaches hosted and fell in love with running. I was part of the Varsity team during my first year, but then suffered a knee injury that left me on crutches for two months. My health during my sophomore year was at its lowest and so was my running, but I got back into it during my junior year and ended my senior year as captain of all three seasons: Cross Country, Indoor Track, and Outdoor Track.

I never broke some of my first year PR's and at some point, all of the pressure to meet expectations built up and track became more of a burden than a source of joy. Sometimes I wonder if I should've quit or done something else with my time, but I don't regret my experience. Running provided me with a great community and made me more outgoing, confident, and determined.

As tribute to the four years I spent running around in circles, I decided to combine my love for computer science with my love — though lesser now — for running, and take a look at all of the data collected through Fitbit. I ordered my Fitbit around Thanksgiving, but since Thanksgiving gifts aren't that big of a thing, I consider it an early Christmas gift to myself. Looking back, I wish I got a Fitbit a few years earlier, so I can analyze and visualize my running throughout my high school years. But alas, <a href="https://www.google.com/search?q=hindsight+is+2020+memes&tbm=isch&ved=2ahUKEwiEwZ6uvo3rAhUCjOAKHRTbDA0Q2-cCegQIABAA&oq=hindsight+is+2020+memes&gs_lcp=CgNpbWcQAzICCAAyBggAEAgQHlCiJ1iiJ2DvN2gAcAB4AIABRIgBRJIBATGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=vJYvX4TzBYKYggeUtrNo&bih=818&biw=1595&hl=en#imgrc=9xZBXqRPBJwXmM" target="_blank">hindsight is 20/20</a>

The three main fields I decided to focus on are:

- Exercise (distance traveled)
- Resting Heart Rate
- Sleep

A few things to keep in mind:

- All data was queried using Fitbit's Web API for the past two or so years and normalized to [0,1] — because one, to more easily fit multiple lines in one chart, and two, safety: _anything you put online is forever_
- All data was updated on September 6<sup>rd</sup> and this blog post was written on August 10, 2020, so the contents of this page may not necessarily reflect on what the current data presents
- Some dates may be missing data because I forgot to wear my Fitbit, it ran out of battery, or any one of the three fields listed above are missing data
- Hover over the graphs and legends (sorry mobile folks — hover doesn't work on mobile)

The sleep data is a bit complicated, so I plotted _Distance_ and _Resting Heart Rate_ first. The frequency before June 2019 is pretty low compared to the rest of the graph because of more missing data points around that area. It's probably because I often noticed that my Fitbit was dead during the day, but my home was an hour and a half ride away from school, and I was often too tired and busy in the evenings to remember. The distance stats kind of surprise me; I expected my longest distance to be sometime in high school because I was running almost everyday then. I wonder what happened on November 2nd. There's a large dip mid-March due to quarantine. It's crazy how much data can show — and how easily.

<div class="lineGraph chart" id="nonSleepGraph" data-value="distance restingHeartRate">Loading graph ...</div>

The way the sleep data is structured is that the date of the sleep is counted towards the date which you wake up. For example, if I fell asleep on 9PM on August 6th and woke up at 9AM on August 7th, then those 12 hours would be considered sleep for August 7th. However, if I fell asleep at 9PM on August 6th and woke up at 11PM on August 6th, that would be considered sleep for August 6th.

_Main Sleep_ is as the name suggests: the main sleep of a day. For most people, including me, that's at night. It includes the _deep + light + rem_ sleep of your sleep cycle. From what I can tell, my sleep schedule is pretty erratic throughout the days of the week, which is something I've noticed myself. Whenever I have a good night's sleep, I'd have trouble sleeping the following evening.

I wonder if the local maximums are on the weekends, when I tried to catch up on the sleep I missed throughout the week. It's kind of interesting that my longest nap is May 13, 2019, a Monday when I had school. I probably woke up at 5:45AM when my alarm sounded, shut if off, and went back to sleep. It was too late to make it to school when I woke up at 9AM. The same thing happened on May 15.

<div class="lineGraph chart" id="sleepGraph" data-value="minutesSleep minutesNapped totalSleep">Loading graph ...</div>

_Main Sleep in Bed_ is _Main Sleep_ + wake (_deep + light + rem + wake_). I didn't know this before I got my Fitbit, but in a normal sleep cycle, it's pretty normal to <a href="https://www.ncbi.nlm.nih.gov/books/NBK19956/" target="_blank">wake up briefly in the middle of the night</a> and most of the time, you don't notice because you're not awake for long.

<div class="lineGraph chart" id="sleepInBedGraph" data-value="minutesSleepInBed minutesNappedInBed totalSleepInBed">Loading graph ...</div>

The shapes of the previous two graphs are nearly identical to each other. Since frequent awakenings in the middle of the night doesn't contribute to sleep, it makes more sense to look just at the _deep + light + rem_ parts of the sleep cycle. I consolidated all of the sleep data to just one line — _Total Sleep_ (_deep + light + rem_) — and plotted it along with _Distance_ and _Resting Heart Rate_.

It's interesting how the longest I ever slept was December 28, 2019, a week after I came back home for winter break. I wasn't used to sleeping at MIT, so the quality of my sleep wasn't the best. I also needed time adjusting back to my room at home, hence why it took a week after I came home. Even more interesting is that I ended up sleeping the same amount on December 28 in one sitting as I did on May 13! That nap on May 13 really boosted up the hours.

<div class="lineGraph chart" id="mainGraph" data-value="distance restingHeartRate totalSleep">Loading graph ...</div>

I couldn't really see any trends due to the noise, so I plotted a 30-day moving average of the three lines. My sleep is pretty consistent month to month, even though it's not day to day. My resting heart rate seems to be increasing, probably because I'm no longer as active as I was in high school. My distance dramatically in March, but we could already tell from the first graph. What's interesting is the dip in distance from mid May - August 2019. Track was leveling off and during my internship that summer, I spent most of my time sitting at a desk.

<div class="lineGraph chart" id="movingAverageGraph" data-value="distance restingHeartRate totalSleep rolling-30">Loading graph ...</div>

I wanted to compare the differences among days of the week, so I created a bar graph. I didn't expect my resting heart rate to change much over the course of the week, which the data supports. My sleep trends are pretty much expected; I could sleep in on Saturdays and Sundays, hence why I slept much more on the weekends. But I'm quite surprised that I cover more distance on Friday's, since track practices were rarely held then. But at MIT, my floor and I went out more frequently on Friday's than any other day of the week, so I guess it's somewhat expected. Sunday's are my rest days and the day to get a start on any homework / psets due the following week, so it makes sense why my distance coverage was so low compared to the rest of the week.

<div class="barGraph chart" id="dayOfWeekBarGraph" data-value="distance restingHeartRate totalSleep">Loading graph ...</div>

I was curious about my trends throughout the different seasons, and out of all of the ones I've seen so far, this one surprises me the most. <a href="https://pubmed.ncbi.nlm.nih.gov/12783049/" target="_blank">Most people are more active in the spring and summer</a>, but my data suggests that I'm the opposite. My activity in the fall and winter combined is nearly half of the remaining two seasons added together; in fact, my fall activity is more than twice the distance I covered in the spring!

I wasn't too concerned about when a specific season started or ended, so I just split them into four dates:

- Spring: Mar 21 - Jun 20
- Summer: Jun 21 - Sep 20
- Fall: Sep 21 - Dec 20
- Winter: Dec 21 - Mar 20

My spring data is kind of skewed because of COVID, but I do believe that the general trend is true. I'm more active in the fall and winter because of track and the fact that I'm around people all the time, which makes it easier to make plans. School's still in season in the spring, but I used to suffer horrible allergies. It's interesting that my resting heart beat is also higher in the fall, when fall is when I'm the most active. I wonder how the data will change this fall, when I'm studying remotely.

The amount of sleep I get across the seasons are pretty consistent, but I'm still a bit surprised that my hours in the summer are less than any other season; I actually expected the complete opposite since I generally have more time when school is out. I can only speculate, but my theory is that being more active combined with <a href="https://www.bbc.com/future/article/20180815-why-sleep-should-be-every-students-priority" target="_blank">learning means my need for sleep is greater</a>, which explains why I'm tired all the time during school, even when the data shows that I get more sleep.

<div class="pieChart chart" id="seasonsChart" data-value="distance restingHeartRate totalSleep">Loading graph ...</div>

Incorporating D3 with Gatsby and React — which my website is built on — was difficult and at times, I got so frustrated that I wondered why I even started this in the first place. Not only was my patience tested, but so was my problem solving skills. But I'm glad I pushed through. Here's some things I learned:

- Don't use arrow functions if you need access to _this_ of the current element because you'll get _null_.
- I knew that Gatsby was static, but I didn't connect the dots — you can't access the _window_ or _document_ on render because they don't exist!
- The spread operator is amazing (and so are the other additions to ES6). It saves so much time and redundant code — and even does a deep copy (as long as you're not copying over nested objects). Too bad it's not supported by Node; I learned that the hard way.
- Speaking of deep copies, if a variable is unexpectedly changing when it shouldn't be, check to make sure you're not making a shallow copy.
- You can't trust how data is given to you. I assumed that since Fitbit collected data chronologically, the data would be retrieved in nondecreasing time as well. But before I realized, part of my charts looked like a kid's coloring book.
- Moving averages are so beautiful — and so is data!

And here's a fun fact to end off the post: I nearly covered the distance of a marathon in one day, which is more than the total distance I covered during three months of quarantine!

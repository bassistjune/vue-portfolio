<template>
  <div class="calendarWrap">
    <div class="calTop">
      <div class="year"></div>
      <div class="month"></div>
      <div class="remote">
        <button class="remote-btn go-prev" onclick="prevMonth()">&lt;</button>
        <button class="remote-btn go-today" onclick="goToday()">Today</button>
        <button class="remote-btn go-next" onclick="nextMonth()">&gt;</button>
      </div>
    </div>
    <div class="calMid">
      <div class="days">
        <div class="day">일</div>
        <div class="day">월</div>
        <div class="day">화</div>
        <div class="day">수</div>
        <div class="day">목</div>
        <div class="day">금</div>
        <div class="day">토</div>
      </div>
      <div class="dates"></div>
    </div>
  </div>
</template>
<style scoped>
.calendarWrap {width: 100%; margin: 1em auto;}
.calTop {display: flex; justify-content: space-between; align-items: center;}
.year, .month {font-size: 1em; }
.remote {display: flex; border: 1px solid #333;}
.remote-btn {width: 1.2em; height: 1.2em; border: none; font-size: 16px; line-height: 1.1em; background-color: transparent; cursor: pointer;}

.go-today {width: 0.75em; border-left: 1px solid #333; border-right: 1px solid #333;}
.days {display: flex; margin: 0.5em 0; }
.day {width: calc(100% / 7); text-align: center;}
.dates {display: flex; flex-flow: row wrap; height: 100%; border-top: 1px solid #333; border-bottom: 1px solid #333; border-right: 1px solid #333; }
.date {width: calc(100% / 7); padding: 15px; text-align: center; border-bottom: 1px solid #333; border-left: 1px solid #333;}

.day:nth-child(7n + 1), .date:nth-child(7n + 1) {color: #d13e3e;}
.day:nth-child(7n), .date:nth-child(7n) {color: #396ee2;}

.other{opacity: 0.3;}
.today {position: relative; color: #fff;}
.today::before {content: ''; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: -1; width: 30px; height: 30px; display: block; background: #ff0000; border-radius: 50%;}
</style>
<script>
export default {
  data() {
    return {
      date: new Date()
    }
  },
  methods: {
    renderCalendar() {
      const viewYear = this.date.getFullYear()
      const viewMonth = this.date.getMonth()

      this.$refs.year.textContent = `${viewYear}년`
      this.$refs.month.textContent = `${viewMonth + 1}월`
      const prevLast = new Date(viewYear, viewMonth, 0)
      const thisLast = new Date(viewYear, viewMonth + 1, 0)

      const PLDate = prevLast.getDate()
      const PLDay = prevLast.getDay()

      const TLDate = thisLast.getDate()
      const TLDay = thisLast.getDay()

      const prevDates = []
      const thisDates = [...Array(TLDate + 1).keys()].slice(1)
      const nextDates = []

      if (PLDay !== 6) {
        for (let i = 0; i < PLDay + 1; i++) {
          prevDates.unshift(PLDate - i)
        }
      }

      for (let i = 1; i < 7 - TLDay; i++) {
        nextDates.push(i)
      }

      const dates = prevDates.concat(thisDates, nextDates)
      const firstDateIndex = dates.indexOf(1)
      const lastDateIndex = dates.lastIndexOf(TLDate)

      dates.forEach((date, i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1
            ? 'this'
            : 'other'
        dates[i] = `<div class="date"><span class=${condition}>${date} </span></div>`
      })

      this.$refs.dates.innerHTML = dates.join('')

      const today = new Date()
      if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
        for (let date of this.$refs.dates.querySelectorAll('.this')) {
          if (+date.innerText === today.getDate()) {
            date.classList.add('today')
            break;
          }
        }
      }
    },
    prevMonth() {
      this.date.setMonth(this.date.getMonth() - 1)
      this.renderCalendar()
    },
    nextMonth() {
      this.date.setMonth(this.date.getMonth() + 1)
      this.renderCalendar()
    },
    goToday() {
      this.date = new Date()
      this.renderCalendar()
    }
  },
  mounted() {
    this.renderCalendar()
  }
}
</script>
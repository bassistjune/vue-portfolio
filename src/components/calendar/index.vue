<template>
  <div class="calendarWrap">
    <div class="calTop">
      <div class="year">{{ viewYear }}년 {{ viewMonth + 1 }}월</div>
      <div class="remote">
        <button class="remote-btn go-prev" @click="prevMonth()">&lt;</button>
        <button class="remote-btn go-today" @click="goToday()">Today</button>
        <button class="remote-btn go-next" @click="nextMonth()">&gt;</button>
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
      <div class="dates">
        <div v-for="(date, i) in dates" :key="i" class="date">
          <span :class="date.condition">{{ date.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.calendarWrap {width: 100%; margin: 1em auto;}
.calTop {display: flex; justify-content: space-between; align-items: center;}
.year, .month {font-size: 1em; }
.remote {display: flex; gap: 0.5em;}
.remote-btn {width: auto; height: auto; padding: 0.8em 2em; border: none; font-size: 1em; line-height: 1.2; background-color: transparent; cursor: pointer;}

.go-today {width: fit-content; font-size: 1em;}
.days {display: flex; padding: 0.5em 0; border-bottom: 1px solid #333;}
.day {width: calc(100% / 7); text-align: center;}
.dates {display: flex; flex-flow: row wrap; height: 100%; border-bottom: 1px solid #333; }
.dates > * {width: calc(100% / 7); display: flex; padding: 0; align-items: center; justify-content: center; text-align: center; border-bottom: 1px solid #333; aspect-ratio: 1/1;}

.day:nth-child(7n + 1), .date:nth-child(7n + 1) {color: #d13e3e;}
.day:nth-child(7n), .date:nth-child(7n) {color: #396ee2;}

.other {opacity: 0.3;}
.today {position: relative; color: #fff;}
.today::before {content: ''; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: -1; width: 30px; height: 30px; display: block; background: #ff0000; border-radius: 50%;}
</style>
<script>
import calendarJs from '@/assets/js/calendarFunc';
export default {
  data() {
    return {
      date: new Date(),
      viewYear: 0,
      viewMonth: 0,
      prevLast: null,
      thisLast: null,
      PLDate: 0,
      PLDay: 0,
      TLDate: 0,
      TLDay: 0,
      prevDates: [],
      thisDates: [],
      nextDates: [],
      dates: [],
      today: null,
      diffDay: null
    }
  },
  watch: {
    diffDay: {}
  },
  mounted() {
    this.today = new Date()
    this.calendarFt()
  },
  methods: {
    calendarFt () {
      this.viewYear = this.date.getFullYear()
      this.viewMonth = this.date.getMonth()

      this.$nextTick(() => {
        this.prevLast = new Date(this.viewYear, this.viewMonth, 0)
        this.thisLast = new Date(this.viewYear, this.viewMonth + 1, 0)

        this.PLDate = this.prevLast.getDate()
        this.PLDay = this.prevLast.getDay()

        this.TLDate = this.thisLast.getDate()
        this.TLDay = this.thisLast.getDay()

        this.prevDates = []
        this.thisDates = [...Array(this.TLDate + 1).keys()].slice(1)
        this.nextDates = []
        console.log('this.thisDates', this.thisDates)
        if (this.PLDay !== 6) {
          for (let i = 0; i < this.PLDay + 1; i++) {
            this.prevDates.unshift(this.PLDate - i)
          }
        }

        const nextMonthDays = 7 - this.TLDay - 1
        for (let i = 1; i <= nextMonthDays; i++) {
          this.nextDates.push(i)
        }

        this.dates = this.prevDates.map((date) => ({
          value: date,
          condition: 'other'
        }))

        this.dates.push(
            ...this.thisDates.map((date) => ({
              value: date,
              condition: date === this.today.getDate() && this.viewMonth === this.today.getMonth() && this.viewYear === this.today.getFullYear() ? 'today' : 'this'
            }))
        )

        this.dates.push(
            ...this.nextDates.map((date) => ({
              value: date,
              condition: 'other'
            }))
        )
      })
    },
    prevMonth () {
      this.date.setMonth(this.date.getMonth() - 1)
      this.calendarFt()
    },
    goToday () {
      this.date = new Date()
      this.calendarFt()
    },
    nextMonth () {
      this.date.setMonth(this.date.getMonth() + 1)
      this.calendarFt()
    }
  }
};
</script>
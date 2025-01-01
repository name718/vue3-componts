<template>
  <div :class="nsCal.b()">
    <div :class="nsCal.e('header')">
      <div :class="nsCal.e('title')"></div>
      <div :class="nsCal.e('button-group')">
        <z-button>前一年</z-button>
        <z-button>上个月</z-button>
        <z-button>今天</z-button>
        <z-button>下个月</z-button>
        <z-button>下一年</z-button>
      </div>
    </div>
    <div :class="nsCal.e('body')">
      <table :class="nsTable.b()">
        <thead>
          <tr>
            <th v-for="day in weekDays">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, rid) in rows"
            :key="rid"
          >
            <td
              v-for="(cell, cid) in row"
              :key="cid"
              :class="nsDay.b()"
            >
              {{ cell.text }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { createNamespace } from '@mjt/utils/create'
  import ZButton from '@mjt/components/button'
  import dayjs from 'dayjs'
  import type { Dayjs } from 'dayjs'
  import { computed } from 'vue'
  import { calendarProps, CalendarDateCell } from './calendar'

  const nsCal = createNamespace('calendar')
  const nsTable = createNamespace('calendar-table')
  defineOptions({
    name: 'z-calendar'
  })
  const nsDay = createNamespace('calendar-day')

  const props = defineProps(calendarProps)
  const now = dayjs()
  const date = computed(() => {
    if (!props.modelValue) return now
    return dayjs(props.modelValue)
  })
  const firstDayofWeek = dayjs().startOf('week').day()

  const weekMap = [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六'
  ]
  const weekDays = computed(() => {
    return [
      ...weekMap.slice(firstDayofWeek),
      ...weekMap.slice(0, firstDayofWeek)
    ]
  })
  const rows = computed(() => {
    let list: CalendarDateCell[] = []
    // 这个月的第一天
    const firstDay = date.value.startOf('month').day()
    // 上个月的最后一天
    const lastDay = date.value.subtract(1, 'month').endOf('month').date()
    const count = firstDay - firstDayofWeek
    const prevMonthDays: CalendarDateCell[] = Array.from({ length: count })
      .map((_, i) => {
        return lastDay - count + i + 1
      })
      .map((_) => {
        return {
          text: _,
          type: 'prev'
        }
      })
    const days = date.value.daysInMonth() // 这个月的天数

    const currentMonthDays: CalendarDateCell[] = Array.from({
      length: days
    }).map((_, i) => {
      return { text: i + 1, type: 'current' }
    })

    list = [...prevMonthDays, ...currentMonthDays]

    let remaning = 42 - list.length

    const nextMonthDays: CalendarDateCell[] = Array.from({
      length: remaning
    }).map((_, i) => {
      return { text: i + 1, type: 'next' }
    })
    list.push(...nextMonthDays)
    return Array.from({ length: 6 }).map((_, i) => {
      return list.slice(i * 7, i + 7)
    })
  })
  const handlePrevYear = () => {
    console.log('prev year')
  }
</script>

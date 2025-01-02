<template>
  <div :class="nsCal.b()">
    <div :class="nsCal.e('header')">
      <div :class="nsCal.e('title')">{{ currentDate }}</div>
      <div :class="nsCal.e('button-group')">
        <z-button @click="($event) => selectDate('prev-year')">前一年</z-button>
        <z-button @click="($event) => selectDate('prev-month')">
          上个月
        </z-button>
        <z-button @click="($event) => selectDate('today')">今天</z-button>
        <z-button @click="($event) => selectDate('next-month')">
          下个月
        </z-button>
        <z-button @click="($event) => selectDate('next-year')">下一年</z-button>
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
              @click="($event) => handlePick(cell)"
              v-for="(cell, cid) in row"
              :key="cid"
              :class="[nsDay.b(), getCellClass(cell)]"
            >
              <slot
                name="date-cell"
                :data="getSlotData(cell)"
              >
                {{ cell.text }}
              </slot>
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
  import { computed, ref } from 'vue'
  import {
    calendarEmits,
    calendarProps,
    CalendarDateCell,
    CalendarDateType,
    CalendarDateCellType
  } from './calendar'

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

  const prevMonth = computed(() => {
    return date.value.subtract(1, 'month').date(1)
  })
  const nextMonth = computed(() => {
    return date.value.add(1, 'month').date(1)
  })
  const prevYear = computed(() => {
    return date.value.subtract(1, 'year').date(1)
  })
  const nextYear = computed(() => {
    return date.value.add(1, 'year').date(1)
  })
  const emit = defineEmits(calendarEmits)
  const pickDate = (day: Dayjs) => {
    selectDay.value = day
    emit('update:modelValue', day.toDate())
  }

  const selectDate = (type: CalendarDateType) => {
    // 策略优化

    const dateMap: Record<CalendarDateType, Dayjs> = {
      'prev-year': prevYear.value,
      'prev-month': prevMonth.value,
      today: now,
      'next-month': nextMonth.value,
      'next-year': nextYear.value
    }

    const day = dateMap[type]
    pickDate(day)
  }
  const formatter = (text: number, type: CalendarDateCellType): Dayjs => {
    switch (type) {
      case 'prev':
        return date.value.startOf('month').subtract(1, 'month').date(text)
      case 'current':
        return date.value.date(text)
      case 'next':
        return date.value.endOf('month').add(1, 'month').date(text)
    }
  }
  const selectDay = ref<Dayjs>()
  const handlePick = ({ text, type }: CalendarDateCell) => {
    let day = formatter(text, type)
    pickDate(day)
  }

  const getCellClass = ({ text, type }: CalendarDateCell) => {
    const clazz: string[] = [type]
    const date = formatter(text, type)
    if (date.isSame(selectDay.value, 'day')) {
      clazz.push(nsDay.is('selected', true))
    }
    if (date.isSame(now, 'day')) {
      clazz.push(nsDay.is('today', true))
    }
    return clazz
  }

  const currentDate = computed(() => {
    return `${date.value.year()}年${date.value.month() + 1}月`
  })

  const getSlotData = (cell: CalendarDateCell) => {
    let day = formatter(cell.text, cell.type)
    return {
      isSelected: day.isSame(selectDay.value),
      day: day.format('YYYY-MM-DD'),
      date: day.toDate(),
      cell
    }
  }
</script>

import People from './people'
import {
  REASONS_TO_DEPLOY,
  REASONS_TO_NOT_DEPLOY,
  REASONS_FOR_THURSDAY_AFTERNOON,
  REASONS_FOR_FRIDAY_AFTERNOON,
  REASONS_FOR_FRIDAY_13TH,
  REASONS_FOR_AFTERNOON,
  REASONS_FOR_WEEKEND,
  EXCUSES_BY_PERSON
} from './reasons'

export const shouldIDeploy = function (time) {
  return time && !time.isFriday() && !time.isWeekend()
}

export const shouldIDeployColorTheme = function (time) {
  return shouldIDeploy(time) ? '#36a64f' : '#ff4136'
}

export const getRandom = function ranDay(list) {
  return list[Math.floor(Math.random() * list.length)]
}

/**
 * Return a list of reasons according of time parameter
 * @param string[]
 */
export function excuseHelper(person) {
  return EXCUSES_BY_PERSON(person)

  // if (time.isFriday13th()) {
  //   return REASONS_FOR_FRIDAY_13TH
  // }

  // if (time.isFridayAfternoon()) {
  //   return REASONS_FOR_FRIDAY_AFTERNOON
  // }

  // if (time.isFriday()) {
  //   return REASONS_TO_NOT_DEPLOY
  // }
  // if (time.isThursdayAfternoon()) {
  //   return REASONS_FOR_THURSDAY_AFTERNOON
  // }
  // if (time.isAfternoon() && !time.isWeekend()) {
  //   return REASONS_FOR_AFTERNOON
  // }
  // if (time.isWeekend()) {
  //   return REASONS_FOR_WEEKEND
  // }
  // return REASONS_TO_DEPLOY
}

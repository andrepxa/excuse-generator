export default class Time {
  /**
   * Return current date
   * @return {Date}
   */
  now() {
    return new Date()
  }

  /**
   * Today is Thursday
   * @return bool
   */
  isThursday() {
    return this.now().getDay() === 4
  }

  /**
   * Today is Friday
   * @return bool
   */
  isFriday() {
    return this.now().getDay() === 5
  }

  /**
   * Today is day 13
   * @return bool
   */
  is13th() {
    return this.now().getDate() === 13
  }

  /**
   * Are we in the afternoon?
   * @return bool
   */
  isAfternoon() {
    return this.now().getHours() >= 16
  }

  /**
   * Are we Thursday afternoon?
   * @return bool
   */
  isThursdayAfternoon() {
    return this.isThursday() && this.isAfternoon()
  }

  /**
   * Are we Friday afternoon?
   * @return bool
   */
  isFridayAfternoon() {
    return this.isFriday() && this.isAfternoon()
  }

  /**
   * Are we Friday the 13th?
   * @return bool
   */
  isFriday13th() {
    return this.isFriday() && this.is13th()
  }

  /**
   * Are we the weekend (Saturday, Sunday)
   * @return bool
   */
  isWeekend() {
    return this.now().getDay() === 6 || this.now().getDay() === 0
  }
}

#EJ's Calendar Script

my_name = "emmanuel_eppinger"
my_name_str = "Emmanuel Eppinger"

first_day = [25, 8, 2016]
last_day = [1, 6, 2017]

class wt_class:

    def __init__(name, times, days, teacher, room):

        self.name = name
        self.times = times
        self.teacher = teacher
        self.room = room


class_0 = wt_class("World Literature", [3, 5, 1], [1, 3, 5], "Ms. Kovacic", "US209")
class_1 = wt_class("Advanced Topics in Mathematics", [3, 5, 1], [1, 3, 5], "Mr. Nassar", "US211")
class_2 = wt_class("Algorithms Design", [3, 5, 1], [1, 3, 5], "Mr. Nassar", "US115")
class_3 = wt_class("Biology", [3, 5, 1], [1, 3, 5], "Ms. Nesbitt", "US117")
class_4 = wt_class("Economics", [3, 5, 1], [1, 3, 5], "Mr. Hallas", "US20")

month_lenghts = [0 ,31, 28, 31, 30, 31, 30, 31, 31, 30, 30, 31]


def get_time(input):

    times = ["8:15", "8:30", "9:40", "10:40", "12:40", "13:40", "14:40"]

    return times[input]

def weekDay(year, month, day): #from http://stackoverflow.com/questions/9847213/which-day-of-week-given-a-date-python
    offset = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
    week   = ['Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday']
    afterFeb = 1
    if month > 2: afterFeb = 0
    aux = year - 1700 - afterFeb
    # dayOfWeek for 1700/1/1 = 5, Friday
    dayOfWeek  = 5
    # partial sum of days betweem current date and 1700/1/1
    dayOfWeek += (aux + afterFeb) * 365
    # leap year correction
    dayOfWeek += aux / 4 - aux / 100 + (aux + 100) / 400
    # sum monthly and day offsets
    dayOfWeek += offset[month - 1] + (day - 1)
    dayOfWeek %= 7
    return dayOfWeek


def make_event(class_input, date):
    output.write("BEGIN:VEVENT\n")
    output.write("SUMMARY:" + class_input.name + " with " + class_input.teacher + " in Room " + class_input.room)
    output.write("UID:" + str(date[0]) + "-" + str(date[1]) + "-" + str(date[2]) + )




output = open(my_name + "_schedule_calender_full_year.ics", "w")
output.write("BEGIN:VCALENDAR\n")
output.write("PRODID:-//Blabla//Google Calendar 70.9054//EN\n")
output.write("VERSION:2.0\n")
output.write("CALSCALE:GREGORIAN\n")
output.write("METHOD:PUBLISH\n")
output.write("X-WR-CALNAME:" + my_name_str + "'s School Class Schedule'\n")
output.write("X-WR-TIMEZONE:America/New_York\n")
output.write("BEGIN:VTIMEZONE\n")
output.write("TZID:America/New_York\n")
output.write("X-LIC-LOCATION:America/New_York\n")

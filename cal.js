
var D = new Array()


D[1] = new Array()

D[1][0] = "Announcement"
D[1][1] = "Ceramics"
D[1][2] = "Advisory"
D[1][3] = "Science"
D[1][4] = "Lunch"
D[1][5] = "Free"
D[1][6] = "Social Studies"

D[2] = new Array()

D[2][0] = "Advisory"
D[2][1] = "English"
D[2][2] = "Community Time"
D[2][3] = "Math"
D[2][4] = "Lunch"
D[2][5] = "Free"
D[2][6] = "Spanish"

D[3] = new Array()

D[3][0] = "Announcement"
D[3][1] = "Social Studies"
D[3][2] = "Community Time"
D[3][3] = "Ceramics"
D[3][4] = "Lunch"
D[3][5] = "Free"
D[3][6] = "Science"

D[4] = new Array()

D[4][0] = "Advisory"
D[4][1] = "Spanish"
D[4][2] = "Community Time"
D[4][3] = "English"
D[4][4] = "Lunch"
D[4][5] = "Free"
D[4][6] = "Math"

D[5] = new Array()

D[5][0] = "Announcement"
D[5][1] = "Science"
D[5][2] = "Community Time"
D[5][3] = "Social Studies"
D[5][4] = "Lunch"
D[5][5] = "Free"
D[5][6] = "Ceramics"

D[6] = new Array()

D[6][0] = "Advisory"
D[6][1] = "Math"
D[6][2] = "Community Time"
D[6][3] = "Spanish"
D[6][4] = "Lunch"
D[6][5] = "Free"
D[6][6] = "English"

var C = new Array()

C[0] = "T081500"
C[1] = "T083000"
C[2] = "T094000"
C[3] = "T104000"
C[4] = "T124000"
C[5] = "T131000"
C[6] = "T141000"
C[7] = "T151000"

var H = new Array()

H[0] = new Date("September 2, 2013")
H[1] = new Date("September 5, 2013")
H[2] = new Date("October 14, 2013")
H[3] = new Date("October 25, 2013")

function nextSchoolDay(d) {
    d.setTime( d.getTime() + 24 * 60 * 60 * 1000 )
    while (d.getDay() == 0 || d.getDay() == 6 || d.getTime() == H[0].getTime() || d.getTime() == H[1].getTime() || d.getTime() == H[2].getTime() || d.getTime() == H[3].getTime()) {
        d.setTime( d.getTime() + 24 * 60 * 60 * 1000 )
    }
}

function genUID(sd,b) {
    return "eppingere-2013-2014-sd" + (sd+1) + "-b" + b
}

function formatDate(d) {
    var answer = "" + d.getFullYear()
    if (d.getMonth() < 9) answer = answer + "0"
    answer = answer + (d.getMonth() + 1)
    if (d.getDate() < 10) answer = answer + "0"
    answer = answer + d.getDate()
    return answer
}

function formatDate(p) {
    var answer = "" + p.getFullYear()
    if (p.getMonth() < 9) answer = answer + "0"
    answer = answer + (p.getMonth() + 1)
    if (p.getDate() < 10) answer = answer + "0"
    answer = answer + p.getDate()
    return answer
}

document.write("BEGIN:VCALENDAR<br>")
document.write("METHOD:PUBLISH<br>")
document.write("VERSION:2.0<br>")
document.write("PRODID:-//Company Name//Product//Language<br>")


var sd = 0
var d = new Date("August 22, 2013")
var p = new Date("August 23, 2013")

while (sd <= 60) {
    var b = 0
    var day = sd%6 + 1
    document.write("BEGIN:VEVENT<br>")
    document.write("SUMMARY: Day " + day + "<br>")
    document.write("UID:" + genUID(sd,b) + "1<br>")
    document.write("DTSTART;VALUE=DATE:" + formatDate(d) + "<br>")
    p.setTime( d.getTime() + 1000 * 60 * 60* 24 )
    document.write("DTEND;VALUE=DATE:" + formatDate(p) + "<br>")
    document.write("END:VEVENT<br>")
    while (b < 7) {
        document.write("BEGIN:VEVENT<br>")
        document.write("SUMMARY:" + D[day][b]+ "<br>")
        document.write("UID:" + genUID(sd,b) + "<br>")
        document.write("DTSTART:" + formatDate(d) + C[b] + "<br>")
        document.write("DTEND:" + formatDate(d) + C[b+1] + "<br>")
        document.write("END:VEVENT<br>")
        b = b+1
    }
    sd = sd+1
    nextSchoolDay(d)

}


document.write("END:VCALENDAR<br>")

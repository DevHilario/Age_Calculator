
var dayInp = document.getElementById("day")
var monthInp = document.getElementById("month")
var yearInp = document.getElementById("year")


var dayOtp = document.getElementById("DD")
var monthOtp = document.getElementById("MM")
var yearOtp = document.getElementById("YY")

var form = document.querySelector("form")

var date = new Date()

var day = date.getDate()
var month = 1 + date.getMonth()
var year = date.getFullYear()



// day  month + 1   year

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function validate() {

  var inputs = document.querySelectorAll("input")
  var validator = true



  inputs.forEach((i) => {
    var parent = i.parentElement
    if (!i.value) {
      i.style.borderColor = "red"
      window.alert("Ano Inválida!")
      validator = false
    }
    else if (yearInp.value > year ||
             dayInp.value > day & monthInp.value > month & yearInp.value > year ||
             dayInp.value > day & monthInp.value > month & yearInp.value == year ||
             dayInp.value > day & monthInp.value == month & yearInp.value > year ||
             dayInp.value > day & monthInp.value == month & yearInp.value == year ||
             dayInp.value == day & monthInp.value > month & yearInp.value > year ||
             dayInp.value == day & monthInp.value > month & yearInp.value == year ||
             dayInp.value == day & monthInp.value == month & yearInp.value > year
             ) {
        
        window.alert("Digite Datas Abaixo da Atual!!")
        validator = false

    }

    else if(dayInp.value > months[monthInp.value - 1]) {
      window.alert("Esse mês não possui esse tanto de dias!")
      validator = false
      

    }
    
    else if (dayInp.value > 31 || dayInp.value < 1) {
      dayInp.style.borderColor = "red"
      window.alert("Dia Inválido!")
      validator = false
    }
    else if (monthInp.value > 12 || monthInp.value < 1) {
        monthInp.style.borderColor = "red"
        window.alert("Mês Inválido!")
        validator = false
    }

    else {
      i.style.borderColor = "black";
      validator = true

    
    }
  })
  return validator
}
function handleSubmit(e) {
  var day_copy = day
  var month_copy = month
  var year_copy = year

  
  e.preventDefault();
  if (validate()) {


    if (dayInp.value > day) {
      day_copy = day + months[month - 1]
      month_copy = month - 1
    }
    if (monthInp.value > month) {
      month_copy = month + 12
      year_copy = year - 1


    }

    let d = day_copy - dayInp.value
    let m = month_copy - monthInp.value
    let y = year_copy - yearInp.value


    dayOtp.innerHTML = d
    monthOtp.innerHTML = m
    yearOtp.innerHTML = y
    
  }
}


form.addEventListener("submit", handleSubmit)

let ofi = document.getElementById('ofimatica').getContext("2d");
let pro = document.getElementById('programacion').getContext("2d");
let science = document.getElementById('science').getContext("2d");
let devl = document.getElementById('develop').getContext("2d");

// graph ofimatica 

var oficamt = new Chart (ofi,{
  type:"bar",
  data: {
    labels: ["Power Point", "Word", "Excel"],
    datasets: [
      {
        label: "Ofimatica",
        backgroundColor: "rgb(146,168,176)",
        data: [75, 80, 90]
      }
    ]
  }
})

 // graph programación

var progra = new Chart (pro,{
  type:"bar",
  data: {
    labels: ["Vba", "PHP", "JavaScript", "Python"],
    datasets: [
      {
        label: "Lenguajes de programación",
        backgroundColor: "rgb(103,185,214)",
        data: [30, 50, 60, 75]
      }
    ]
  }
})

  // graph Data science

       var scien = new Chart (science,{
  type:"bar",
  data: {
    labels: ["Sklearn", "SQL", "Seaborn/Matplotlib/Plotly", "Numpy", "Pandas", "Python"],
    datasets: [
      {
        label: "Data Science",
        backgroundColor: "rgb(83,141,160)",
        data: [30, 50, 65, 65, 65, 75]
      }
    ]
  }
})

  // graph Desarrollo web - Frontend

  var devel = new Chart (devl,{
  type:"bar",
  data: {
    labels: ["Bootstrap", "CSS", "JavaScript", "HTML"],
    datasets: [
      {
        label: "Desarrollo Web - Frontend",
        backgroundColor: "rgb(49,190,238)",
        data: [50, 60, 60, 70]
      }
    ]
  }
})


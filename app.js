$(document).ready(function() {

  // Definimos las variables
  var operando1 = 0;
  var operando2 = 0;
  var operacion = "";
  
  // Eventos de clic para los botones
  $("#btn0").click(function() {
  insertarNumero("0");
  });
  
  $("#btn1").click(function() {
  insertarNumero("1");
  });
  
  $("#btn2").click(function() {
  insertarNumero("2");
  });
  
  $("#btn3").click(function() {
  insertarNumero("3");
  });
  
  $("#btn4").click(function() {
  insertarNumero("4");
  });
  
  $("#btn5").click(function() {
  insertarNumero("5");
  });
  
  $("#btn6").click(function() {
  insertarNumero("6");
  });
  
  $("#btn7").click(function() {
  insertarNumero("7");
  });
  
  $("#btn8").click(function() {
  insertarNumero("8");
  });
  
  $("#btn9").click(function() {
  insertarNumero("9");
  });
  
  $("#btnPunto").click(function() {
  insertarPunto();
  });
  
  $("#btnAC").click(function() {
  borrarTodo();
  });
  
  $("#btnCE").click(function() {
  borrarUltimo();
  });
  
  $("#btnSuma").click(function() {
  operacion = "+";
  operando1 = parseFloat($("#resultado").val());
  $("#resultado").val("");
  });
  
  $("#btnResta").click(function() {
  operacion = "-";
  operando1 = parseFloat($("#resultado").val());
  $("#resultado").val("");
  });
  
  $("#btnMultiplicacion").click(function() {
  operacion = "*";
  operando1 = parseFloat($("#resultado").val());
  $("#resultado").val("");
  });
  
  $("#btnDivision").click(function() {
  operacion = "/";
  operando1 = parseFloat($("#resultado").val());
  $("#resultado").val("");
  });
  
  $("#btnIgual").click(function() {
  operando2 = parseFloat($("#resultado").val());
  realizarOperacion();
  });
  
  // Funciones
  function insertarNumero(numero) {
  var valorActual = $("#resultado").val();
  if (valorActual == "0") {
  $("#resultado").val(numero);
  } else {
  $("#resultado").val(valorActual + numero);
  }
  }
  
  function insertarPunto() {
  var valorActual = $("#resultado").val();
  if (valorActual.indexOf(".") == -1) {
  $("#resultado").val(valorActual + ".");
  }
  }
  
  function borrarTodo() {
  $("#resultado").val("0");
  operando1 = 0;
  operando2 = 0;
  operacion = "";
  }
  
  function borrarUltimo() {
  var valorActual = $("#resultado").val();
  var nuevoValor = valorActual.substring(0, valorActual.length - 1);
  if (nuevoValor == "") {
  $("#resultado").val("0");
  } else {
  $("#resultado").val(nuevoValor);
  }
  }
  
  function realizarOperacion() {
  var resultado = 0;
  switch (operacion) {
  case "+":
  resultado = operando1 + operando2;
  break;
  case "-":
  resultado = operando1 - operando2;
  break;
  case "*":
  resultado = operando1 * operando2;
  break;
  case "/":
  resultado = operando1 / operando2;
  break;
  }
  $("#resultado").val(resultado);
}
});

function cambiarColor(color) {
  // Eliminamos todas las clases que empiezan con "bg-" de la calculadora
  $("#calculadora").removeClass(function (index, className) {
    return (className.match(/(^|\s)bg-\S+/g) || []).join(" ");
  });
  // Agregamos la clase correspondiente al color seleccionado
  $("#calculadora").addClass(color);
}
$(document).ready(function() {
  // Almacenar el color actual en una variable
  var currentColor = "bg-default";

  // Eventos de clic para los botones de color
  $("#btnAzul").click(function() {
    $("#calculadora").removeClass(currentColor).addClass("bg-primary");
    currentColor = "bg-primary";
  });
  
  $("#btnGris").click(function() {
    $("#calculadora").removeClass(currentColor).addClass("bg-secondary");
    currentColor = "bg-secondary";
  });
  
  $("#btnRojo").click(function() {
    $("#calculadora").removeClass(currentColor).addClass("bg-danger");
    currentColor = "bg-danger";
  });

  $("#btnAmarillo").click(function() {
    $("#calculadora").removeClass(currentColor).addClass("bg-warning");
    currentColor = "bg-warning";
  });

  $("#btnVerde").click(function() {
    $("#calculadora").removeClass(currentColor).addClass("bg-success");
    currentColor = "bg-success";
  });

  $("#btnTurquesa").click(function() {
    $("#calculadora").removeClass(currentColor).addClass("bg-info");
    currentColor = "bg-info";
  });

  $("#btnNegro").click(function() {
    $("#calculadora").removeClass(currentColor).addClass("bg-dark");
    currentColor = "bg-dark";
  });
});

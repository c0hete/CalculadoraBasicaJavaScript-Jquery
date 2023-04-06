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
    })

//Cambio de colores
function cambiarEstiloCalculadora(estilo) {
    // Obtener el elemento de la calculadora
    var calculadora = document.getElementById("calculadora");
  
    // Cambiar la clase de la calculadora
    calculadora.className = "card calculadora-" + estilo;
  }


$("#btnAzul").click(function() {
    $(".calculadora").removeClass("calculadora-verde calculadora-roja").addClass("calculadora-azul");
  });
  
  $("#btnVerde").click(function() {
    $(".calculadora").removeClass("calculadora-azul calculadora-roja").addClass("calculadora-verde");
  });
  
  $("#btnRojo").click(function() {
    $(".calculadora").removeClass("calculadora-azul calculadora-verde").addClass("calculadora-roja");
  });

  $(document).ready(function() {

    // Definimos las variables
    var operando1 = 0;
    var operando2 = 0;
    var operacion = "";
  
    // Eventos de clic para los botones
    $("#btn0").click(function() {
      insertarNumero("0");
    });
  
    // Aquí van los otros eventos de clic para los botones
  
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
  
    // Aquí van las otras funciones
  
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
  
    // Cambiar color de fondo de la calculadora
    $("#calculadora .btn").click(function() {
      var color = $(this).data("color");
      $("#calculadora").removeClass("bg-default bg-blue bg-green bg-red").addClass("bg-" + color);
    });
  
  });
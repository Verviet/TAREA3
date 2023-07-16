class Numeros {
  limpiar() {
    document.getElementById('num').value = "";
    document.getElementById('multi').value = "";
    document.getElementById('resp').textContent = "Respuesta";
  }

  limpiar1() {
    document.getElementById('cantidad').value = "";
    document.getElementById('precio').value = "";
    document.getElementById('pago').textContent = "Total a pagar";
    document.getElementById('vuelto').textContent = "Vuelto";
  }

  limpiar2() {
    document.getElementById('num').value = "";
    document.getElementById('resp').textContent = "Divisores";
  }

  limpiar3() {
    document.getElementById('num').value = "";
    document.getElementById('resp').textContent = "Cantidad de divisores";
  }

  limpiar4() {
    document.getElementById('num').value = "";
    document.getElementById('resp').textContent = "Respuesta";
  }

  vuelto() {

    let costo = 0;
    let cantidad = parseFloat(document.getElementById('cantidad').value);
    let precio = parseFloat(document.getElementById('precio').value);
    costo = parseFloat(document.getElementById('costo').value);


    let pag = document.getElementById('pago');
    let vuel = document.getElementById('vuelto');

    let totalPagar = cantidad * precio;
    let vuelto = costo - totalPagar;

    pag.textContent = 'Debe cancelar: $' + totalPagar;


    if (isNaN(costo) || costo === 0) {

      vuel.textContent = 'Vuelto';

    } else {

      vuel.textContent = 'Su vuelto es de: $' + vuelto;

    }
  }


  multiplo() {
    let num = document.getElementById('num').value;
    let mul = document.getElementById('multi').value;
    num = parseInt(num)
    mul = parseInt(mul)

    let resp = document.getElementById('resp');

    if (num % mul == 0) {
      resp.textContent = `${mul} Es multiplo de ${num}`
    } else {
      resp.textContent = `${mul} No es multiplo de ${num}`
    }
    // console.log(num,num.id,num.value)
    // console.log(mul)
    // console.log(resp)
    // console.log(resp.textContent)

  }
  divisores() {

    let num = document.getElementById('num').value
    num = parseInt(num)

    let resp = document.getElementById('resp')
    let divisor = 1;

    resp.textContent = "Los divisores son: "

    while (divisor <= num) {

      if (num % divisor == 0) {

        resp.textContent += divisor + ", ";
      }
      divisor++;
    }

    resp.textContent = resp.textContent.slice(0, -2);

  }


  suma_divisores() {
    let num = document.getElementById('num').value;
    num = parseInt(num);

    let resp = document.getElementById('resp');
    let divisor = 1;
    let suma = 0;
    let divisoresTexto = "Los divisores son: ";

    while (divisor <= num) {
      if (num % divisor === 0) {
        divisoresTexto += divisor + ", ";
        suma += divisor;
      }
      divisor++;
    }

    resp.textContent = divisoresTexto.slice(0, -2) + " y la suma de dichos divisores es igual a: " + suma;
  }


  cantidad_divisores() {

    let num = document.getElementById('num').value
    num = parseInt(num)

    let resp = document.getElementById('resp')
    let divisor = 1;
    let contador = 0;

    while (divisor <= num) {

      if (num % divisor == 0) {

        contador++;
      }
      divisor++;
    }

    resp.textContent = "La cantidad de divisores del número " + num + " es " + contador;

  }

  perfecto() {

    let num = document.getElementById('num').value;
    num = parseInt(num);

    let resp = document.getElementById('resp');
    let divisor = 1;
    let suma = 0;

    while (divisor <= num / 2) {
      if (num % divisor === 0) {

        suma += divisor;
      }
      divisor++;
    }

    if (suma === num) {

      resp.textContent = "El número " + num + " es perfecto";
    } else {

      resp.textContent = "El número " + num + " no es perfecto";
    }

  }

  amigos() {

    let num = document.getElementById('num').value;
    let mul = document.getElementById('multi').value;
    num = parseInt(num);
    mul = parseInt(mul);

    let resp = document.getElementById('resp');
    let divisor = 1;
    let divisor2 = 1;
    let suma = 0;
    let suma2 = 0;

    while (divisor <= num / 2) {
      if (num % divisor === 0) {

        suma += divisor;
      }
      divisor++;
    }

    while (divisor2 <= mul / 2) {
      if (mul % divisor2 === 0) {

        suma2 += divisor2;
      }
      divisor2++;
    }

    if (suma === mul && suma2 == num) {

      resp.textContent = "Los numeros son amigos";
    } else {

      resp.textContent = "Los numeros no son amigos";
    }
  }

  primos() {

    let num = document.getElementById('num').value;
    num = parseInt(num);

    let resp = document.getElementById('resp');
    let divisor = 1;
    let suma = 0;

    while (divisor <= num) {
      if (num % divisor === 0) {

        suma += divisor;
      }
      divisor++;
    }

    if (suma > num + 1) {

      resp.textContent = "El número " + num + " no es un numero primo";

    } else {

      resp.textContent = "El número " + num + " es un numero primo";
    }
  }

  primos_gemelos() {

    let num = document.getElementById('num').value;
    let mul = document.getElementById('multi').value;
    num = parseInt(num);
    mul = parseInt(mul);

    let resp = document.getElementById('resp');
    let divisor = 1;
    let divisor1 = 1;
    let suma = 0
    let suma1 = 0;

    while (divisor <= num) {
      if (num % divisor === 0) {

        suma += divisor;
      }
      divisor++;
    }

    while (divisor1 <= mul) {
      if (mul % divisor1 === 0) {

        suma1 += divisor1;
      }
      divisor1++;
    }

    if (suma != num + 1 || suma1 != mul + 1) {

      resp.textContent = "¡Error! Ambos números a ingresar deben ser primos";

    } else {

      if (num + 2 === mul || mul + 2 === num) {

        resp.textContent = "Los números primos son gemelos";
      } else {

        resp.textContent = "Los números primos no son gemelos"
      }
    }
  }

  invertido() {

    let num = document.getElementById('num').value

    num = parseInt(num);

    let resp = document.getElementById('resp');


    resp.textContent = 'El número invertido es: ' + num.toString().split('').reverse().join('');

  }

  cantidad_digitos() {


    let num = parseInt(document.getElementById('num').value);

    let resp = document.getElementById('resp');


    resp.textContent = 'La cantidad de digitos del número es: ' + num.toString().length;

  }

  factorial() {

    let num = parseInt(document.getElementById('num').value);
    let resp = document.getElementById('resp');
    let factorial = 1;

    if (num >= 0) {

      for (let i = 1; i <= num; i++) {

        factorial = i * factorial;
      }
    } else {

      resp.textContent = "El número debe ser positivo o cero";
    }

    resp.textContent = "El factorial de " + num + " es: " + factorial;
  }

  exponente() {

    let num = parseInt(document.getElementById('num').value);
    let mul = parseInt(document.getElementById('multi').value);
    let respuesta = 0;
    let resp = document.getElementById('resp');

    respuesta = num ** mul;

    resp.textContent = "El resultado es: " + respuesta;


  }

  tabla() {

    let num = parseInt(document.getElementById('num').value);
    let resp = document.getElementById('resp');
    let tabla = "";
    for (let i = 1; i <= 12; i++) {

      tabla += num + " * " + i + " = " + num * i + "<br>";
    }

    resp.innerHTML = "La tabla del " + num + " es: " + "<br>" + "<br>" + tabla;
  }

  fibonacci() {

    let num = parseInt(document.getElementById('num').value);
    let mul = parseInt(document.getElementById('multi').value);
    let resp = document.getElementById('resp');
    let sucesion = "";

    for (let i = 1; i <= 10; i++) {

      sucesion += num + ", ";
      let siguienteNumero = num + mul;
      num = mul;
      mul = siguienteNumero;
    }
    
    resp.innerHTML = "Sucesión original: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55..."+ "<br>" + "<br>"+ "Su sucesión: "+ sucesion.slice(0, -2) + "...";
  }

}
const numero = new Numeros()
//numero.multiplo()


# TARJETA DE CRÉDITO VÁLIDA

Después de familiarizarnos con ES6, iniciamos este proyecto, donde el objetivo es crear un sitio que pida el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn. 


![muedtra](https://raw.githubusercontent.com/velvetcerise/card-validator/master/assets/images/validacion.png)

![valdación](https://raw.githubusercontent.com/velvetcerise/card-validator/master/assets/images/val2.png)
Los datos de la validación se muestran en la consola.



# Instrucciones
## Valida datos de tarjetas de crédito

La función debe recibir un elemento DOM que contenga
`<input>`s con los siguientes nombres (atributo `name`):

* `cn` (Card Number): El número de la tarjeta de crédito
* `exp` (Expiry Date): Fecha de expiración
* `cvv` (Card Verification Value): Código de validación de 3 dígitos
* `name`: Nombre completo como aparece en la tarjeta

## Ejemplo

```html
<form>
  <div class="form-group">
    <label for="cn">Número de tarjeta</label>
    <input id="cn" name="cn" />
  </div>
  <div class="form-group">
    <label for="exp">Fecha de vencimiento</label>
    <input id="exp" name="exp" />
  </div>
  <div class="form-group">
    <label for="cvv">CVV</label>
    <input id="cvv" name="cvv" />
  </div>
  <div class="form-group">
    <label for="name">Nombre completo</label>
    <input id="name" name="name" />
  </div>
  <input type="submit" value="Pagar" />
</form>
```

#### Requisitos
Usar el algoritmo de Luhn, el cual únicamente usa los numeros de la tarjeta de crédito. **No** usa el código de verificacion, fecha de vencimiento , el nombre, ni la dirección.

#### Cosas a considerar:

1. Necesitas usar métodos de arreglo (.forEach, .map,etc.) sin embargo, estos metodos son para **arreglos**. Si yo hago:

¿Tengo un arreglo? ¿Algo diferente? ¿Cómo le hago para implementar metodos de arreglo en otras cosas que no son arreglos?

2. La solucion se tiene que hacer **con ES6** con los temas vistos en clase.




#### < L a b o r a t o r i a >

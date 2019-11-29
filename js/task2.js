/**
 * Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
поле, которое хранит цвет маркера;
поле, которое хранит количество чернил в маркере (в процентах); метод для печати
(метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор,
пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера
 и добавив метод для заправки маркера.
Продемонстрировать работу написанных методов. 
 */

class Marker {
  restInterest = 5;

  constructor(color) {
    this.color = color;
  }
  textLength(text) {
    let output = "";
    for (var i = 0; i < text.length; i++) {
      if (this.restInterest > 0) {
        output += text[i];
      } else {
        console.log('Marker empty!')
        break;
      }
      if (text[i] == " ") {
        continue;
      }
      this.restInterest -= 0.5;
    }
    console.log(`%c ${output}`, `color: ${this.color}`);
  }
}

class RefillableMarker extends Marker {

  refull(a) {
    if (this.restInterest + a > 100) {
      this.restInterest = 100;
    }
    else {
      this.restInterest += a;
    }
  }
}

let marker1 = new Marker('green');
console.log(marker1);
marker1.textLength(`Is it good to look at the work of classmates?
   The code is owned by artofnext.`)
let RefillableMarker1 = new RefillableMarker('red');
RefillableMarker1.textLength('eerrxxxxxxxxr');
console.log(RefillableMarker1.restInterest)
RefillableMarker1.refull(80);
console.log(RefillableMarker1.restInterest)
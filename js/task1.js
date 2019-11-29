/**
 *  Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
поле, хранящее радиус окружности;
get-свойство, возвращающее радиус окружности;
set-свойство, устанавливающее радиус окружности;
get-свойство, возвращающее диаметр окружности;
метод, вычисляющий площадь окружности;
метод, вычисляющий длину окружности.
Продемонстрировать работу свойств и методов. 
 */

class Circle {
  constructor(r) {
    this.r = r;
  }
  getR() {
    return this.r;
  }
  setR(r) {
    this.r = r;
  }
  getD() {
    return this.r * 2;
  }
  pCircle() {
    return (Math.PI * (this.r * this.r)).toFixed(2);
  }
  lengthCircle() {
    return (2 * Math.PI * this.r).toFixed(2);
  }
}
let circle1 = new Circle(5)
console.log(circle1.pCircle());
console.log(circle1.lengthCircle());
circle1.setR(3);
console.log(circle1.getD());

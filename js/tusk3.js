/**
 *  Реализовать класс Employee, описывающий работника, и создать массив работников банка.
Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка.
 Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
 */

class Employee {
  constructor(name, experience, sex, age, education) {
    this.name = name;
    this.experience = experience;
    this.sex = sex;
    this.age = age;
    this.education = education;
  }
}

let employees = [
  new Employee("Olga", "10 year", "female", "39", "manager"),
  new Employee("Sasha", "3 year", "female", "39", "admin"),
  new Employee("Kolya", "8 year", "female", "45", "banker"),
  new Employee("Sergey", "2 year", "female", "27", "manager"),
  new Employee("July", "5 year", "female", "30", "banker"),
];

class EmpTable {
  constructor(arr) {
    this.table = document.createElement("table");
    this.table.style.border = '3px solid black';
    this.tr = document.createElement("tr");
    this.th = document.createElement("th");
    this.th.innerText = 'name';
    this.tr.appendChild(this.th);
    this.th = document.createElement("th");
    this.th.innerText = 'experience';
    this.tr.appendChild(this.th);
    this.th = document.createElement("th");
    this.th.innerText = 'sex';
    this.tr.appendChild(this.th);
    this.th = document.createElement("th");
    this.th.innerText = 'age';
    this.tr.appendChild(this.th);
    this.th = document.createElement("th");
    this.th.innerText = 'education';
    this.tr.appendChild(this.th);
    this.table.appendChild(this.tr);
    for (let i = 0; i < arr.length; i++) {
      this.tr = document.createElement("tr");
      this.td = document.createElement("td");
      this.td.innerText = arr[i].name;
      this.tr.appendChild(this.td);
      this.td.style.border = '1px solid black'
      this.td = document.createElement("td");
      this.td.innerText = arr[i].experience;
      this.tr.appendChild(this.td);
      this.td.style.border = '1px solid black'
      this.td = document.createElement("td");
      this.td.innerText = arr[i].sex;
      this.tr.appendChild(this.td);
      this.td.style.border = '1px solid black'
      this.td = document.createElement("td");
      this.td.innerText = arr[i].age;
      this.tr.appendChild(this.td);
      this.td.style.border = '1px solid black'
      this.td = document.createElement("td");
      this.td.innerText = arr[i].education;
      this.tr.appendChild(this.td);
      this.td.style.border = '1px solid black'
      this.table.appendChild(this.tr);
    }
  }
  getHtml(){
    return  document.body.appendChild(this.table);
  }
}

let obj = new EmpTable(employees);
obj.getHtml()




import sayImportWork from './test';

sayImportWork();

console.log('test webpack bundle');

const arrowFunc = () => {
  if (true) {
    console.log(true);
  }
};

class Animal {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log('name', name);
  }
}

const dog = new Animal('Tusik');

dog.logName();
arrowFunc();
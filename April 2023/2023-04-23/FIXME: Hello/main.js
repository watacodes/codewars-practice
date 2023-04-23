/*

Codewars, 6k: FIXME: Hello

*/


class Dinglemouse {

  constructor() {
    this.res = {};
  }

  setAge(age) {
      this.age = age;
      this.res.age = ` I am ${age}.`;
      return this;
  }

  setSex(sex) {
      this.sex = sex;
      this.res.sex = ` I am ${sex === 'M' ? 'male' : 'female'}.`;
      return this;
  }

  setName(name) {
      this.name = name;
      this.res.name = ` My name is ${name}.`;
      return this
  }

  hello() {
    return 'Hello.' + Object.values(this.res).join('');
  }
}
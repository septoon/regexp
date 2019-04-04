class Validator {
  validateUsername(name) {
    this.name = name;
    const regSpace = /(^[\ ])|([\ ]$)/;
    const dubleSpace = /^((?!\ {2}).)*$/;
    const reg = /^[a-z\ -]+$/i;
    if (!regSpace.test(name) && reg.test(name) && dubleSpace.test(name)) {
      return this.name;
    } throw new Error('Wrong name!');
  }
}

export default Validator;

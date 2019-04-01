class Validator {
  validateUsername(name) {
    this.name = name;
    const regSpace = /(^[\s])|([\s]$)/;
    const dubleSpace = /^((?!\s{2}).)*$/;
    const reg = /^[a-z\s-]+$/i;
    if (!regSpace.test(name) && reg.test(name) && dubleSpace.test(name)) {
      return this.name;
    } throw new Error('Wrong name!');
  }
}

export default Validator;

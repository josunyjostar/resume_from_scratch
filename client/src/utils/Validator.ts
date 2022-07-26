interface ValidatorConfig {
  [className: string]: {
    [propsName: string]: string[];
  };
}

class Validator {
  private constructor() {}
  private static inst: Validator;
  private static registerd: ValidatorConfig;

  static getInst(): Validator {
    if (Validator.inst) {
      return this.inst;
    }
    this.inst = new Validator();
    this.registerd = {};
    return this.inst;
  }

  Required(target: any, propName: string) {
    Validator.registerd[target.constructor.name] = {
      ...Validator.registerd[target.constructor.name],
      [propName]: ["required"],
    };
  }
}

export default Validator;

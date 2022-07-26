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

  ArrayInitRequired(target: any, propName: string) {
    Validator.registerd[target.constructor.name] = {
      ...Validator.registerd[target.constructor.name],
      [propName]: ["array-init-required"],
    };
  }

  validate(obj: any) {
    const objValidatorConfig = Validator.registerd[obj.constructor.name];
    if (!objValidatorConfig) {
      return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
      for (const validator of objValidatorConfig[prop]) {
        switch (validator) {
          case "required":
            isValid = isValid && !!obj[prop];
            break;
          case "array-init-required":
            isValid = isValid && obj[prop].length > 0;
            break;
        }
      }
    }
    return isValid;
  }
}

export default Validator;

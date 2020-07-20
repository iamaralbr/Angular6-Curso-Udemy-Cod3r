export const compare = (controlName1: string, controlName2: string) => {
  return (group: any): { [key: string]: boolean } => {
    const ctrl1 = group.get(controlName1);
    const ctrl2 = group.get(controlName2);
    if (!ctrl1 || !ctrl2) {
      return undefined;
    }
    if (ctrl1.value !== ctrl2.value) {
      let error = { notMatch: true }
      ctrl2.setErrors(error) //Adiciono um erro aqui
      return error
    } else {
      ctrl2.setErrors(null)
    }
    return undefined;
  }
}

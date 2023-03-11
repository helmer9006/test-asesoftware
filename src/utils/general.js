/* valida que la fecha enviada tenga el formato dd/mm/yyyy*/
const DATE_REGEX = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;
exports.validarFecha = (fecha) => {
  if (!fecha.match(DATE_REGEX)) {
    return false;
  }

  /* Comprobar los días del mes */
  const day = parseInt(fecha.split("/")[0]);
  const month = parseInt(fecha.split("/")[1]);
  const year = parseInt(fecha.split("/")[2]);
  const monthDays = new Date(year, month, 0).getDate();
  if (day > monthDays) {
    return false;
  }

  return true;
};

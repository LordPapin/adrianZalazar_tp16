const bicicletas = require('./datosBici');

const dhBici = {
  bicicletas: bicicletas,

  buscarBici(id) {
    return this.bicicletas.find(bici => (bici.id) === id) || null;
  },

  venderBici(id) {
    const bici = this.buscarBici(id);
    if (bici) {
      bici.vendida = true;
      return bici;
    } else {
      return "Bicicleta no encontrada";
    }
  },
  aumentoBici(porcentaje) {
    return this.bicicletas.map(bici => {
      bici.precio = bici.precio + (bici.precio * porcentaje / 100);
      return bici;
    });
  },

  biciPorRodado(rodado) {
    return this.bicicletas.filter(bici => bici.rodado === rodado);
  },

  listarTodasLasBici() {
    this.bicicletas.forEach(bici => {
      console.log(`ID: ${(bici.id)}`);
      console.log(`Marca: ${bici.marca}`);
      console.log(`Modelo: ${bici.modelo}`);
      console.log(`Rodado: ${bici.rodado}`);
      console.log(`Año: ${bici.anio}`);
      console.log(`Color: ${bici.color}`);
      console.log(`Peso: ${bici.peso}`);
      console.log(`Tipo: ${bici.tipo}`);
      console.log(`Precio: ${bici.precio}`);
      console.log(`Vendida: ${bici.vendida}`);
      console.log('------------------------');
    });
  },

  biciParaLaVenta() {
    return this.bicicletas.filter(bici => !bici.vendida);
  },

  totalDeVentas() {
    return this.bicicletas.reduce((total, bici) => {
      if (bici.vendida) {
        return total + bici.precio;
      } else {
        return total;
      }
    }, 0);
  }
};

// Pruebas
console.log(dhBici.buscarBici(10));
console.log(dhBici.venderBici(10));
console.log(dhBici.biciParaLaVenta());
console.log(dhBici.totalDeVentas());
console.log(dhBici.aumentoBici(10));
console.log(dhBici.biciPorRodado(29));
dhBici.listarTodasLasBici();
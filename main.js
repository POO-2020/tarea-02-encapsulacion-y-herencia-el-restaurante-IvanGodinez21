import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js";
import Direccion from "./direccion.js"
import Producto from "./producto.js";
import ElementoPedido from "./elementopedido.js";
import Pedido from "./pedido.js";
import Precio from "./precio.js";
import Cliente from "./cliente.js";
import ClienteFrecuente from "./clientefrecuente.js";
import Restaurante from "./restaurante.js";

//CLIENTES
const clienteA = new Cliente({
    nombre: "Jesus Ivan Godinez Martinez",
    direccion: new Direccion("Calle", "Selvas", 1120, "" , "Milenio"),
    telefono: 3308648
})
const clienteB = new ClienteFrecuente({
    nombre: "Cristian Alejandro Godinez Martinez",
    direccion: new Direccion("Calle", "Selvas", 1121, "" , "Milenio"),
    telefono: 3318648,
    numero: 1,
    fecha: new Fecha(21, 9, 2015)
})

class Main {
    probarFecha() {
        console.log(`<---------Fecha--------->`);
        //let dia = prompt("Ingresa el dia");
        //let mes = prompt("Ingresa el mes");
        //let año = prompt("Ingresa el año");
        //let fecha = new Fecha(dia, mes, año);
        let fecha = new Fecha(19, 2, 2000);
        console.log(`La fecha indicada es: ${fecha.getFecha()}`);
        console.log(`El día fue: ${fecha.getDiaFecha()}`);
        console.log(`Han pasado ${fecha.getAños()} años`);
        console.log(`Han pasado ${fecha.getMeses()} meses`);
        console.log(`Han pasado ${fecha.getSemanas()} semanas`);
        console.log(`Han pasado ${fecha.getDias()} días`);
    }
    probarTiempo() {
        console.log(`<---------Tiempo--------->`);
        let tiempo = new Tiempo(10, 10, "PM");
        console.log(`La hora en el formato 24HRS es: ${tiempo.getFormato24()}`);
        console.log(`La hora en el formato AM/PM es: ${tiempo.getFormato12()}`);
    }
    probarDireccion() {
        console.log(`<---------Direccion--------->`);
        let direccion = new Direccion("Avenida", "Siempre Viva", 123, 2, "Buena vista");
        console.log(`La dirección corta: ${direccion.getFormatoCorto()}`);
        console.log(`La dirección extendida: ${direccion.getFormatoExtendido()}`);
    }
    probarPrecio() {
        console.log(`<---------Precio--------->`)
        let precio1 = new Precio(127)
        let precio2 = new Precio(127.45)
        let precio3 = new Precio(1127.45)
        let precio4 = new Precio(34127.45)
        console.log(`${precio1.getPrecio()}`)
        console.log(`${precio2.getPrecio()}`)
        console.log(`${precio3.getPrecio()}`)
        console.log(`${precio4.getPrecio()}`)
    }
    probarProducto() {
        console.log(`<---------Producto--------->`);
        let producto1 = new Producto("Pizza", "Mexicana", "Grande", new Precio(200));
        let producto2 = new Producto("Pizza", "Pepperoni", "Grande", new Precio(100));
        console.log(`${producto1.getDescripcion()}`);
        console.log(`${producto2.getDescripcion()}`);
    }
    probarElementoPedido() {
        console.log(`<---------Elemento Pedido--------->`);
        let cantidad = 64;
        let costo1 = new Precio(200*cantidad);
        let producto = new Producto("Pizza", "Mexicana", "Grande", costo1);
        let elementopedido = new ElementoPedido({
            cantidad: cantidad,
            precio: costo1,
            producto: producto
        });
        console.log(`${elementopedido.getDescripcionpedido()}`);
    }
    probarPedido() {
        console.log(`<---------Pedido--------->`);
        let cantidad1 = 1
        let cantidad2 = 3
        let precio1 = new Precio(200)
        let precio2 = new Precio(100)
        let elemento1 = new ElementoPedido({
            cantidad: cantidad1,
            precio: precio1,
            producto: new Producto("Pizza", "Mexicana", "Grande", precio1)
        });
        let elemento2 = new ElementoPedido({
            cantidad: cantidad2, 
            precio: precio2,
            producto: new Producto("Pizza", "Pepperoni", "Grande", precio2)
        });
        let pedido = new Pedido({
        fecha: new Fecha(1, 13, 2020),
        hora: new Tiempo(2, 22, "pm"),
        cliente: clienteA
        });
        pedido.agregarElemento(elemento1);
        pedido.agregarElemento(elemento2);
        console.log("Cantidad de productos distintos: " + pedido.getNumeroElementos());
        console.log("Total de productos: " + pedido.getNumeroProductos()) ;
        pedido.listarElementos();
        console.log(pedido.getResumen());
        console.log("Costo total: " + pedido.getCostoTotal());
    }
    probarRestaurante() {
        let cantidad1 = 2
        let cantidad2 = 4
        let precio1 = new Precio(200)
        let precio2 = new Precio(100)
        let elemento1 = new ElementoPedido({
            cantidad: cantidad1,
            precio: precio1,
            producto: new Producto("Pizza", "Mexicana", "Grande", precio1)
        });
        let elemento2 = new ElementoPedido({
            cantidad: cantidad2, 
            precio: precio2,
            producto: new Producto("Pizza", "Pepperoni", "Grande", precio2)
        });
        let pedido1 = new Pedido({
            fecha: new Fecha(1, 13, 2020),
            hora: new Tiempo(2, 44, "pm"),
            cliente: clienteA
        });
        let pedido2 = new Pedido({
            fecha: new Fecha(1, 13, 2020),
            hora: new Tiempo(2, 12, "pm"),
            cliente: clienteB
        });
        let restaurante = new Restaurante("Papa's Pizzeria", 312454467, new Direccion ("Avenida", "Siempre Viva", 654, 1, "Buena vista"), 3124456446)
        console.log('<---------Restaurante--------->')
        restaurante.registrarProducto(elemento1)
        restaurante.registrarProducto(elemento2)
        pedido1.agregarElemento(elemento1)
        pedido2.agregarElemento(elemento2)
        restaurante.registrarPedido(pedido1)
        restaurante.eliminarPedido(pedido1)
        restaurante.modificarPedido(pedido2, pedido1)
        console.log(`-----Productos-----`)
        restaurante.listarProductos()
        console.log(`-----Pedidos-----`)
        console.log(restaurante.registrarPedido(pedido1))
        console.log(restaurante.buscarPedido(pedido1))
        console.log(restaurante.eliminarPedido(pedido1))
        console.log(restaurante.modificarPedido(pedido2, pedido1))
        restaurante.listarPedidos()
    }
    probarCliente() {
        console.log('<---------Cliente--------->')
        let cliente = new Cliente({
            nombre: "Jesus Ivan Godinez Martinez",
            direccion: new Direccion("Calle", "Selvas", 1120, "" , "Milenio"),
            telefono: 3308648
        })
        console.log(cliente.getPerfil())
    }
    probarClienteFrecuente() {
        console.log('<---------Cliente Frecuente--------->')
        let cliente = new ClienteFrecuente({
            nombre: "Cristian Alejandro Godinez Martinez",
            direccion: new Direccion("Calle", "Selvas", 1121, "" , "Milenio"),
            telefono: 3318648,
            numero: 1,
            fecha: new Fecha(21, 9, 2015)
        })
        console.log(cliente.getPerfil())
    }
}

let app = new Main
app.probarFecha();
app.probarTiempo();
app.probarDireccion();
app.probarPrecio();
app.probarCliente();
app.probarClienteFrecuente();
app.probarProducto();
app.probarElementoPedido();
app.probarPedido();
app.probarRestaurante();
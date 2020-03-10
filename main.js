import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js";
import Direccion from "./direccion.js"
import Producto from "./producto.js";
import ElementoPedido from "./elementopedido.js";
import Pedido from "./pedido.js";
import Precio from "./precio.js";
import Cliente from "./cliente.js";
import Restaurante from "./restaurante.js";

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
        let elementopedido = new ElementoPedido(cantidad, costo1, producto);
        console.log(`${elementopedido.getDescripcionpedido()}`);
    }
    probarPedido(){
        console.log(`<---------Pedido--------->`);
        let cantidad1 = 1
        let cantidad2 = 3
        let precio1 = new Precio(200)
        let precio2 = new Precio(100)
        let elemento1 = new ElementoPedido(cantidad1, precio1, new Producto("Pizza", "Mexicana", "Grande", precio1));
        let elemento2 = new ElementoPedido(cantidad2, precio2, new Producto("Pizza", "Pepperoni", "Grande", precio2));
        let pedido = new Pedido(
        new Fecha(1, 13, 2020),
        new Tiempo(2, 22, "pm"),
        new Cliente("Raul Castro Torres", new Direccion ("Avenida", "Siempre Viva", 123, 2, "Buena vista"), 3124456446)
        );
        pedido.agregarElemento(elemento1);
        pedido.agregarElemento(elemento2);
        console.log("Cantidad de productos distintos: " + pedido.getNumeroElementos());
        console.log("Total de productos: " + pedido.getNumeroProductos()) ;
        pedido.listarElementos();
        console.log(pedido.getResumen());
        console.log("Costo total: " + pedido.getCostoTotal());
    }
    probarRestaurante(){
        let cantidad1 = 2
        let cantidad2 = 4
        let precio1 = new Precio(200)
        let precio2 = new Precio(100)
        let producto1 = new ElementoPedido(cantidad1, precio1, new Producto("Pizza", "Mexicana", "Grande", precio1));
        let producto2 = new ElementoPedido(cantidad2, precio2, new Producto("Pizza", "Pepperoni", "Grande", precio2));
        let pedido1 = new Pedido(
        new Fecha(1, 13, 2020),
        new Tiempo(2, 22, "pm"),
        new Cliente("Raul Castro Torres", new Direccion ("Avenida", "Siempre Viva", 123, 2, "Buena vista"), 3124456446)
        );
        let pedido2 = new Pedido(
            new Fecha(1, 13, 2020),
            new Tiempo(2, 22, "pm"),
            new Cliente("Jesus Castro Martinez", new Direccion ("Avenida", "Siempre Viva", 129, 2, "Buena vista"), 3125156446)
            );
        let restaurante = new Restaurante("Papa's Pizzeria", 312454467, new Direccion ("Avenida", "Siempre Viva", 654, 1, "Buena vista"), 3124456446)
        console.log('<---------Restaurante--------->')
        restaurante.registrarProducto(producto1)
        restaurante.registrarProducto(producto2)
        pedido1.agregarElemento(producto1)
        pedido2.agregarElemento(producto2)
        restaurante.registrarPedido(pedido1)
        restaurante.registrarPedido(pedido2)
        console.log(`-----Pedidos-----`)
        restaurante.listarProductos()
        console.log(`-----Productos-----`)
        restaurante.listarPedidos()
    }
}

let app = new Main
app.probarFecha();
app.probarTiempo();
app.probarDireccion();
app.probarPrecio();
app.probarProducto();
app.probarElementoPedido();
app.probarPedido();
app.probarRestaurante();
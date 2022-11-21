class Servicios {
    constructor(nombre, titulo, img, precio){
        this.nombre = nombre
        this.titulo = titulo
        this.img = img
        this.precio = precio
    }
}

 const servicio1 = new Servicios('Básico', 'Audio + Iluminación', 'https://www.doplim.com.uy/adpics/2017/05/23/65924866f0a84a-discoteca-amplificacion-casamientos-15-anos-eventos-integrales-189442_4.jpg', '5500')
 const servicio2 = new Servicios('Standar', 'Audio + Iluminación + DJ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQTes4vMSOTRzNgexcERN4Teoixks1G7V57w&usqp=CAU', '7500')
 const servicio3 = new Servicios('Full', 'Audio + Iluminación LED + DJ', 'https://1.bp.blogspot.com/-HzjOXk64OKs/YO8fI9-WXMI/AAAAAAAAoIg/TggxotPxeQ8U_37vljuXRojAKdNxJ1y8ACNcBGAsYHQ/s1080/Discoteca%2Bmovil%2Ben%2BGuatemala%252C%2BAmplificacion%2Bde%2Bgrupos%2Ben%2Bguatemala%252C%2Bdisco%2Bmovil%2Bpara%2Beventos%2Ben%2BGuatemala%252C%2Bdisco%2Bmovil%2Bpara%2Bbodas%2Ben%2Bguatemala%252C%2Bdiscomovil%2Bpara%2B15%2Ba%25C3%25B1os%2Ben%2Bguatemala%252Canimacion%2Bde%2Beventos%2B%2B%25281%2B%25283%2529.jpg', '10000')
 const servicio4 = new Servicios('Full HD', 'Audio Digital + Iluminación LED + DJ', 'https://imagenes.heraldo.es/files/image_654_v1/uploads/imagenes/2022/04/29/imagen-de-una-discoteca.jpeg', '15000')

 const productos = [servicio1, servicio2, servicio3, servicio4]
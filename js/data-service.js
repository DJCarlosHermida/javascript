// SERVIVIOS

class Servicios {
    constructor(id, nombre, titulo, img, precio) {
        this.id = id
        this.nombre = nombre
        this.titulo = titulo
        this.img = img
        this.precio = precio
    }
}

const servicio1 = new Servicios(1, 'Básico', 'Audio + Iluminación', 'https://www.doplim.com.uy/adpics/2017/05/23/65924866f0a84a-discoteca-amplificacion-casamientos-15-anos-eventos-integrales-189442_4.jpg', '5500')
const servicio2 = new Servicios(2, 'Standar', 'Audio + Iluminación + DJ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQTes4vMSOTRzNgexcERN4Teoixks1G7V57w&usqp=CAU', '7500')
const servicio3 = new Servicios(3, 'Full', 'Audio + Iluminación LED + DJ', 'https://1.bp.blogspot.com/-HzjOXk64OKs/YO8fI9-WXMI/AAAAAAAAoIg/TggxotPxeQ8U_37vljuXRojAKdNxJ1y8ACNcBGAsYHQ/s1080/Discoteca%2Bmovil%2Ben%2BGuatemala%252C%2BAmplificacion%2Bde%2Bgrupos%2Ben%2Bguatemala%252C%2Bdisco%2Bmovil%2Bpara%2Beventos%2Ben%2BGuatemala%252C%2Bdisco%2Bmovil%2Bpara%2Bbodas%2Ben%2Bguatemala%252C%2Bdiscomovil%2Bpara%2B15%2Ba%25C3%25B1os%2Ben%2Bguatemala%252Canimacion%2Bde%2Beventos%2B%2B%25281%2B%25283%2529.jpg', '10000')
const servicio4 = new Servicios(4, 'Full HD', 'Audio Digital + Iluminación LED + DJ', 'https://imagenes.heraldo.es/files/image_654_v1/uploads/imagenes/2022/04/29/imagen-de-una-discoteca.jpeg', '15000')

const servicios = [servicio1, servicio2, servicio3, servicio4]

// BANDAS ROCK


class BandasRock {
    constructor(id, anio, nombre, img) {
        this.id = id
        this.anio = anio
        this.nombre = nombre
        this.img = img
    }
}

const banda01 = new BandasRock(01, '1949', 'Bill Haley & Hit Comets', 'https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/HGSYSSXY2JFUVCU36IBC674ZLY.jpg')
const banda02 = new BandasRock(02, '1950', 'Los TNT', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvf_rH2TF8K5-T3xObFuc2HLApZp6goNEOIi2rRsO6w&s')
const banda03 = new BandasRock(03, '1951', 'Jackie Brenston', 'https://cdns-images.dzcdn.net/images/artist/e7294a79c068b8faac2b7543bb7d9464/500x500.jpg')
const banda04 = new BandasRock(04, '1952', 'Alan Freed', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEpzk5IPoB8wfrCs1Lv1JyYxX1k0lkPZyOrzA7-9HpO5RXC7xTEI_Ee13ZneNZpeIfDc&usqp=CAU')
const banda05 = new BandasRock(05, '1953', 'Elvis Presley', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elvis-presley-1534412061.jpg?crop=0.974xw:1.00xh;0.0144xw,0&resize=640:*')
const banda06 = new BandasRock(06, '1954', 'The Spinners', 'https://thespinners.com/wp-content/uploads/2021/07/TheSpinners_LayeredCover.jpg')
const banda07 = new BandasRock(07, '1955', 'The  Tokens', 'https://i.discogs.com/VZlKKpjaQorVGqCl4qisxu_FStt6JbtYnnaEY0_H8W8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI2OTA5/Mi0xNjYyMTMxNzAz/LTE2MjAuanBlZw.jpeg')
const banda08 = new BandasRock(08, '1956', 'Chuck Berry', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Chuck_Berry_Midnight_Special_1973.JPG/220px-Chuck_Berry_Midnight_Special_1973.JPG')
const banda09 = new BandasRock(09, '1957', ' The Crickets', 'https://e.snmc.io/i/1200/s/53804cc399a20a531522f964f5df97b8/1518039')
const banda10 = new BandasRock(10, '1958', 'Bee Gees', 'https://www.infobae.com/new-resizer/BkluxQlyy_3tvwB0Axyt4Kh2SDs=/1200x900/filters:format(webp):quality(85)//s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/12/09131848/Bee-gees-4.jpg')
const banda11 = new BandasRock(11, '1959', 'The Kingmen', 'https://www.rollingstone.com/wp-content/uploads/2021/04/GettyImages-74280080.jpg')
const banda12 = new BandasRock(12, '1960', 'The Beatles', 'https://www.ecured.cu/images/thumb/3/3c/7C396001-AA89-4EF5-8732-342FE9276B38.jpg/1200px-7C396001-AA89-4EF5-8732-342FE9276B38.jpg')
const banda13 = new BandasRock(13, '1961', 'The Beach Boys', 'https://thebeachboys.com/wp-content/uploads/2022/08/The-Beach-Boys-About-e1659465914295.jpeg')
const banda14 = new BandasRock(14, '1962', 'The Rolling Stones', 'https://upload.wikimedia.org/wikipedia/commons/1/10/The_Rolling_Stones_Summerfest_in_Milwaukee_-_2015.jpg')
const banda15 = new BandasRock(15, '1963', 'Los Shakers', 'https://sc2.elpais.com.uy/files/article_default_content/uploads/2017/09/09/59b36f535def4.jpeg')
const banda16 = new BandasRock(16, '1964', 'Pink Floyd', 'https://indiehoy.com/wp-content/uploads/2020/06/pink-floyd.jpg')
const banda17 = new BandasRock(17, '1965', 'The Who', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Who_-_1975.jpg/1200px-Who_-_1975.jpg')
const banda18 = new BandasRock(18, '1966', 'The Bar-Kays', 'https://images.sk-static.com/images/media/profile_images/artists/251031/huge_avatar')
const banda19 = new BandasRock(19, '1967', 'Creedence', 'https://elcomercio.pe/resizer/QXko2mdg0d9s4GarjrwGC7WYIM0=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FJJVEAOQPRAOPHP564VMWD5IVY.jpg')
const banda20 = new BandasRock(20, '1968', 'Led Zeppelin', 'https://www.gaceta.unam.mx/wp-content/uploads/2019/01/190107-Cult2_destaca-princ.jpg')
const banda21 = new BandasRock(21, '1969', 'Mountain', 'https://3.bp.blogspot.com/_eZr3jfyluig/TO854hesdII/AAAAAAAAAa0/IvP6xJKuCtE/s1600/Diapositiva1.JPG')
const banda22 = new BandasRock(22, '1970', 'Queen', 'https://historia-biografia.com/wp-content/uploads/2018/11/queen.webp')
const banda23 = new BandasRock(23, '1971', 'Eagles', 'https://www.gruposamericanos.com/wp-content/uploads/2019/12/los-eagles.jpg')
const banda24 = new BandasRock(24, '1972', 'Abba', 'https://www.cmtv.com.ar/imagenes_artistas/2917.jpg?ABBA')
const banda25 = new BandasRock(25, '1973', 'ACDC', 'https://www.guioteca.com/rock/files/2014/04/acdc-highway-two-hell-445_opt.jpg')
const banda26 = new BandasRock(26, '1974', 'Ramones', 'https://img2.rtve.es/i/?w=1600&i=1459952803518.jpg')
const banda27 = new BandasRock(27, '1975', 'Air Supply', 'https://www.rivercreeresort.com/wp-content/uploads/2021/06/AirSupply-2022-Benefit_PPTInternal.jpg')
const banda28 = new BandasRock(28, '1976', 'U2', 'https://i0.wp.com/rockandblog.net/wp-content/uploads/2021/11/u2-nuevo-album.jpg')
const banda29 = new BandasRock(29, '1977', 'Village People', 'https://m.media-amazon.com/images/M/MV5BZjU2ZGI5YmMtN2FmZi00NWEyLTgxOGYtYTU3YTc3OGQyZGFhL2ltYWdlXkEyXkFqcGdeQXVyMTY3MTU0Mzg@._V1_.jpg')
const banda30 = new BandasRock(30, '1978', 'Whitesnake', 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO2hfphC-default.jpg')
const banda31 = new BandasRock(31, '1979', 'Europe', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Europe_the_band_in_Stockholm_2016.jpg/1200px-Europe_the_band_in_Stockholm_2016.jpg') 
const banda32 = new BandasRock(32, '1980', 'Depeche Mode', 'https://imagenes.elpais.com/resizer/w212nZUvnJ8pLMDV5AC4WHk_a_E=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/I2W3YYSS3VPD3RNU4L3O5G7TUI.jpg')
const banda33 = new BandasRock(33, '1981', 'Pet Shop Boys', 'https://upload.wikimedia.org/wikipedia/commons/8/86/Pet_Shop_Boys_interview_2013_still.png')
const banda34 = new BandasRock(34, '1982', 'Soda Stereo', 'http://www.cmtv.com.ar/imagenes_artistas/276.jpg?Soda%20Stereo')
const banda35 = new BandasRock(35, '1983', 'Bon Jovi', 'https://images.ecestaticos.com/je6kdi6WU-LKqwgZfKWth8sZSsM=/0x109:2136x1711/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fc63%2Ff1d%2F732%2Fc63f1d732a367b522e16086ec2823a47.jpg')
const banda36 = new BandasRock(36, '1984', 'The Connells', 'https://i.discogs.com/VfOevZkKChuqVl2-JoflHRFuQg5idH2w9op98S5vhrI/rs:fit/g:sm/q:90/h:436/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI4OTc0/Ni0xNTM5ODA5NTU1/LTkzNDcuanBlZw.jpeg')
const banda37 = new BandasRock(37, '1985', 'Guns N Roses', 'https://sc2.elpais.com.uy/files/article_default_content/uploads/2017/09/10/59b4f60374d23.jpeg')
const banda38 = new BandasRock(38, '1986', 'Maná', 'https://i.scdn.co/image/ab6761610000e5eb152dcec8175d19fb12eeb8e0')
const banda39 = new BandasRock(39, '1987', 'Nirvana', 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/kurt-cobain-print-nirvana-band-grunge-alternative-rock-ziggy-print.jpg')
const banda40 = new BandasRock(40, '1988', 'Divididos', 'https://www.cmtv.com.ar/imagenes_artistas/90.jpg')
const banda41 = new BandasRock(41, '1989', 'The Cranberries', 'https://upload.wikimedia.org/wikipedia/commons/7/7f/The_Cranberries_Live_%40_Montreal_%288375953017%29.jpg')
const banda42 = new BandasRock(42, '1990', 'Pearl Jam', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/PearlJam-Oakland-2013.JPG/1200px-PearlJam-Oakland-2013.JPG')
const banda43 = new BandasRock(43, '1991', 'Oasis', 'https://www.alohacriticon.com/wp-content/uploads/2004/01/oasis-foto-biografia.jpg')
const banda44 = new BandasRock(44, '1992', 'Hanson', 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/02/12/15499953302438.jpg')
const banda45 = new BandasRock(45, '1993', 'Korn', 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Korn%2C_2013.jpg')
const banda46 = new BandasRock(46, '1994', 'Foo Fighters', 'https://upload.wikimedia.org/wikipedia/commons/4/4b/FoosLondonStad220618-124_%2842989552522%29.jpg')
const banda47 = new BandasRock(47, '1995', 'La Vela Puerca', 'https://www.cmtv.com.ar/imagenes_artistas/167.jpg')
const banda48 = new BandasRock(48, '1996', 'Nightwish', 'https://lh3.googleusercontent.com/75-seCiSGbPcyEeYEjtyIh8ZRuV2STunxb9786l3SMSpOQxQmttWWkmr0vgpzrgYDGaAaC2icxKLtyAu3rzaP2k')
const banda49 = new BandasRock(49, '1997', 'Vengaboys', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Vengaboys.jpg/1024px-Vengaboys.jpg')
const banda50 = new BandasRock(50, '1998', 'Gorillaz', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gorillaz_in_Miami.jpg/1920px-Gorillaz_in_Miami.jpg')
const banda51 = new BandasRock(51, '1999', 'The Sounds', 'https://upload.wikimedia.org/wikipedia/en/4/41/The_Sound_band.jpg')
const banda52 = new BandasRock(55, '2000', 'Linkin Park', 'https://static.eldiario.es/clip/1df45631-4f7d-44c7-a149-9b85b3eceb4f_16-9-aspect-ratio_default_0.jpg')
const banda53 = new BandasRock(53, '2001', 'Fall Out Boy', 'https://lh3.googleusercontent.com/ePMQpFFKcbfCckXP3ncEzZQ0BznVQPxteEozjeNwzvIc7YNgxkTmRzHXdueZT8Vg3_qHRbGCu5awGUleemNLyCR-')
const banda54 = new BandasRock(54, '2002', 'RED', 'https://images.squarespace-cdn.com/content/v1/54bfc46be4b0a0e8a51ebbf6/1559868475780-606E02MHG1Q8LAWH3R51/RED8A.jpg')
const banda55 = new BandasRock(55, '2003', 'Red Hot Chilli Peppers', 'https://img.youtube.com/vi/YlUKcNNmywk/maxresdefault.jpg?auto=webp&width=494')
const banda56 = new BandasRock(56, '2004', 'The Rasmus', 'https://crazyminds.es/wp-content/uploads/The-Rasmus-2022.jpeg')

const bandasRock = [banda01, banda02, banda03, banda04, banda05, banda06, banda07, banda08, banda09, banda10,
                    banda11, banda12, banda13, banda14, banda15, banda16, banda17, banda18, banda19, banda20,
                    banda21, banda22, banda23, banda24, banda25, banda26, banda27, banda28, banda29, banda30,
                    banda31, banda32, banda33, banda34, banda35, banda36, banda37, banda38, banda39, banda40,
                    banda41, banda42, banda43, banda44, banda45, banda46, banda47, banda48, banda49, banda50,
                    banda51, banda52, banda53, banda54, banda55, banda56]


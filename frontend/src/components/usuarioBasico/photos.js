const fotos = [
  { src: 'https://okdiario.com/img/2021/01/04/-por-que-tu-perro-se-comporta-de-diferente-forma-con-varias-personas_-1-655x368.jpg' },
  { src: 'https://thepets.es/wp-content/uploads/2022/02/Nugget-y-Yaiza-1.jpg' },
  { src: 'https://laopinion.com/wp-content/uploads/sites/3/2015/07/shutterstock_128245220.jpg?quality=75&strip=all&w=640' },
  { src: 'https://www.clarin.com/img/2019/04/05/JvmKsuKQF_1256x620__1.jpg' },
  { src: 'https://i0.wp.com/revista.weepec.com/wp-content/uploads/2019/09/romantic-couple-in-love-walking-dogs-and-bonding-L3G8Y29.jpg?fit=1200%2C633&ssl=1' },
  { src: 'https://i.imgur.com/abRhbc0.jpeg' },
  { src: 'https://i.imgur.com/itKaMxE.jpeg' },
  { src: 'https://www.poresto.net/u/fotografias/m/2021/8/22/f768x1-118253_118380_133.jpeg' },
  { src: 'https://wl-genial.cf.tsp.li/resize/728x/jpg/398/f31/9d7fd15421ad718df49ab548c9.jpg' },
  { src: 'https://buenosaires.gob.ar/sites/default/files/styles/full_width/public/media/image/2022/09/30/e888f884cdfba3e4757d7c9206872e88071070f4.jpg?itok=He7UUpt1' }
]

export const obtenerTamanoImagen = () => {
  function obtenerDimensiones (fotosUrl) {
    return fotosUrl.map((imagen) => {
      const img = new Image()
      img.src = imagen.src

      return {
        src: imagen.src,
        width: img.width,
        height: img.height
      }
    })
  }
  const fotosConDimensiones = obtenerDimensiones(fotos)
  return fotosConDimensiones
}

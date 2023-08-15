
class Banner {
  title?: string
  subTitle?: string
  restaurantes?: string
  carrinho?: string
  img?: string
  imgRestaurante?: string

  constructor(title: string, subTitle: string, restaurantes: string, carrinho: string, img: string, imgRestaurante:string){

    this.title = title
    this.subTitle = subTitle
    this.restaurantes = restaurantes
    this.carrinho = carrinho
    this.img = img 
    this.imgRestaurante = imgRestaurante

  }
}

export default Banner
class Restaurantes {
  id: number
  img: string
  title: string
  description: string
  assessment: number
  emphasis?: boolean
  titleRestaurant: string

  constructor(id: number, img: string, title: string, description: string, assessment: number, emphasis: boolean, titleRestaurant: string) {
    this.id = id
    this.img = img
    this.title = title
    this.description = description
    this.assessment = assessment
    this.emphasis = emphasis
    this.titleRestaurant = titleRestaurant

  }
}

export default Restaurantes


const Figure = (props : any) => (

<figure>
  <img src={props.src} alt={props.alt} />
  <figcaption>{props.alt}</figcaption>
</figure>

)

export default Figure
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Image } from 'react-bootstrap';
import { deleteAsync, listAsync } from "../redux/actions/actionProducts";
import EditProduct from "./EditProduct";
import ReactImageMagnify from "react-image-magnify";
import "../styles/List.css";


const List = () => {
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const [enviarDatosModal, setEnviarDatosModal] = useState([])

    const { products } = useSelector(store => store.products)

    useEffect(() => {
        dispatch(listAsync())
    }, [])

    const editar = (id) => {
        const getProducto = products.find(t=> t.id === id)

        setModal(true)
        setEnviarDatosModal(getProducto)
    }

    return (
        <div>

            <div>
                <Container className="container-product">
                    <div className="card-columns">
                        {
                            products.map((p, index) => (
                                <div
                                    className="link-card"
                                    key={index}
                                >
                                    <div className="div-producto-total">
                                        <div className="div-image-product"><ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: p.image
                                        },
                                        largeImage: {
                                            src: p.image,
                                            width: 900,
                                            height: 1200
                                        }
                                    }} /></div>
                                        <div>
                                            <h1>{p.name}</h1>
                                            <p className="marca">Marca: {p.marca}</p>
                                            <div className="precio"><p>Precio: </p> <h3>$ {p.price} </h3> <p className="envio-gratis">Envio GRATIS</p> </div>
                                            <p>Hasta 18 meses sin intereses</p>
                                            <p>Color: {p.color}</p>
                                            <p>Categoria: {p.category}</p>
                                            <div className="descripcion"><h3>Descripcion: </h3>{p.description}</div>
                                            <p>
                                    <Button className="btn-action" margin={10} onClick={() => dispatch(deleteAsync(p.id))}> <Image onClick={() => dispatch(deleteAsync(p.id))}width={20} src='https://res.cloudinary.com/dainl1ric/image/upload/v1651296202/484662_az78hs.png'/> </Button>
                                    
                                    <Button className="btn-action edit" margin={10} onClick={()=>editar(p.id)}> <Image onClick={()=>editar(p.id)} width={20} src='https://res.cloudinary.com/dainl1ric/image/upload/v1651296517/pencil_c5ukhq.png' /></Button>
                                </p>
                                        </div>
                                        </div>
                                </div>
                            ))
                        }
                    </div>
                </Container>
            </div>
                
            {
                modal === true ? <EditProduct modal={enviarDatosModal}/> : ''
            }


        <div className="historial">
            <h1 className="">
            Productos relacionados con este artículo
            </h1>
            <div className="div-historial">
            <div className="">
                <img
                className=""
                src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/vak.png"
                alt="Cámara"
                />
                <div className="">
                <div className="">VAK Videocámara</div>
                <div className="precio-video-game">$ 5000</div>
                </div>

            </div>
            <div className="">
                <img
                className=""
                src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/bigking.png"
                alt="Lente"
                />
                <div className="">
                <div className="">Bigking lente</div>
                <div className="precio-video-game">$ 5000</div>
                </div>

            </div>
            <div className="">
                <img
                className=""
                src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/vak.png"
                alt="Cámara"
                />
                <div className="">
                <div className="">VAK Videocámara</div>
                <div className="precio-video-game">$ 5000</div>
                </div>

            </div>
            <div className="">
                <img
                className=""
                src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/bigking.png"
                alt="Lente"
                />
                <div className="">
                <div className="">Bigking lente</div>
                <div className="precio-video-game">$ 5000</div>
                </div>

            </div>
            </div>
        </div>
        <div className="historial">
            <h1 className="">
            Inspirado por tu historial de búsqueda
            </h1>
            <div className="div-historial">
            <div className="div-video-game">
                <img
                className="img-video-game"
                src="https://res.cloudinary.com/dainl1ric/image/upload/v1651298161/91nKIh39dUL._SL1500__l6ksxh.jpg"
                alt="Naruto Shippude"
                />
                <div className="">
                <div className="">
                Naruto Shippude
                </div>
                <div className="precio-video-game">$ 5000</div>
                </div>

            </div>
            <div className="div-video-game">
                <img
                className="img-video-game"
                src="https://res.cloudinary.com/dainl1ric/image/upload/v1651298065/5d23707d46177c7b9a326e52_uwpqj3.jpg"
                alt="Dragon ball z"
                />
                <div className="">
                <div className="">Dragon Ball Z </div>
                <div className="precio-video-game">$ 5000</div>
                </div>

            </div>
            <div className="div-video-game">
                <img
                className="img-video-game"
                src="https://res.cloudinary.com/dainl1ric/image/upload/v1651297994/81tT_eYQjuL._SL1500__wwen8u.jpg"
                alt="Mortal Kombat 11"
                />
                <div className="">
                <div className="">Mortal Kombat 11</div>
                <div className="precio-video-game">$ 5000</div>
                </div>

            </div>
            <div className="div-video-game">
                <img
                className="img-video-game"
                src="https://res.cloudinary.com/dainl1ric/image/upload/v1651297637/717bOwPWMdS._AC_SX385__rc5vk8.jpg"
                alt="Kimetzu no Yaiba"
                />
                <div className="">
                <div className="">Kimetzu no Yaiba</div>
                <div className="precio-video-game">$ 50000</div>
                </div>

            </div>
            </div>
        </div>
        <div className="historial">
            <h1 className="">Opiniones de clientes</h1>
            <div className="div-testimonio">
                <div className="img-testimonio">
                    <img
                    className=""
                    src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/personaje1.png"
                    alt="Customer"
                    />
                    <div className="">
                        Amazonas Customer
                    </div>
                </div>

                <div className="">
                    Electronic view finder is supposed to be the best, but from 5
                    minutes of playing with the camera, EVF is very disappointing -
                    despite 120Hz refresh rate, the image is very choppy and laggy,
                    almost like watching a retro video game - nauseating. That, and the
                    build quality compared to 5D Mark III feels very cheap - too much
                    plastic. There are some good features though, like auto-focus, high
                    quality video, etc.<br></br> 
                    <br></br>
                    UPDATE: The EVF appears to be
                    definitely glitchy. Stuttering aside, 2-3 times, when it was
                    supposed to turn on by face proximity, it flashed a white thick line
                    on its upper edge, and then remained dark. Maybe I got a defective
                    unit
                </div>
            </div>
            <div className="div-testimonio">
                <div className="img-testimonio">
                    <img
                    className=""
                    src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/Personaje2.png"
                    alt="Customer"
                    />
                    <div className="">
                    <div className="">Right Emboyo</div>
                    </div>
                </div>

                <div className="">
                    Long-time Canon DSLR user finally made the switch to mirrorless and
                    now won't look back. Amazing piece of technology - focus system and
                    low-light performance are astounding. Love that I can use my EF
                    lenses with adapter and 24-105 f4 L "kit lens" is a worthy successor
                    to its EF counterpart. <br></br> 
                    <br></br>
                    My biggest quandary, like many, was
                    whether I needed the extra pixels of the R5. Coming from a 20 MP
                    original Canon 6D I'm comfortable with this sensor size. For my uses
                    hits the sweet spot between image quality and speed/disk space. For
                    birds-in-flight I do miss the extra crop room, but have a hard time
                    justifying the extra $1,500 just for that.
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default List;
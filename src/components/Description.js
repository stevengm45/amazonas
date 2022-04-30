import React from "react";
// import ReactImageMagnify from "react-image-magnify";

function Description() {
  const description = JSON.parse(localStorage.getItem("product"));

  const addCart = () => {
    const { id, name, image, price } = description;
    let quantity;
    let productsList = [];
    let toAdd = {
      id,
      name,
      image,
      price,
      quantity: 1,
    };
    const storageCart = JSON.parse(localStorage.getItem("Cart"));

    if (storageCart !== null) {
      // SI YA EXISTE UN LOCAL STORAGE LO ACTUALIZO
      let inCart = [false];

      storageCart.forEach((product, index) => {
        if (product.id === id) {
          inCart = [true, index];
        }
      });
      if (inCart[0] !== false) {
        quantity = storageCart[inCart[1]].quantity + 1;
        let existProduct = storageCart[inCart[1]];
        existProduct.quantity = quantity;
        existProduct.price = (toAdd.price * existProduct.quantity).toFixed(1);
        storageCart.splice(inCart[1], 1);
        storageCart.unshift(existProduct);
        localStorage.setItem("Cart", JSON.stringify(storageCart));
      } else {
        storageCart.unshift(toAdd);
        localStorage.setItem("Cart", JSON.stringify(storageCart));
      }
    } else {
      // SI NO EXISTE UN LOCAL STORAGE LO CONSTRUYO
      productsList.unshift(toAdd);
      localStorage.setItem("Cart", JSON.stringify(productsList));
    }
  };

  return (
    <main>
      <div className="flex justify-between items-center px-6 pt-4 pb-2">
        <div className="px-6 pt-4 pb-2">

        </div>
        <div className="px-6 pt-4 pb-2">
          <h1 className="font-bold text-xl mb-2">{description.name}</h1>
          <p className="text-gray-700 text-base">Marca: TripleGato</p>

          <p className="font-semibold text-xl mb-2">$ {description.price}</p>
          <h1 className="font-bold text-base mb-2">Acerca de este artículo</h1>

          <p className="text-gray-700 text-base">{description.description}</p>
          <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {description.category}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 border-2">
          <p className="font-semibold text-xl mb-2">$ {description.price}</p>
          <p className="font-semibold text-base mb-2">Envio Gratis</p>
          <p className="font-semibold text-base mb-2">Llega: hoy</p>
          <p className="font-bold text-red-700 text-base mb-2">
            Puede que lo recibas mañana
          </p>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            onClick={addCart}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <h1 className="font-bold text-xl mb-2">
          Productos relacionados con este artículo
        </h1>
        <div className="flex">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/vak.png"
              alt="Cámara"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">VAK Videocámara</div>
              <div className="font-semibold text-xl mb-2">$ 5000</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/bigking.png"
              alt="Lente"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Bigking lente</div>
              <div className="font-semibold text-xl mb-2">$ 5000</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://res.cloudinary.com/dainl1ric/image/upload/v1648238995/k3b6f17wopdxh9e6flxy.jpg"
              alt="Cámara"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">VAK Videocámara</div>
              <div className="font-semibold text-xl mb-2">$ 5000</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/bigking.png"
              alt="Lente"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Bigking lente</div>
              <div className="font-semibold text-xl mb-2">$ 5000</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <h1 className="font-bold text-xl mb-2">
          Inspirado por tu historial de búsqueda
        </h1>
        <div className="flex">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/Rectangle%2037.png"
              alt="Call of Duty Black Ops"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Call of Duty Black Ops
              </div>
              <div className="font-semibold text-xl mb-2">$ 5000</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #PS5
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/Rectangle%203.png"
              alt="Ghost of Tsushima "
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Ghost of Tsushima </div>
              <div className="font-semibold text-xl mb-2">$ 5000</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #PS4
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/Rectangle%207.png"
              alt="Mortal Kombat 11"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Mortal Kombat 11</div>
              <div className="font-semibold text-xl mb-2">$ 5000</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #PS5
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/Rectangle.png"
              alt="Just Dance 2021"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Just Dance 2021</div>
              <div className="font-semibold text-xl mb-2">$ 5000</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #PS5
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <h1 className="font-bold text-xl mb-2">Opiniones de clientes</h1>
        <div>
          <div className="flex items-center">
            <img
              className=""
              src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/personaje1.png"
              alt="Customer"
            />
            <div className="px-6 py-4">
              <div className="font-normal text-base mb-2">
                Amazonas Customer
              </div>
            </div>
          </div>

          <div className="font-normal text-base mb-2">
            Electronic view finder is supposed to be the best, but from 5
            minutes of playing with the camera, EVF is very disappointing -
            despite 120Hz refresh rate, the image is very choppy and laggy,
            almost like watching a retro video game - nauseating. That, and the
            build quality compared to 5D Mark III feels very cheap - too much
            plastic. There are some good features though, like auto-focus, high
            quality video, etc.<br></br> UPDATE: The EVF appears to be
            definitely glitchy. Stuttering aside, 2-3 times, when it was
            supposed to turn on by face proximity, it flashed a white thick line
            on its upper edge, and then remained dark. Maybe I got a defective
            unit
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <img
              className=""
              src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/Personaje2.png"
              alt="Customer"
            />
            <div className="px-6 py-4">
              <div className="font-normal text-base mb-2">Right Emboyo</div>
            </div>
          </div>

          <div className="font-normal text-base mb-2">
            Long-time Canon DSLR user finally made the switch to mirrorless and
            now won't look back. Amazing piece of technology - focus system and
            low-light performance are astounding. Love that I can use my EF
            lenses with adapter and 24-105 f4 L "kit lens" is a worthy successor
            to its EF counterpart. <br></br> My biggest quandary, like many, was
            whether I needed the extra pixels of the R5. Coming from a 20 MP
            original Canon 6D I'm comfortable with this sensor size. For my uses
            hits the sweet spot between image quality and speed/disk space. For
            birds-in-flight I do miss the extra crop room, but have a hard time
            justifying the extra $1,500 just for that.
          </div>
        </div>
      </div>
    </main>
  );
}

export default Description;
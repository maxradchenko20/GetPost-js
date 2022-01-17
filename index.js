//GET
const getData = async (url) => {

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
  }

  return await response.json();

};

// POST
const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: data,
  });

  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
  }

  return await response.json();
}


const sendCart = () => {
  const cartForm = document.querySelector('.cart-form');

  const data = {
    species: 'human',
    placeOfResidence: 'Earth'
  }

  cartForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(cartForm);

    formData.set('userData', JSON.stringify(data));


    // const cartList = JSON.stringify(data);

    sendData('https://jsonplaceholder.typicode.com/posts', formData)
      .then(() => {
        cartForm.reset();
      })
      .catch((err) => {
        console.error(err)
      })
  })

}

sendCart();
















































































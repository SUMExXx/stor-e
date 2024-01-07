interface Product {
  img: string;
  title: string,
  desc: string,
  price: number

  // Add any other properties as needed
}

interface Products {
  [key: number]: Product;
}

export const products: Products = {
    1: {
        img: 'https://firebasestorage.googleapis.com/v0/b/stor-e-by-ecell.appspot.com/o/MyPhoto.jpg?alt=media&token=472c4735-23d5-46e9-afbe-130a850251e5',
        title: 'hcucvbu',
        desc: 'cjbci',
        price: 34
    },
    2: {
      img: 'https://firebasestorage.googleapis.com/v0/b/stor-e-by-ecell.appspot.com/o/Screenshot%20(22).png?alt=media&token=9f21aa82-4a7e-480b-b200-eb7bf43c91bf',
      title: 'hcucvbueththth',
      desc: 'cjbcihshsthtr',
      price: 22
    },
    3: {
      img: 'https://firebasestorage.googleapis.com/v0/b/stor-e-by-ecell.appspot.com/o/Screenshot%20(27).png?alt=media&token=5da13c49-43c9-40c1-99a0-73a0303b6314',
      title: 'hcucvbugrgrgrgregr',
      desc: 'cjbciregergrg',
      price: 56
    }
}
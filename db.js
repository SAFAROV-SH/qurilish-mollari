
if(!localStorage.getItem('Slide')){
  const Slide = [
  {
    id: 1,
    name: 'Drel',
    img: 'https://ikarvon.uz/storage/products/April2025/xzELFAeIUbEy9PaNUHow5-small.png.pagespeed.ic.L10TApuJDy.webp',
    price: 130000,
    info: 'Kuchli drel ustalar uchun to\'g\'ri tanlov',
    type: 1
  },
  {
    id: 2,
    name: 'Nasos',
    img: 'https://ikarvon.uz/storage/products/May2024/xAgb70CkYWU7VUKXR326G-small.png.pagespeed.ic.YYFayyNDXi.webp',
    price: 130000,
    info: 'Kuchli va qizimaydigan nasos',
    type: 2
  },
  {
    id: 3,
    name: 'Lampochka',
    img: 'https://ikarvon.uz/storage/categories/October2022/KdmI060X6Fd3JR8HOTu3-small.png',
    price: 130000,
    info: 'Uzoq vaqt xizmat qiluvchi lampa',
    type: 3
  },
  {
    id: 4,
    name: 'Kabel',
    img: 'https://ikarvon.uz/storage/products/August2024/xOPcsxpiyvGwb9QyAWdPs-small.png.pagespeed.ic.sVlYiLSKB5.webp',
    price: 130000,
    info: 'Chidamlik arzon kabel',
    type: 4
  },
  {
    id: 5,
    name: '2 talik Kabel',
    img: 'https://ikarvon.uz/storage/products/January2022/37707/437-small.jpg',
    price: 130000,
    info: "Chidamli ko'p yil xizmat qiladi",
    type: 4
  },
  {
    id: 6,
    name: 'Uzun kabel 50M',
    img: 'https://ikarvon.uz/storage/products/August2024/xOPcsxpiyvGwb9QyAWdPs-small.png.pagespeed.ic.sVlYiLSKB5.webp',
    price: 130000,
    info: "uzun kabel chidamli ko'p yil xizmat qiladi",
    type: 4
  },
  {
    id: 7,
    name: 'Chuqur nasos',
    img: 'https://ikarvon.uz/storage/products/February2025/zLzgKOXdmMwdM1zkEEDV-medium.png',
    price: 130000,
    info: 'Chuqur nasos Artisanlar uchun ishlatiladi chidamli!',
    type: 2
  },
  {
    id: 8,
    name: 'Katta suv nasosi',
    img: 'https://ikarvon.uz/storage/products/June2024/xg12P8DmMyXAJoorQmKqK-small.png.pagespeed.ic.wmVhwMj7To.webp',
    price: 130000,
    info: 'Daryolardan suv tortishga ishlatiladi katta motor',
    type: 2
  },
  {
    id: 9,
    name: 'Rozetkalar',
    img: 'https://ikarvon.uz/storage/categories/October2022/aqkoLT5dK1gjrFfq285I-small.png',
    price: 130000,
    info: 'Chiroyli va sifatli rozetka',
    type: 3
  },
  {
    id: 10,
    name: 'Led yoritgich',
    img: 'https://ikarvon.uz/storage/categories/October2022/xroe3Xhb8kelw75Wv4Ty2-small.png.pagespeed.ic.AfNo9LC1VC.webp',
    price: 130000,
    info: 'Uzoqni yoritadi juda ham kuchli yoritgich',
    type: 3
  },
  {
    id: 11,
    name: 'Akumlyatorli drel',
    img: 'https://ikarvon.uz/storage/categories/August2022/mTn0kDWSO6WIEUYaJrfx-small.png',
    price: 130000,
    info: 'Akumlyatorli shurp buragich, kuchli ancha tez ishlaydi',
    type: 1
  },
  {
    id: 12,
    name: 'Buzuvchi perferator',
    img: 'https://ikarvon.uz/storage/categories/August2022/53PwfF7GZwhnNFYSGyLY-small.png',
    price: 130000,
    info: 'Kuchli Qurilma betonlarni buzish uchun qulay',
    type: 1
  }
];

localStorage.setItem('Slide', JSON.stringify(Slide))
}else{
  var Slide = JSON.parse(localStorage.getItem('Slide'))
}



if(!localStorage.getItem('base')){
  var Base = [];

localStorage.setItem('base', JSON.stringify(Base))
}else{
  var Base = JSON.parse(localStorage.getItem('base')) || []
}
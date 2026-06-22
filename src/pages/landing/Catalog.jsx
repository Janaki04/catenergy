import React from 'react';
import Header from '../../components/Header';
import AdditionalProducts from './AdditionalProducts';
import Footer from '../../components/Footer';
import image from "../../assets/catalog-1-desktop 1.png"
import image2 from "../../assets/catalog-2-desktop 1.png"
import image3 from "../../assets/catalog-3-desktop.png"
import image4 from "../../assets/catalog-4-desktop 1.png"
import image5 from "../../assets/catalog-5-desktop.png"
import image7 from "../../assets/catalog-7-desktop.png"
import { toast } from "react-toastify";

const products = [
  { id: 1, title: 'CAT ENERGY PRO 500 Г', weight: '500 г', flavor: 'Курица', price: '700 Р.', type: 'chicken', img: image },
  { id: 2, title: 'CAT ENERGY PRO 1000 Г', weight: '1000 г', flavor: 'Курица', price: '1000 Р.', type: 'chicken', img: image2 },
  { id: 3, title: 'CAT ENERGY PRO 500 Г', weight: '500 г', flavor: 'Рыба', price: '700 Р.', type: 'fish', img: image3 },
  { id: 4, title: 'CAT ENERGY PRO 1000 Г', weight: '1000 г', flavor: 'Рыба', price: '1000 Р.', type: 'fish', img: image4 },
  { id: 5, title: 'CAT ENERGY SLIM 500 Г', weight: '500 г', flavor: 'Гречка', price: '400 Р.', type: 'buckwheat', img: image5 },
  { id: 6, title: 'CAT ENERGY SLIM 1000 Г', weight: '1000 г', flavor: 'Гречка', price: '700 Р.', type: 'buckwheat', img: image },
  { id: 7, title: 'CAT ENERGY SLIM 500 Г', weight: '500 г', flavor: 'Рис', price: '500 Р.', type: 'rice', img: image7 },
];

function Catalog() {
  const handleOrder = (productTitle) => {
    toast.success(`Товар "${productTitle}" добавлен в корзину!`);
  };

  const handleShowAll = () => {
    toast.info('Загрузка дополнительных товаров...');
  };

  return (
    <>
    <section className="w-full bg-white py-10 md:py-16 font-sans">
        <Header/>
      <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        
        <div className="mb-12 border-b border-neutral-100 pb-6">
          <h1 className="text-4xl font-normal text-black font-[Oswald] sm:text-5xl uppercase tracking-wide">
            Каталог продукции
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch">
          
          {products.map((product) => (
            <div 
              key={product.id} 
              className="relative bg-[#f2f2f2] pt-24 pb-6 px-6 flex flex-col justify-between text-center rounded-sm group transition-transform duration-200 hover:-translate-y-1 hover:shadow-md mt-12"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[35%] w-36 h-36 flex items-center justify-center drop-shadow-lg transition-transform duration-300 group-hover:scale-105">
              <img src={product.img} alt={product.title} className="w-full h-full object-contain"/>
              </div>

              <div className="mb-4 mt-4">
                <h3 className="text-base font-bold text-black font-[Oswald] uppercase tracking-wide max-w-[160px] mx-auto leading-tight">
                  {product.title}
                </h3>
              </div>

              <div className="w-full text-xs font-sans text-neutral-600 mb-6 space-y-1.5">
                <div className="flex justify-between py-1 border-b border-neutral-300/60">
                  <span>Масса</span>
                  <span className="text-neutral-800 font-medium">{product.weight}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-300/60">
                  <span>Вкус</span>
                  <span className="text-neutral-800 font-medium">{product.flavor}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-300/60">
                  <span>Цена</span>
                  <span className="text-neutral-800 font-medium">{product.price}</span>
                </div>
              </div>

              <button
                onClick={() => handleOrder(product.title)}
                className="w-full bg-[#63b843] text-white text-sm font-medium uppercase font-[Oswald] tracking-wider py-2.5 rounded-sm transition-colors hover:bg-[#52a335] focus:outline-none"
              >
                Заказать
              </button>
            </div>
          ))}

          <div className="border-2 border-dashed border-neutral-200 p-6 flex flex-col justify-between items-center text-center bg-white rounded-sm min-h-[380px] mt-12">
            
            <div className="mt-8 text-neutral-300 transition-colors group-hover:text-neutral-400">
              <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>

            <div className="space-y-3 font-[Oswald]">
              <h3 className="text-base font-bold text-black uppercase tracking-wider leading-tight max-w-[160px] mx-auto">
                Показать еще <br /> 100500 товаров
              </h3>
              <p className="text-xs font-sans font-medium text-neutral-500 max-w-[180px] mx-auto leading-normal">
                На самом деле вкусов гораздо больше!
              </p>
            </div>

            <button
              onClick={handleShowAll}
              className="w-full bg-[#f2f2f2] text-neutral-500 hover:text-neutral-800 text-sm font-medium uppercase font-[Oswald] tracking-wider py-2.5 rounded-sm transition-all hover:bg-neutral-200 focus:outline-none"
            >
              Показать все
            </button>
          </div>

        </div>

      </div>
    </section>
    <AdditionalProducts/>
    <Footer/>
    </>
  );
}

export default Catalog;
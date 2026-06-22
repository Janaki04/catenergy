import React from 'react';

const additionalItems = [
  { id: 1, title: 'САХАРОЗАМЕНИТЕЛЬ', volume: '1 упаковка (100 г)', price: '200 Р' },
  { id: 2, title: 'ПИТЬЕВАЯ ВОДА', volume: '5 литров', price: '50 Р' },
  { id: 3, title: 'МОЛОКО', volume: '1 литр', price: '100 Р' },
  { id: 4, title: 'ВИТАМИНЫ', volume: '1 упаковка (30 г)', price: '300 Р' },
];

export default function AdditionalProducts() {
  const handleOrder = (title) => {
    toast.success(`Товар "${title}" добавлен в заказ!`);
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 font-sans">
      <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <div className="relative flex items-center mb-12">
          <h2 className="bg-white pr-6 text-2xl md:text-3xl font-normal text-black font-[Oswald] uppercase tracking-wide z-10">
            Дополнительные товары
          </h2>
          <div className="absolute inset-x-0 h-[1px] bg-[#63b843] z-0" />
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-stretch">
          <div className="flex flex-col justify-between border-t border-neutral-200/80 lg:col-span-8">
            {additionalItems.map((item) => (
              <div 
                key={item.id}
                className="flex flex-col gap-4 py-5 border-b border-neutral-200/80 sm:flex-row sm:items-center sm:justify-between font-[Oswald]"
              >
                <div className="sm:w-[35%]">
                  <span className="text-base font-bold text-neutral-900 tracking-wide uppercase">
                    {item.title}
                  </span>
                </div>

                <div className="flex flex-1 items-center justify-between gap-4 sm:justify-start sm:gap-12 text-sm text-neutral-600 font-sans font-medium">
                  <div className="sm:w-40 text-left">
                    <span>{item.volume}</span>
                  </div>
                  <div className="text-neutral-900 font-[Oswald] text-base min-w-[60px] text-left sm:text-right">
                    {item.price}
                  </div>
                </div>

                <div className="w-full sm:w-auto">
                  <button
                    onClick={() => handleOrder(item.title)}
                    className="w-full sm:w-48 bg-[#63b843] hover:bg-[#52a335] text-white text-sm font-medium uppercase tracking-wider py-2.5 px-4 transition-colors rounded-sm focus:outline-none"
                  >
                    Заказать
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 flex">
            <div className="relative w-full bg-[#63b843] rounded-sm py-12 px-8 flex flex-col justify-center items-center text-center text-white overflow-hidden group select-none shadow-sm min-h-[260px]">
              
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/20 mix-blend-overlay z-0" />
              
              <div className="relative z-10 flex flex-col items-center max-w-[200px]">
                
                <div className="mb-6 text-white transform transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.25">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v8M3 7h18" />
                  </svg>
                </div>

                <p className="text-sm font-sans font-medium leading-relaxed tracking-wide text-neutral-100">
                  Закажите все <br />
                  и получите чехол для <br />
                  кота в подарок!
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
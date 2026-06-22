import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { toast } from "react-toastify";

export default function ProgramSelection() {
  const [formData, setFormData] = useState({
    catName: 'БАРСИК',
    catWeight: '7',
    catAge: '7',
    programType: 'ПОХУДЕНИЕ',
    email: 'KUKLACHEV@GMAIL.COM',
    phone: '8 (960) 900-60-90',
    comment: '',
    extraFeatures: {
      sweetener: true,
      water: false,
      milk: false,
      vitamins: false,
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (key) => {
    setFormData(prev => ({
      ...prev,
      extraFeatures: {
        ...prev.extraFeatures,
        [key]: !prev.extraFeatures[key]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Program Application Data Form: ", formData);
    toast.success("Анкета успешно отправлена!");
  };

  return (
    <>
    <section className="w-full bg-white py-5 md:py-5 font-sans">
        <Header/>
      <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        
        <div className="mb-12">
          <h1 className="text-start text-4xl font-normal text-black font-[Oswald] sm:text-5xl uppercase tracking-wide mb-4">
            Подбор программы
          </h1>
          <p className="text-start text-sm font-medium text-black font-[Oswald] uppercase tracking-wider leading-snug max-w-md">
            Заполните анкету, и мы подберем<br /> программу питания для вашего кота
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            
            <div className="space-y-4 font-[Oswald]">
              <div className="flex items-center gap-3">
                <label className="flex text-base uppercase text-[#444444] whitespace-nowrap">ИМЯ:*</label>
                <input 
                  type="text" 
                  name="catName"
                  value={formData.catName}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-neutral-200 px-4 py-2.5 text-neutral-800 uppercase text-base focus:border-[#63b843] focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-3">
                <label className="flex text-base uppercase text-[#444444] whitespace-nowrap">ВЕС (КГ):*</label>
                <input 
                  type="text" 
                  name="catWeight"
                  value={formData.catWeight}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-neutral-200 px-4 py-2.5 text-neutral-800 uppercase text-base focus:border-[#63b843] focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-3">
                <label className="flex text-base uppercase text-[#444444] whitespace-nowrap">ВОЗРАСТ (ЛЕТ):</label>
                <input 
                  type="text" 
                  name="catAge"
                  value={formData.catAge}
                  onChange={handleInputChange}
                  className="w-full border border-neutral-200 px-4 py-2.5 text-neutral-800 uppercase text-base focus:border-[#63b843] focus:outline-none"
                />
              </div>
            </div>

            <div className="border border-neutral-200 p-6 md:p-8 flex flex-col justify-center space-y-5 font-[Oswald]">
              {[
                { id: 'diet', label: 'ПОХУДЕНИЕ' },
                { id: 'gain', label: 'НАБОР МАССЫ' },
                { id: 'advice', label: 'НЕ ЗНАЮ (НУЖЕН ВАШ СОВЕТ)' }
              ].map((radio) => (
                <label key={radio.id} className="flex items-center gap-4 cursor-pointer group select-none">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" 
                      name="programType"
                      value={radio.label}
                      checked={formData.programType === radio.label}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`h-6 w-6 rounded-full border flex items-center justify-center transition-all ${formData.programType === radio.label ? 'border-[#63b843]' : 'border-neutral-300 group-hover:border-neutral-400'}`}>
                      {formData.programType === radio.label && <div className="h-2.5 w-2.5 rounded-full bg-[#63b843]" />}
                    </div>
                  </div>
                  <span className="text-base uppercase text-black font-medium tracking-wide">{radio.label}</span>
                </label>
              ))}
            </div>

          </div>

          <div>
            <div className="relative flex items-center mb-8">
              <h2 className="text-start bg-white pr-6 text-xl font-normal text-black font-[Oswald] uppercase tracking-wide z-10">
                Контактные данные (владельца кота)
              </h2>
              <div className="absolute inset-x-0 h-[1px] bg-[#63b843]/60 z-0" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 font-[Oswald]">
              <div className="flex items-center gap-3 relative">
                <label className="text-base uppercase text-[#444444] whitespace-nowrap">E-MAIL:*</label>
                <div className="relative w-full flex items-center">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-neutral-200 pl-4 pr-10 py-2.5 text-neutral-800 uppercase text-base focus:border-[#63b843] focus:outline-none"
                  />
                  <span className="absolute right-3 text-neutral-400 text-sm">✉</span>
                </div>
              </div>

              <div className="flex items-center gap-3 relative">
                <label className="text-base uppercase text-[#444444] whitespace-nowrap">ТЕЛЕФОН:*</label>
                <div className="relative w-full flex items-center">
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-neutral-200 pl-4 pr-10 py-2.5 text-neutral-800 uppercase text-base focus:border-[#63b843] focus:outline-none"
                  />
                  <span className="absolute right-3 text-neutral-400 text-sm">📞</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative flex items-center mb-8">
              <h2 className="bg-white pr-6 text-xl font-normal text-black font-[Oswald] uppercase tracking-wide z-10">
                Комментарий
              </h2>
              <div className="absolute inset-x-0 h-[1px] bg-[#63b843]/60 z-0" />
            </div>

            <textarea 
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              placeholder="РАССКАЖИТЕ ОБО ВСЕХ ПОВАДКАХ КОТА"
              rows="5"
              className="w-full border border-neutral-200 p-4 text-neutral-800 uppercase font-[Oswald] text-base placeholder-neutral-300 focus:border-[#63b843] focus:outline-none resize-none"
            />
          </div>

          <div>
            <div className="relative flex items-center mb-8">
              <h2 className="bg-white pr-6 text-xl font-normal text-black font-[Oswald] uppercase tracking-wide z-10">
                Дополнительно
              </h2>
              <div className="absolute inset-x-0 h-[1px] bg-[#63b843]/60 z-0" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6 font-[Oswald]">
              {[
                { key: 'sweetener', label: 'САХАРОЗАМЕНИТЕЛЬ' },
                { key: 'water', label: 'ПИТЬЕВАЯ ВОДА' },
                { key: 'milk', label: 'МОЛОКО' },
                { key: 'vitamins', label: 'ВИТАМИНЫ' }
              ].map((item) => (
                <label key={item.key} className="flex items-center gap-4 cursor-pointer group select-none">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="checkbox" 
                      checked={formData.extraFeatures[item.key]}
                      onChange={() => handleCheckboxChange(item.key)}
                      className="sr-only"
                    />
                    <div className={`h-6 w-6 border flex items-center justify-center transition-all ${formData.extraFeatures[item.key] ? 'border-[#63b843] bg-white' : 'border-neutral-200 bg-white group-hover:border-neutral-300'}`}>
                      {formData.extraFeatures[item.key] && (
                        <svg className="h-4 w-4 text-[#63b843]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-base font-medium uppercase text-black tracking-wide">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8 font-[Oswald]">
            <button
              type="submit"
              className="bg-[#63b843] text-white text-base font-medium uppercase tracking-wider py-3 px-12 transition-colors hover:bg-[#52a335] focus:outline-none sm:w-auto text-center"
            >
              Отправить заявку
            </button>
            <span className="text-sm font-sans text-neutral-500 font-medium">
              * — Обязательные поля
            </span>
          </div>

        </form>

      </div>
    </section>
    <Footer/>
    </>
  );
}
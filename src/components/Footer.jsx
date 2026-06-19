import React from 'react';

export default function Footer() {
  return (
    <div className="w-full bg-[#f2f2f2] font-oswald">
      
      {/* SECTION 1: MAP & CONTACTS CARD OVERLAY */}
      <div className="relative h-[360px] w-full bg-neutral-100 sm:h-[400px] md:h-[450px]">
        
        {/* Interactive Location Map */}
        <iframe
          title="Cat Energy Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6066254631317!2d30.320478616096985!3d59.93871626830528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145da1%3A0x4253cd0eb1c8531d!2sBolshaya%20Konyushennaya%20St%2C%2019%2F8%2C%20Sankt-Peterburg%2C%20Russia%2C%20191186!5e0!3m2!1sen!2s!4v1687175000000!5m2!1sen!2s"
          className="absolute inset-0 h-full w-full border-0 select-none z-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Custom Map Marker Overlay Pin */}
        <div className="absolute left-[68%] top-[35%] z-10 -translate-x-1/2 -translate-y-1/2 md:left-[66%] md:top-[38%]">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white p-1 shadow-xl after:absolute after:bottom-[-6px] after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-45 after:bg-white">
            {/* Simple Cat Icon Pin Visual */}
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-tr from-orange-400 to-amber-500 text-white">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.42 0l2.79-2.79C10.02 18.66 11 19 12 19c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Floating Address Card */}
        <div className="absolute inset-x-4 top-6 z-20 bg-white px-6 py-8 shadow-sm sm:inset-x-8 md:left-12 md:right-auto md:top-1/2 md:w-[460px] md:-translate-y-1/2 lg:left-24 lg:w-[520px] lg:px-5 lg:py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 items-center">
            
            {/* Invitation Headline */}
            <div>
              <h3 className="text-start text-lg font-bold uppercase leading-tight tracking-wide text-[#111111] font-[Oswald] sm:text-xl lg:text-xl">
                ПРИГЛАШАЕМ <br className="hidden sm:block" /> К СОТРУДНИЧЕСТВУ ДИЛЕРОВ!
              </h3>
            </div>

            {/* Structured Address Details */}
            <div className="text-xs font-normal leading-relaxed text-[#444444] space-y-2 sm:text-sm">
              <p className="font-[Oswald] text-neutral-700 tracking-wide font-medium">
                ул. Большая <br />
                Конюшенная, д. 19/8
              </p>
              <p className="font-[Oswald] font-medium text-neutral-500 tracking-wide">
                Санкт-Петербург
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* SECTION 2: FOOTER PANEL */}
      <footer className="w-full bg-[#f2f2f2]">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-12 lg:px-24">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-4">
            
            {/* Logo Entity */}
            <div>
              <span className="text-2xl font-black tracking-wider text-[#111111] font-[Oswald] uppercase">
                CAT <span className="font-light text-[#333333]">ENERGY</span>
              </span>
            </div>

            {/* Social Icons Links Row */}
            <div className="flex items-center gap-8 text-[#444444]">
              <a href="#vk" className="hover:text-[#63b843] transition-colors" aria-label="VKontakte">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.218 2H1.782C1.019 2 0 3.019 0 3.782v16.435C0 20.981 1.019 22 1.782 22h20.435c.763 0 1.782-1.019 1.782-1.783V3.782C24 3.019 22.981 2 22.218 2zm-3.664 13.565h-1.652c-.596 0-1.07-.464-1.922-1.32-.711-.692-.994-.853-1.385-.853h-.414v2.173h-1.692V8.435h1.692v3.13h.414c.31 0 .61-.176.994-.564.71-.734 1.151-1.856 1.151-2.566h1.693c0 1.05-.663 2.29-1.502 3.193.85.795 1.83 1.956 2.313 3.937z"/>
                </svg>
              </a>
              <a href="#instagram" className="hover:text-[#63b843] transition-colors" aria-label="Instagram">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                </svg>
              </a>
              <a href="#facebook" className="hover:text-[#63b843] transition-colors" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
            </div>

            {/* Right Attribution Column */}
            <a 
              href="https://htmlacademy.ru" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-3 text-sm font-medium text-[#222222] font-[Oswald] uppercase hover:text-black transition-colors"
            >
              <span className="tracking-wide">HTML Academy</span>
              <svg 
                className="h-6 w-6 text-[#444444] group-hover:text-[#63b843] transition-colors" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </a>

          </div>
        </div>
      </footer>

    </div>
  );
}
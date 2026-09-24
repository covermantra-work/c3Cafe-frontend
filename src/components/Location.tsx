import React from "react";

export const Location: React.FC = () => {
  const phoneNumber = "+919253779999";
  const displayPhone = "092537 79999";
  const mapEmbedUrl = "https://www.google.com/maps?q=Chai+Chowk+Cafe+MM+PG+College+Ratia+Road+Fatehabad+Haryana+125050&output=embed";
  const directionsUrl = "https://www.google.com/maps/search/?api=1&query=Chai+Chowk+Cafe+MM+PG+College+Ratia+Road+Fatehabad+Haryana+125050";

  return (
    <section id="location" className="py-20 sm:py-24 bg-[#faf8f5] relative border-t border-[#ebdcd0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#e05326] font-bold tracking-wider text-xs uppercase block mb-2">
            Visit Us in Fatehabad
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1917] tracking-tight">
            Our Location & Hours
          </h2>
          <p className="text-[#695c56] text-sm mt-2 font-medium">
            Drop by Chai Chowk Cafe at MM PG College for fresh kulhad chai, hand-crafted coffees, and delicious bites.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Address */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-md flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#e05326]/10 border border-[#e05326]/20 text-[#e05326] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#133e3b]/10 text-[#133e3b] text-[11px] font-bold mb-1.5">
                  📍 Located in: Manohar Memorial College
                </div>
                <h4 className="text-[#1c1917] font-bold text-base mb-1">Chai Chowk Cafe (C3)</h4>
                <p className="text-[#574944] text-sm leading-relaxed font-medium">
                  MM PG College, Ratia Road, near Punjab National Bank, Model Town, Fatehabad, Haryana 125050
                </p>
                <div className="mt-3">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e05326] hover:underline"
                  >
                    <span>Get Directions on Google Maps</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-md flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#133e3b]/10 border border-[#133e3b]/20 text-[#133e3b] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-[#1c1917] font-bold text-base">Cafe Timings</h4>
                  <span className="text-[11px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-300">
                    Open Everyday
                  </span>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm text-[#574944] mt-2 font-medium">
                  <div className="flex justify-between items-center py-1 border-b border-stone-100">
                    <span className="text-[#786b65]">Monday – Sunday (All 7 Days)</span>
                    <span className="font-bold text-[#e05326]">9:00 AM – 10:00 PM</span>
                  </div>
                  <p className="text-[11px] text-[#8c7e77] pt-1">
                    *Timings may slightly vary on public holidays & festivals.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Call Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#133e3b] to-[#0d2d2a] border border-[#1a4a46] flex items-center justify-between text-white shadow-lg">
              <div>
                <p className="text-xs text-[#ff8159] font-bold uppercase tracking-wider">Takeaway & Inquiries</p>
                <p className="text-base sm:text-lg font-black text-white mt-0.5">{displayPhone}</p>
              </div>
              <a
                href={`tel:${phoneNumber}`}
                className="px-5 py-2.5 rounded-full bg-[#e05326] hover:bg-[#c84318] text-white text-xs font-bold transition-all shadow-md shrink-0 hover:scale-105"
              >
                📞 Call Cafe
              </a>
            </div>

            {/* Social Connect Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black text-[#1c1917]">Fatehabad ka Favourite Chai Spot 🔥</p>
                <p className="text-[11px] text-[#695c56] font-medium mt-0.5">Follow for daily reels & cafe vibes</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/c3chaichowkcafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-bold shadow-sm hover:scale-105 transition-transform inline-flex items-center gap-1.5"
                >
                  <span>📷</span>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61579396418460"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-[#1877f2] text-white text-xs font-bold shadow-sm hover:scale-105 transition-transform inline-flex items-center gap-1.5"
                >
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Map & Storefront Photo */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="min-h-[280px] sm:min-h-[340px] rounded-3xl overflow-hidden border-2 border-[#ebdcd0] shadow-xl relative bg-stone-100 flex-1">
              <iframe
                title="Chai Chowk Cafe Fatehabad Location"
                className="w-full h-full min-h-[280px] sm:min-h-[340px]"
                src={mapEmbedUrl}
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen={false}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Real Cafe Photo Preview Strip */}
            <div className="rounded-2xl border border-[#ebdcd0] bg-white p-3 flex items-center gap-4 shadow-md">
              <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[#e05326] shrink-0">
                <img
                  src="/storefront.jpg"
                  alt="Inside Chai Chowk Cafe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs font-black text-[#1c1917]">Cozy Dine-In Ambience & AC Seating</p>
                <p className="text-[11px] text-[#695c56] font-medium mt-0.5">
                  Aesthetic warm lighting, comfortable seating & friendly hangout vibe at MM PG College campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

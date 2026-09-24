import React from "react";

export const Franchise: React.FC = () => {
  const phoneNumber = "919253779999";
  const franchiseMessage = `Hi Chai Chowk Cafe Team, I am interested in opening a Franchise.

* Name:
* City:
* Investment Budget: `;

  const franchiseUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    franchiseMessage
  )}`;

  return (
    <section id="franchise" className="py-20 sm:py-24 bg-[#0d2d2a] relative border-t border-[#1a4a46] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#133e3b]/90 border-2 border-[#e05326]/40 p-6 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow in Terracotta matching logo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e05326]/15 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#e05326]/20 text-[#ff8159] border border-[#e05326]/40">
                ★ Franchise Opportunity
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Own a High-ROI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8159] via-[#e05326] to-[#fed7aa]">
                  Chai Chowk Cafe Franchise.
                </span>
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
                Join our high-growth cafe brand. Zero complicated paper forms — click below to chat directly with our franchise development head on WhatsApp with our pre-formatted application!
              </p>

              {/* Franchise Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#09211f]/80 border border-[#1a4a46]">
                  <span className="text-2xl block mb-1">📈</span>
                  <h4 className="text-white font-bold text-sm">65%+ Margins</h4>
                  <p className="text-xs text-stone-300 mt-0.5">High profitability on beverages & snacks.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#09211f]/80 border border-[#1a4a46]">
                  <span className="text-2xl block mb-1">🛠️</span>
                  <h4 className="text-white font-bold text-sm">Complete Setup</h4>
                  <p className="text-xs text-stone-300 mt-0.5">Kitchen setup, chef SOPs & POS system.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#09211f]/80 border border-[#1a4a46]">
                  <span className="text-2xl block mb-1">⏱️</span>
                  <h4 className="text-white font-bold text-sm">12-18 Mos ROI</h4>
                  <p className="text-xs text-stone-300 mt-0.5">Fast payback period with consistent footfall.</p>
                </div>
              </div>

              {/* Core Action: Pre-filled WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={franchiseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#e05326] to-[#c84318] hover:from-[#c84318] hover:to-[#b03712] text-white font-extrabold text-base shadow-xl shadow-[#e05326]/30 hover:scale-105 active:scale-95 transition-all"
                >
                  <span className="text-xl">💬</span>
                  <span>Apply for Franchise on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Card: Formats */}
            <div className="lg:col-span-5 bg-[#09211f]/95 border border-[#1a4a46] rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">Available Models</h3>
              <p className="text-xs text-stone-300 mb-6">Select a format that matches your commercial space.</p>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-[#133e3b]/70 border border-[#1a4a46] hover:border-[#e05326]/50 transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-white">Chai Chowk Kiosk</span>
                    <span className="text-[#ff8159] font-bold">₹8L - ₹12L</span>
                  </div>
                  <p className="text-stone-300 text-xs">Area: 100 - 250 sq.ft | High footfall malls, metros, tech hubs.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#133e3b]/70 border border-[#1a4a46] hover:border-[#e05326]/50 transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-white">Dine-In Cafe Model</span>
                    <span className="text-[#ff8159] font-bold">₹15L - ₹25L</span>
                  </div>
                  <p className="text-stone-300 text-xs">Area: 500 - 1200 sq.ft | Full menu, seating for 30+, aesthetic vibe.</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1a4a46] text-center">
                <p className="text-xs text-stone-300">
                  Direct Inquiries:{" "}
                  <a href="tel:+919253779999" className="text-[#ff8159] hover:underline font-bold">
                    +91 92537 79999
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

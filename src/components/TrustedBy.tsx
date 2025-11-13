export function TrustedBy() {
  const logos = [
    'Acme Corp',
    'TechVentures',
    'StartupLab',
    'Digital Edge',
    'CloudSync',
    'DataFlow',
    'Innovation Co',
    'NextGen'
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 mb-8">
          Trusted by independent sellers & teams worldwide
        </p>
        
        {/* Logo scroller */}
        <div className="relative overflow-hidden">
          <div className="flex gap-12 items-center justify-center flex-wrap">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="text-gray-400 hover:text-gray-600 transition-colors px-4 opacity-60 hover:opacity-100"
              >
                <span className="whitespace-nowrap">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

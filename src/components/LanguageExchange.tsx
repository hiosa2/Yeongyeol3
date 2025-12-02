import imgMutuallyBeneficialLearning from "figma:asset/06315a36f9961420e82066e3c632e8e84f2e2ced.png";

export function LanguageExchange() {
  return (
    <section className="bg-[#f7f7f7] py-16 lg:py-20">
      <div className="container-hellotalk mx-auto px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "var(--text-primary)"
            }}>
              언어 교환
            </div>
            
            <h2 style={{
              fontSize: "54px",
              fontWeight: "700",
              fontFamily: "var(--font-heading)",
              lineHeight: "1.11",
              color: "var(--text-primary)"
            }}>
              <span style={{ color: "var(--brand-purple)" }}>상호</span> 유익한 학습
            </h2>
            
            <div className="space-y-4">
              <p style={{
                fontSize: "18px",
                lineHeight: "1.5",
                color: "var(--text-secondary)"
              }}>
                원어민은 여러분에게 그들의 언어를 가르치고 여러분은 원어민에게<br />
                여러분의 언어를 가르치면 됩니다. 아주 간단합니다!
              </p>
              
              <p style={{
                fontSize: "18px",
                lineHeight: "1.5",
                color: "var(--text-secondary)"
              }}>
                번역, 발음, 음역 및 교정을 위한 기본 제공 보조 기능이 대화를 원활<br />
                하게 진행하도록 도와줍니다.
              </p>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-[500/616]">
              <img 
                src={imgMutuallyBeneficialLearning} 
                alt="Mutually Beneficial Learning"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

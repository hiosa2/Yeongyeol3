import imgWorld987B15CfPng from "figma:asset/12d97187776081f341b58e372df0935ceb4a7932.png";
import imgContainer from "figma:asset/4b70a60a9ec00f1adeba169e470c42eb38ca09b1.png";
import imgRuF52F6E43Png from "figma:asset/292f88961c3cd88b3528cafa8fc9bdaddea86904.png";
import imgContainer1 from "figma:asset/31f1843f918b405218b7ede8e3f6d26bdf0c0642.png";
import imgEs019D3139Png from "figma:asset/07d86903fe2a17c32071a3a4a601bc71fcaa78c3.png";
import imgContainer2 from "figma:asset/34bc0bddd856e57232680d190db79541f7e87c01.png";
import imgDe7091E77FPng from "figma:asset/1f43f78c20d992b72ad9f98de9f433a03d705068.png";
import imgContainer3 from "figma:asset/2b898c35980fe1398156f7d6b818d19d484afebc.png";
import imgCn93B1E991Png from "figma:asset/0d9b08a57e0835c36be6b6a20cac4fac402d5c74.png";
import imgContainer4 from "figma:asset/349d51dd264aa11ec4a48d7ec47026d90ddc2412.png";
import imgJaEffc4B35Png from "figma:asset/c72ec23ce7ddfc301df1d2078d24a0cd9eb50f6a.png";
import imgContainer5 from "figma:asset/0b4a087f4c2ee3482edf788cdf52a2b05185cc9c.png";
import imgFr2F7Cacb8Png from "figma:asset/2ef30cd7ce84eb1dca7b08a2908b9eb74803889e.png";
import imgContainer6 from "figma:asset/33252df3ae34bf0f8708146f850158778b92454e.png";

const greetings = [
  { avatar: imgContainer, flag: imgRuF52F6E43Png, text: "привет" },
  { avatar: imgContainer1, flag: imgEs019D3139Png, text: "Hola" },
  { avatar: imgContainer2, flag: imgDe7091E77FPng, text: "Hallo" },
  { avatar: imgContainer3, flag: imgCn93B1E991Png, text: "你好" },
  { avatar: imgContainer4, flag: imgJaEffc4B35Png, text: "こんにちは" },
  { avatar: imgContainer5, flag: imgFr2F7Cacb8Png, text: "Bonjour" },
  { avatar: imgContainer6, flag: imgEs019D3139Png, text: "Hola" }
];

export function SearchWorld() {
  return (
    <section className="bg-white py-20 lg:py-32 relative overflow-hidden">
      {/* Background World Image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1320px] h-[786px] opacity-50 pointer-events-none">
        <img src={imgWorld987B15CfPng} alt="" className="w-full h-full object-contain" />
      </div>
      
      <div className="container-hellotalk mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-[1200px] mx-auto text-center space-y-8">
          <h2 style={{
            fontSize: "64px",
            fontWeight: "700",
            fontFamily: "var(--font-heading)",
            lineHeight: "1.5",
            color: "var(--text-primary)"
          }}>
            세계를 <span style={{ color: "var(--brand-purple)" }}>검색</span>
          </h2>
          
          <p style={{
            fontSize: "24px",
            color: "var(--text-primary)",
            maxWidth: "575px",
            margin: "0 auto"
          }}>
            모국어, 도시 등을 기준으로 언어 파트너를 검색하세요
          </p>
          
          {/* Greeting Bubbles */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mt-16 pt-8">
            {greetings.map((greeting, index) => (
              <div key={index} className="relative">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full overflow-hidden mb-12">
                  <img src={greeting.avatar} alt="" className="w-full h-full object-cover" />
                </div>
                
                {/* Flag Badge */}
                <div className="absolute top-12 left-0 w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                  <img src={greeting.flag} alt="" className="w-full h-full object-cover" />
                </div>
                
                {/* Speech Bubble */}
                <div 
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-7 py-3 rounded-full bg-white shadow-md whitespace-nowrap"
                  style={{
                    fontSize: "24px",
                    fontWeight: "600"
                  }}
                >
                  {greeting.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

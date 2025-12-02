import imgContainer7 from "figma:asset/4800212d35456053bf311c1f9cab9aa444832088.png";
import imgContainer8 from "figma:asset/b2554297eb28ed56485b5b4759a074a6b4aa1d8d.png";
import imgContainer9 from "figma:asset/dc12cfd616409fe25a1d849a2f2f5bf4019e9732.png";
import imgContainer10 from "figma:asset/f8662a516185cfb56fa8738ee35520bb66f9866c.png";
import imgContainer11 from "figma:asset/6934712fc8031da20d97975aa2fa95fcceb1282a.png";
import imgContainer12 from "figma:asset/be47f969746646aa4317932c24c46ca46b0923ab.png";
import imgContainer13 from "figma:asset/ffaef658af1bd06969ce88d0a95636ce7fa13ebf.png";
import imgAssets2F3512Af747F4C4611Bb1Ad1Bd0F2C1A3C2Fd4B7E858Af534Ad2920Ecbf2Ed8C7114 from "figma:asset/b6d68fb654bd5f11d4968561826eb89def053837.png";
import imgAssets2F3512Af747F4C4611Bb1Ad1Bd0F2C1A3C2F79Ce104701B14297A0D3492Ed7A97C10 from "figma:asset/8923288fcfcab1453fb31711c3408858882e9f0c.png";
import imgAssets2F3512Af747F4C4611Bb1Ad1Bd0F2C1A3C2Fb5F81B78355742Ebbbfa92D8C4Dcedc8 from "figma:asset/6b9d7b309498cf7beda0a495638ecfc44611bf0e.png";
import imgAssets2F3512Af747F4C4611Bb1Ad1Bd0F2C1A3C2Fce8B0Efe7320420Abaf74901C3256700 from "figma:asset/d098a9f082b14ebd7de28840f9037d042238e009.png";
import imgFr2F7Cacb8Png from "figma:asset/2ef30cd7ce84eb1dca7b08a2908b9eb74803889e.png";
import imgEs019D3139Png from "figma:asset/07d86903fe2a17c32071a3a4a601bc71fcaa78c3.png";

const users = [
  { 
    name: "Sarah", 
    image: imgContainer7,
    language1: "English",
    language2: "Français",
    flag: imgFr2F7Cacb8Png 
  },
  { 
    name: "김민준", 
    image: imgContainer8,
    language1: "한국어",
    language2: "English",
    flag: imgFr2F7Cacb8Png 
  },
  { 
    name: "Maria", 
    image: imgContainer9,
    language1: "Español",
    language2: "English",
    flag: imgEs019D3139Png 
  },
  { 
    name: "Rose", 
    image: imgContainer10,
    language1: "Español",
    language2: "Français",
    flag: imgEs019D3139Png 
  },
  { 
    name: "田中", 
    image: imgContainer11,
    language1: "日本語",
    language2: "한국어",
    flag: imgFr2F7Cacb8Png 
  },
  { 
    name: "Alex", 
    image: imgContainer12,
    language1: "English",
    language2: "Deutsch",
    flag: imgFr2F7Cacb8Png 
  },
  { 
    name: "李明", 
    image: imgContainer13,
    language1: "中文",
    language2: "English",
    flag: imgFr2F7Cacb8Png 
  },
  { 
    name: "Sophie", 
    image: imgAssets2F3512Af747F4C4611Bb1Ad1Bd0F2C1A3C2Fd4B7E858Af534Ad2920Ecbf2Ed8C7114,
    language1: "Français",
    language2: "日本語",
    flag: imgFr2F7Cacb8Png 
  }
];

export function UserProfiles() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-hellotalk mx-auto px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 style={{
              fontSize: "54px",
              fontWeight: "700",
              fontFamily: "var(--font-heading)",
              lineHeight: "1.2",
              color: "var(--text-primary)"
            }}>
              <span style={{ color: "var(--brand-purple)" }}>세계를</span> 연결
            </h2>
            <p style={{
              fontSize: "20px",
              color: "var(--text-secondary)",
              marginTop: "16px"
            }}>
              전 세계 사용자들과 만나보세요
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {users.map((user, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden group cursor-pointer transition-transform hover:scale-105"
                style={{
                  aspectRatio: "1/1.3",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={user.image} 
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                
                {/* Flag */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <img src={user.flag} alt="" className="w-full h-full object-cover" />
                </div>
                
                {/* Name and Languages */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    marginBottom: "8px"
                  }}>
                    {user.name}
                  </div>
                  
                  <div className="flex gap-2">
                    <div 
                      className="px-4 py-2 rounded-full bg-white/90"
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "black"
                      }}
                    >
                      {user.language1}
                    </div>
                    <div 
                      className="px-4 py-2 rounded-full bg-white/90"
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "black"
                      }}
                    >
                      {user.language2}
                    </div>
                  </div>
                </div>
                
                {/* Hover Button */}
                <div className="absolute inset-x-6 bottom-[-50px] group-hover:bottom-6 transition-all duration-300">
                  <button 
                    className="w-full py-3 rounded-full"
                    style={{
                      backgroundColor: "var(--brand-purple)",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "600"
                    }}
                  >
                    연결하기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useNavigate } from "react-router";
import {
  Users,
  Globe,
  Shield,
  Heart,
  MessageCircle,
  MapPin,
  CheckCircle,
  Star,
} from "lucide-react";
import { Logo } from "../components/Logo";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
        <div className="max-w-[480px] mx-auto text-center space-y-8">
          {/* Logo/Title */}
          <div className="space-y-6">
            <div className="flex justify-center px-[5px] py-[0px] m-[0px] rounded-[0px]">
              <Logo size={80} variant="full" />
            </div>
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(16px, 4vw, 20px)",
              lineHeight: "1.6",
              color: "var(--text-secondary)",
              padding: "0 20px",
            }}
          >
            현지인, 외국인과의 연결을 위한
            <br />
            안전하고 진정성 있는
            <br />
            문화 교류 플랫폼
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button
              onClick={() => navigate("/select-type")}
              style={{
                backgroundColor: "var(--brand-purple)",
                color: "white",
                borderRadius: "var(--radius-full)",
                padding: "18px 48px",
                fontSize: "18px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                transition: "var(--transition-default)",
                boxShadow:
                  "0px 4px 20px rgba(122, 84, 255, 0.4)",
                width: "100%",
                maxWidth: "280px",
              }}
            >
              지금 시작하기
            </button>
          </div>

          {/* Trust Badge */}
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full mx-auto"
            style={{
              backgroundColor: "var(--bg-light-gray)",
              fontSize: "14px",
              color: "var(--text-secondary)",
            }}
          >
            <Shield
              className="w-4 h-4"
              style={{ color: "var(--brand-purple)" }}
            />
            안전 검증 시스템
          </div>
        </div>

        {/* Decorative Elements */}
        <div
          className="absolute top-20 left-10 w-16 h-16 rounded-full opacity-20 animate-pulse"
          style={{ backgroundColor: "var(--brand-purple)" }}
        />
        <div
          className="absolute bottom-20 right-6 w-12 h-12 rounded-full opacity-5"
          style={{ backgroundColor: "var(--accent-pink)" }}
        />
      </section>

      {/* Problem Section */}
      <section className="px-6 py-16 bg-[#f7f7f7]">
        <div className="max-w-[480px] mx-auto text-center space-y-6">
          <div
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "var(--brand-purple)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            문제
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 7vw, 36px)",
              fontWeight: "700",
              fontFamily: "var(--font-heading)",
              lineHeight: "1.3",
              color: "var(--text-primary)",
            }}
          >
            혼자 여행할 때<br />
            <span style={{ color: "var(--brand-purple)" }}>
              이런 고민
            </span>{" "}
            해보셨나요?
          </h2>

          <div className="space-y-4 pt-4">
            {[
              "현지인, 외국인과 교류하고 싶지만 어디서 만나야 할지 모르겠어요",
              "안전하게 만날 수 있는 방법이 없어요",
              "언어 장벽 때문에 깊은 대화가 어려워요",
              "시간과 노력이 너무 많이 들어요",
            ].map((problem, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl text-left"
                style={{
                  backgroundColor: "white",
                  border: "2px solid var(--bg-gray)",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    lineHeight: "1.5",
                  }}
                >
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-[480px] mx-auto text-center space-y-8">
          <div
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "var(--brand-purple)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            솔루션
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 7vw, 36px)",
              fontWeight: "700",
              fontFamily: "var(--font-heading)",
              lineHeight: "1.3",
              color: "var(--text-primary)",
            }}
          >
            <span style={{ color: "var(--brand-purple)" }}>
              YeonGyeol
            </span>
            이<br />
            해결해드립니다
          </h2>

          <div className="space-y-6 pt-4">
            {[
              {
                icon: Users,
                title: "정교한 매칭 시스템",
                description:
                  "여행 동선, 관심사, 언어를 고려한 맞춤 매칭을 제공합니다",
              },
              {
                icon: MessageCircle,
                title: "양방향 검증 필터",
                description:
                  "여행객과 현지인의 정보를 받아 AI로 분석하여 진정성을 보장합니다",
              },
              {
                icon: Heart,
                title: "즉시 연결",
                description:
                  "24시간 이내에 최적의 파트너를 찾아드립니다",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl text-left"
                style={{
                  backgroundColor: "var(--bg-light-gray)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "white",
                    }}
                  >
                    <feature.icon
                      className="w-6 h-6"
                      style={{ color: "var(--brand-purple)" }}
                    />
                  </div>
                  <div className="flex-1">
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "var(--text-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      {feature.title}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "var(--text-secondary)",
                        lineHeight: "1.5",
                      }}
                    >
                      {feature.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-16 bg-[#f7f7f7]">
        <div className="max-w-[480px] mx-auto text-center space-y-8">
          <div
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "var(--brand-purple)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            이용 방법
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 7vw, 36px)",
              fontWeight: "700",
              fontFamily: "var(--font-heading)",
              lineHeight: "1.3",
              color: "var(--text-primary)",
            }}
          >
            간단한{" "}
            <span style={{ color: "var(--brand-purple)" }}>
              3단계
            </span>
            로<br />
            연결됩니다
          </h2>

          <div className="space-y-6 pt-4">
            {[
              {
                step: "1",
                title: "정보 입력",
                description:
                  "여행 일정, 관심사, 언어, 취미 등을 입력해주세요",
              },
              {
                step: "2",
                title: "매칭 대기",
                description:
                  "24시간 이내에 최적의 파트너를 찾아드립니다",
              },
              {
                step: "3",
                title: "만남 확정",
                description:
                  "상대방 정보를 확인하고 만남을 계획하세요",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative p-6 rounded-3xl text-left"
                style={{
                  backgroundColor: "white",
                  border: "2px solid var(--bg-gray)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "var(--brand-purple)",
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "var(--text-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      {step.title}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "var(--text-secondary)",
                        lineHeight: "1.5",
                      }}
                    >
                      {step.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-[480px] mx-auto text-center space-y-8">
          <h2
            style={{
              fontSize: "clamp(28px, 7vw, 36px)",
              fontWeight: "700",
              fontFamily: "var(--font-heading)",
              lineHeight: "1.3",
              color: "var(--text-primary)",
            }}
          >
            왜{" "}
            <span style={{ color: "var(--brand-purple)" }}>
              YeonGyeol
            </span>
            인가요?
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "76%", label: "솔로 여행자" },
              { number: "85%", label: "새로운 만남 원함" },
              { number: "100%", label: "안전 검증" },
              { number: "24시간", label: "평균 매칭 시간" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl"
                style={{
                  backgroundColor: "var(--bg-light-gray)",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(28px, 7vw, 36px)",
                    fontWeight: "700",
                    color: "var(--brand-purple)",
                    marginBottom: "8px",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    fontWeight: "500",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-16 bg-[#f7f7f7]">
        <div className="max-w-[480px] mx-auto space-y-8">
          <div className="text-center">
            <h2
              style={{
                fontSize: "clamp(28px, 7vw, 36px)",
                fontWeight: "700",
                fontFamily: "var(--font-heading)",
                lineHeight: "1.3",
                color: "var(--text-primary)",
              }}
            >
              <span style={{ color: "var(--brand-purple)" }}>
                사용자
              </span>{" "}
              경험담
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                name: "Sarah",
                country: "미국",
                text: "혼자 한국 여행이 걱정됐는데, YeonGyeol로 현지인 친구를 만나 정말 특별한 경험을 했어요!",
              },
              {
                name: "김민준",
                country: "한국",
                text: "외국인 친구를 사귀고 싶었는데, 안전하게 만날 수 있어서 좋았어요. 영어 공부도 되고 일석이조!",
              },
              {
                name: "Yuki",
                country: "일본",
                text: "ソロ旅行の不安이なくなりました。素敵な出会いに感謝します！",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl"
                style={{
                  backgroundColor: "white",
                }}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current"
                      style={{ color: "var(--accent-yellow)" }}
                    />
                  ))}
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    lineHeight: "1.6",
                    marginBottom: "12px",
                  }}
                >
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-2">
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "var(--text-primary)",
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <span
                    style={{
                      color: "var(--text-secondary)",
                      opacity: 0.5,
                    }}
                  >
                    •
                  </span>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "var(--text-secondary)",
                      opacity: 0.7,
                    }}
                  >
                    {testimonial.country}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-[480px] mx-auto text-center space-y-8">
          <h2
            style={{
              fontSize: "clamp(28px, 7vw, 36px)",
              fontWeight: "700",
              fontFamily: "var(--font-heading)",
              lineHeight: "1.3",
              color: "var(--text-primary)",
            }}
          >
            지금 바로
            <br />
            <span style={{ color: "var(--brand-purple)" }}>
              연결
            </span>
            을 시작하세요
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "var(--text-secondary)",
              lineHeight: "1.6",
            }}
          >
            안전하고 진정성 있는 만남이
            <br />
            당신을 기다리고 있습니다
          </p>

          <button
            onClick={() => navigate("/select-type")}
            style={{
              backgroundColor: "var(--brand-purple)",
              color: "white",
              borderRadius: "var(--radius-full)",
              padding: "18px 48px",
              fontSize: "18px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              transition: "var(--transition-default)",
              boxShadow: "0px 4px 20px rgba(122, 84, 255, 0.4)",
              width: "100%",
            }}
          >
            지금 시작하기
          </button>

          <div className="grid grid-cols-3 gap-2 pt-4">
            {[
              { icon: Shield, text: "안전" },
              { icon: Heart, text: "진정성" },
              { icon: CheckCircle, text: "신속" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-3 rounded-2xl"
                style={{
                  backgroundColor: "var(--bg-light-gray)",
                }}
              >
                <item.icon
                  className="w-5 h-5"
                  style={{ color: "var(--brand-purple)" }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "var(--text-secondary)",
                  }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-[#f7f7f7]">
        <div className="max-w-[480px] mx-auto text-center space-y-4">
          <div
            style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "var(--brand-purple)",
            }}
          >
            YeonGyeol
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-secondary)",
              opacity: 0.7,
            }}
          >
            혼자 여행하는 당신을 위한
            <br />
            안전한 문화 교류 플랫폼
          </p>
          <div
            className="pt-4 border-t"
            style={{ borderColor: "var(--bg-gray)" }}
          >
            <p
              style={{
                fontSize: "12px",
                color: "var(--text-secondary)",
                opacity: 0.6,
              }}
            >
              © 2025 YeonGyeol. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
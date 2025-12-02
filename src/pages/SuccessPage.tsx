import { useNavigate } from "react-router";
import { CheckCircle2, Home, MessageCircle } from "lucide-react";
import { Logo } from "../components/Logo";

export function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="container-hellotalk mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-[600px] mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo size={80} variant="icon" />
          </div>

          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center animate-bounce"
              style={{
                backgroundColor: "var(--bg-light-gray)"
              }}
            >
              <CheckCircle2
                className="w-20 h-20"
                style={{ color: "var(--accent-green)" }}
              />
            </div>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 48px)",
              fontWeight: "700",
              fontFamily: "var(--font-heading)",
              color: "var(--text-primary)",
              marginBottom: "16px"
            }}
          >
            <span style={{ color: "var(--brand-purple)" }}>등록</span> 완료!
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "var(--text-secondary)",
              marginBottom: "32px",
              lineHeight: "1.6"
            }}
          >
            정보가 성공적으로 제출되었습니다.<br />
            곧 최적의 매칭 파트너를 찾아드리겠습니다.
          </p>

          {/* Info Cards */}
          <div className="grid gap-4 mb-12">
            <div
              className="p-6 rounded-3xl text-left"
              style={{
                backgroundColor: "var(--bg-light-gray)"
              }}
            >
              <div className="flex items-start gap-4">
                <MessageCircle
                  className="w-6 h-6 flex-shrink-0 mt-1"
                  style={{ color: "var(--brand-purple)" }}
                />
                <div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "var(--text-primary)",
                      marginBottom: "8px"
                    }}
                  >
                    다음 단계
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.5"
                    }}
                  >
                    제출하신 SNS로 매칭 결과를 보내드립니다.<br />
                    일반적으로 24~48시간 이내에 연락드립니다.
                  </div>
                </div>
              </div>
            </div>

            <div
              className="p-6 rounded-3xl text-left"
              style={{
                backgroundColor: "var(--bg-light-gray)"
              }}
            >
              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="w-6 h-6 flex-shrink-0 mt-1"
                  style={{ color: "var(--accent-green)" }}
                />
                <div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "var(--text-primary)",
                      marginBottom: "8px"
                    }}
                  >
                    매칭 프로세스
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.5"
                    }}
                  >
                    저희 팀이 직접 여러분의 정보를 검토하고<br />
                    최적의 매칭 파트너를 찾아드립니다.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all"
              style={{
                backgroundColor: "var(--brand-purple)",
                color: "white",
                fontSize: "16px",
                fontWeight: "600"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0px 8px 24px rgba(122, 84, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Home className="w-5 h-5" />
              홈으로 돌아가기
            </button>
          </div>

          {/* Support Info */}
          <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--bg-gray)" }}>
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-secondary)",
                opacity: 0.8
              }}
            >
              궁금한 점이 있으시면 언제든지 연락주세요
            </p>
            <a
              href="mailto:support@yeongyeol.com"
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "var(--brand-purple)",
                marginTop: "8px",
                display: "inline-block"
              }}
            >
              support@yeongyeol.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

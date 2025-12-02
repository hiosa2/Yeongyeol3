import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    country: "미국",
    rating: 5,
    text: "HelloTalk 덕분에 한국어 실력이 정말 많이 늘었어요! 원어민 친구들과 매일 대화하면서 자연스럽게 배우고 있습니다.",
    language: "한국어 학습 중"
  },
  {
    name: "김민수",
    country: "한국",
    rating: 5,
    text: "영어를 배우는데 이보다 좋은 앱은 없는 것 같아요. 실제 대화를 통해 배우니까 훨씬 효과적이에요!",
    language: "영어 학습 중"
  },
  {
    name: "Maria Garcia",
    country: "스페인",
    rating: 5,
    text: "전 세계 사람들과 친구가 되면서 동시에 언어도 배울 수 있다니 정말 좋아요. 보이스 룸 기능도 너무 유용해요!",
    language: "일본어 학습 중"
  },
  {
    name: "田中さくら",
    country: "일본",
    rating: 5,
    text: "韓国語の勉強に最適なアプリです。ネイティブと直接会話できるので、とても役立っています!",
    language: "한국어 학습 중"
  },
  {
    name: "Thomas Weber",
    country: "독일",
    rating: 5,
    text: "Learning Chinese has never been easier! The translation and correction features are incredibly helpful.",
    language: "중국어 학습 중"
  },
  {
    name: "李华",
    country: "중국",
    rating: 5,
    text: "我通过HelloTalk认识了很多外国朋友，不仅提高了英语水平，还了解了不同的文化。非常推荐！",
    language: "영어 학습 중"
  }
];

export function Testimonials() {
  return (
    <section className="bg-[#f7f7f7] py-16 lg:py-24">
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
              <span style={{ color: "var(--brand-purple)" }}>사용자</span> 경험담
            </h2>
            <p style={{
              fontSize: "20px",
              color: "var(--text-secondary)",
              marginTop: "16px"
            }}>
              언어 학습 여정에서 성공한 사용자들의 이야기
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-hellotalk bg-white p-8 hover:shadow-lg transition-shadow"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-current" 
                      style={{ color: "var(--accent-yellow)" }}
                    />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p style={{
                  fontSize: "16px",
                  lineHeight: "1.5",
                  color: "var(--text-secondary)",
                  marginBottom: "20px",
                  minHeight: "96px"
                }}>
                  "{testimonial.text}"
                </p>
                
                {/* User Info */}
                <div className="border-t pt-4" style={{ borderColor: "var(--bg-gray)" }}>
                  <div style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "var(--text-primary)",
                    marginBottom: "4px"
                  }}>
                    {testimonial.name}
                  </div>
                  <div style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    opacity: 0.7
                  }}>
                    {testimonial.country} • {testimonial.language}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

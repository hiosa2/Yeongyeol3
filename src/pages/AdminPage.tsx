import { useState, useEffect } from "react";
import { Users, Globe, TrendingUp, Search, Filter } from "lucide-react";
import { Logo } from "../components/Logo";
import { projectId, publicAnonKey } from "../utils/supabase/info";

interface TravelerData {
  id: string;
  type: string;
  groupType: string;
  groupSize: string;
  name: string;
  age: string;
  gender: string;
  nationality: string;
  snsId: string;
  stayDuration: string;
  preferredLocation: string;
  preferredTime: string;
  travelPurpose: string[];
  interests: string[];
  languages: string[];
  createdAt: string;
}

interface LocalData {
  id: string;
  type: string;
  groupType: string;
  groupSize: string;
  name: string;
  age: string;
  gender: string;
  snsId: string;
  location: string;
  availableTime: string;
  purpose: string[];
  languages: string[];
  interests: string[];
  experience: string;
  createdAt: string;
}

interface Stats {
  totalTravelers: number;
  totalLocals: number;
  totalUsers: number;
  travelersBySolo: number;
  travelersByGroup: number;
  localsBySolo: number;
  localsByGroup: number;
  travelersByGender: {
    male: number;
    female: number;
    other: number;
  };
  localsByGender: {
    male: number;
    female: number;
    other: number;
  };
}

// 한국어 번역 맵
const translations = {
  gender: {
    male: "남성",
    female: "여성",
    other: "기타"
  },
  groupType: {
    solo: "혼자",
    group: "그룹"
  }
};

export function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Dashboard state
  const [travelers, setTravelers] = useState<TravelerData[]>([]);
  const [locals, setLocals] = useState<LocalData[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"all" | "travelers" | "locals">("all");
  const [filterGender, setFilterGender] = useState<"all" | "male" | "female" | "other">("all");
  const [filterGroupType, setFilterGroupType] = useState<"all" | "solo" | "group">("all");

  // Load data on mount
  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    console.log("대시보드 데이터 로딩 중...");
    setLoading(true);
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-39a216a3/admin/dashboard`,
        {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        }
      );

      console.log("대시보드 응답 상태:", response.status);
      const result = await response.json();
      console.log("대시보드 응답:", result);

      if (result.success) {
        setTravelers(result.data.travelers);
        setLocals(result.data.locals);
        setStats(result.data.stats);
        setError("");
        console.log(`${result.data.travelers.length}명의 여행자와 ${result.data.locals.length}명의 현지인 로드 완료`);
      } else {
        console.error("대시보드 로드 실패:", result.error);
        setError(result.error || "대시보드 로드에 실패했습니다");
      }
    } catch (err) {
      console.error("대시보드 로드 에러:", err);
      setError("대시보드 데이터를 불러오는데 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  // Filter logic
  const getFilteredData = () => {
    let allData: (TravelerData | LocalData)[] = [];

    if (filterType === "all") {
      allData = [...travelers, ...locals];
    } else if (filterType === "travelers") {
      allData = travelers;
    } else {
      allData = locals;
    }

    // Apply gender filter
    if (filterGender !== "all") {
      allData = allData.filter((item) => item.gender === filterGender);
    }

    // Apply group type filter
    if (filterGroupType !== "all") {
      allData = allData.filter((item) => item.groupType === filterGroupType);
    }

    // Apply search
    if (searchTerm) {
      allData = allData.filter((item) => {
        const searchLower = searchTerm.toLowerCase();
        return (
          item.name.toLowerCase().includes(searchLower) ||
          item.snsId.toLowerCase().includes(searchLower) ||
          item.id.toLowerCase().includes(searchLower)
        );
      });
    }

    // Sort by creation date (newest first)
    return allData.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  };

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <div className="flex justify-center mb-8">
            <Logo />
          </div>
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-neutral-600">대시보드를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  const filteredData = getFilteredData();

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container-mobile py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              onClick={loadDashboardData}
              className="btn-secondary text-sm px-6 py-2"
            >
              새로고침
            </button>
          </div>
        </div>
      </header>

      <div className="container-mobile py-8">
        <h1 className="mb-4">관리자 대시보드</h1>
        <p className="text-neutral-600 mb-12">
          YeonGyeol 사용자 관리 및 모니터링
        </p>

        {/* Error Message */}
        {error && (
          <div className="bg-accent-red-light text-accent-red px-6 py-4 rounded-[32px] mb-8">
            {error}
          </div>
        )}

        {/* Statistics Cards */}
        {stats && (
          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="bg-white rounded-[32px] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent-purple-light flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent-purple" />
                </div>
              </div>
              <div className="text-[32px] font-heading text-primary mb-1">
                {stats.totalUsers}
              </div>
              <div className="text-neutral-600">전체 사용자</div>
            </div>

            <div className="bg-white rounded-[32px] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent-blue-light flex items-center justify-center">
                  <Globe className="w-5 h-5 text-accent-blue" />
                </div>
              </div>
              <div className="text-[32px] font-heading text-primary mb-1">
                {stats.totalTravelers}
              </div>
              <div className="text-neutral-600">여행자</div>
            </div>

            <div className="bg-white rounded-[32px] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent-green-light flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent-green" />
                </div>
              </div>
              <div className="text-[32px] font-heading text-primary mb-1">
                {stats.totalLocals}
              </div>
              <div className="text-neutral-600">현지인</div>
            </div>

            <div className="bg-white rounded-[32px] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent-orange-light flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent-orange" />
                </div>
              </div>
              <div className="text-[32px] font-heading text-primary mb-1">
                {stats.travelersBySolo + stats.localsBySolo}
              </div>
              <div className="text-neutral-600">솔로 사용자</div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-primary" />
            <h3>필터</h3>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="이름, SNS ID, 사용자 ID로 검색..."
                className="w-full pl-14 pr-6 py-4 rounded-full border-2 border-neutral-200 focus:border-primary focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Filter buttons */}
          <div className="space-y-4">
            <div>
              <div className="text-sm text-neutral-600 mb-2">사용자 유형</div>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setFilterType("all")}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    filterType === "all"
                      ? "bg-primary text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  전체
                </button>
                <button
                  onClick={() => setFilterType("travelers")}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    filterType === "travelers"
                      ? "bg-primary text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  여행자
                </button>
                <button
                  onClick={() => setFilterType("locals")}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    filterType === "locals"
                      ? "bg-primary text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  현지인
                </button>
              </div>
            </div>

            <div>
              <div className="text-sm text-neutral-600 mb-2">성별</div>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setFilterGender("all")}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    filterGender === "all"
                      ? "bg-primary text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  전체
                </button>
                <button
                  onClick={() => setFilterGender("male")}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    filterGender === "male"
                      ? "bg-primary text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  남성
                </button>
                <button
                  onClick={() => setFilterGender("female")}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    filterGender === "female"
                      ? "bg-primary text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  여성
                </button>
                <button
                  onClick={() => setFilterGender("other")}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    filterGender === "other"
                      ? "bg-primary text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  기타
                </button>
              </div>
            </div>

            <div>
              <div className="text-sm text-neutral-600 mb-2">그룹 유형</div>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setFilterGroupType("all")}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    filterGroupType === "all"
                      ? "bg-primary text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  전체
                </button>
                <button
                  onClick={() => setFilterGroupType("solo")}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    filterGroupType === "solo"
                      ? "bg-primary text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  솔로
                </button>
                <button
                  onClick={() => setFilterGroupType("group")}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    filterGroupType === "group"
                      ? "bg-primary text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  그룹
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* User List */}
        <div className="space-y-4">
          <h3 className="mb-4">
            사용자 목록 ({filteredData.length}명)
          </h3>

          {filteredData.length === 0 ? (
            <div className="bg-white rounded-[32px] p-12 text-center shadow-sm">
              <p className="text-neutral-600">사용자를 찾을 수 없습니다</p>
            </div>
          ) : (
            filteredData.map((user) => {
              const isTraveler = user.type === "traveler";
              const traveler = isTraveler ? (user as TravelerData) : null;
              const local = !isTraveler ? (user as LocalData) : null;

              return (
                <div
                  key={user.id}
                  className="bg-white rounded-[32px] p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          isTraveler
                            ? "bg-accent-blue-light text-accent-blue"
                            : "bg-accent-green-light text-accent-green"
                        }`}
                      >
                        {isTraveler ? (
                          <Globe className="w-6 h-6" />
                        ) : (
                          <Users className="w-6 h-6" />
                        )}
                      </div>
                      <div>
                        <div className="font-heading">{user.name}</div>
                        <div className="text-sm text-neutral-600">
                          {isTraveler ? "여행자" : "현지인"} •{" "}
                          {user.groupType === "solo" ? "혼자" : `${user.groupSize}명 그룹`}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`px-4 py-1 rounded-full text-sm ${
                        user.gender === "male"
                          ? "bg-accent-blue-light text-accent-blue"
                          : user.gender === "female"
                          ? "bg-accent-pink-light text-accent-pink"
                          : "bg-neutral-100 text-neutral-700"
                      }`}
                    >
                      {translations.gender[user.gender as keyof typeof translations.gender] || user.gender}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <span className="text-neutral-600 min-w-[120px]">나이:</span>
                      <span>{user.age}세</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <span className="text-neutral-600 min-w-[120px]">SNS ID:</span>
                      <span className="break-all">{user.snsId}</span>
                    </div>

                    {traveler && (
                      <>
                        <div className="flex gap-2">
                          <span className="text-neutral-600 min-w-[120px]">국적:</span>
                          <span>{traveler.nationality}</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-neutral-600 min-w-[120px]">체류 기간:</span>
                          <span>{traveler.stayDuration}</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-neutral-600 min-w-[120px]">선호 지역:</span>
                          <span>{traveler.preferredLocation}</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-neutral-600 min-w-[120px]">선호 시간:</span>
                          <span>{traveler.preferredTime}</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-neutral-600 min-w-[120px]">여행 목적:</span>
                          <span>{Array.isArray(traveler.travelPurpose) ? traveler.travelPurpose.join(", ") : traveler.travelPurpose || "정보 없음"}</span>
                        </div>
                      </>
                    )}

                    {local && (
                      <>
                        <div className="flex gap-2">
                          <span className="text-neutral-600 min-w-[120px]">거주 지역:</span>
                          <span>{local.location}</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-neutral-600 min-w-[120px]">가능 시간:</span>
                          <span>{local.availableTime}</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-neutral-600 min-w-[120px]">만남 목적:</span>
                          <span>{Array.isArray(local.purpose) ? local.purpose.join(", ") : local.purpose || "정보 없음"}</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-neutral-600 min-w-[120px]">경험:</span>
                          <span>{local.experience}</span>
                        </div>
                      </>
                    )}

                    <div className="flex gap-2">
                      <span className="text-neutral-600 min-w-[120px]">가능 언어:</span>
                      <span>{Array.isArray(user.languages) ? user.languages.join(", ") : user.languages || "정보 없음"}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <span className="text-neutral-600 min-w-[120px]">관심사:</span>
                      <span>{Array.isArray(user.interests) ? user.interests.join(", ") : user.interests || "정보 없음"}</span>
                    </div>

                    <div className="flex gap-2 pt-2 border-t border-neutral-100 mt-3">
                      <span className="text-neutral-600 min-w-[120px]">사용자 ID:</span>
                      <span className="text-xs text-neutral-400 break-all">{user.id}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <span className="text-neutral-600 min-w-[120px]">등록 일시:</span>
                      <span className="text-xs text-neutral-400">
                        {new Date(user.createdAt).toLocaleString('ko-KR')}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

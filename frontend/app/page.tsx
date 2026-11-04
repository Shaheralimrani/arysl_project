import Link from "next/link";
import { Camera, BrainCircuit, Languages, ArrowLeft, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. القسم الترحيبي (Hero Section) */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* تأثيرات خلفية جمالية */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/30 border border-blue-400/30 mb-6 backdrop-blur-sm">
              <Sparkles size={18} className="text-yellow-300" />
              <span className="text-sm font-medium">مدعوم بالذكاء الاصطناعي</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              جسر تواصل جديد مع <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">لغة الإشارة اليمنية</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
              نظام ذكي متطور يتعرف على إشاراتك ويرجمها فوراً، لنسهل التواصل ونفتح آفاقاً جديدة للصم وضعاف السمع في مجتمعنا.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/predict" 
                className="flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Camera size={22} />
                جرب النظام الآن
              </Link>
              <Link 
                href="/about" 
                className="flex items-center justify-center gap-2 bg-blue-700/50 text-white border border-blue-400/50 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition backdrop-blur-sm"
              >
                عن المشروع
                <ArrowLeft size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. قسم الميزات (Features) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">كيف يعمل النظام؟</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">تقنيات متطورة تعمل معاً في الخلفية لتقديم تجربة سلسة ودقيقة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ميزة 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">
                <Camera className="text-blue-600 group-hover:text-white transition" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">التقاط الإشارة</h3>
              <p className="text-gray-600 leading-relaxed">قم برفع صورة أو التقاطها عبر الكاميرا، ليقوم النظام بتحليلها فوراً.</p>
            </div>

            {/* ميزة 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 group">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition">
                <BrainCircuit className="text-indigo-600 group-hover:text-white transition" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">الذكاء الاصطناعي</h3>
              <p className="text-gray-600 leading-relaxed">يتم تمرير الصورة عبر نموذج تعلم عميق (EfficientNet) تم تدريبه على آلاف الصور.</p>
            </div>

            {/* ميزة 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 group">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition">
                <Languages className="text-green-600 group-hover:text-white transition" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">الترجمة الفورية</h3>
              <p className="text-gray-600 leading-relaxed">يظهر اسم الإشارة باللغة العربية فور اكتمال التحليل، لتسهيل فهمها.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. قسم الإحصائيات (Stats) */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-extrabold text-blue-300 mb-2">32</div>
            <div className="text-blue-100">فئة إشارة</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-blue-300 mb-2">24K+</div>
            <div className="text-blue-100">صورة مدربة</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-blue-300 mb-2">35</div>
            <div className="text-blue-100">مشارك في التصوير</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-blue-300 mb-2">AI</div>
            <div className="text-blue-100">نموذج ذكاء اصطناعي</div>
          </div>
        </div>
      </section>

    </div>
  );
}
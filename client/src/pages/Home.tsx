import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { ArrowRight, Gem, PenTool, HeartHandshake, Sparkles, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

// ✅ 修改點：使用 Vite 自動變數，保證路徑 100% 正確
const BASE_PATH = import.meta.env.BASE_URL; 

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-heading font-bold tracking-widest text-foreground">
            TRU-MI
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-sm tracking-widest font-light">
            <a href="#philosophy" className="hover:text-primary transition-colors">品牌理念</a>
            <a href="#process" className="hover:text-primary transition-colors">訂製流程</a>
            <a href="#craftsmanship" className="hover:text-primary transition-colors">工藝承諾</a>
            <a href="#faq" className="hover:text-primary transition-colors">常見問題</a>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-500">
              預約諮詢
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-sm border-l border-primary/20">
                <div className="flex flex-col space-y-8 mt-12 text-center">
                  <a href="#philosophy" className="text-xl font-light tracking-widest hover:text-primary transition-colors">品牌理念</a>
                  <a href="#process" className="text-xl font-light tracking-widest hover:text-primary transition-colors">訂製流程</a>
                  <a href="#craftsmanship" className="text-xl font-light tracking-widest hover:text-primary transition-colors">工藝承諾</a>
                  <a href="#faq" className="text-xl font-light tracking-widest hover:text-primary transition-colors">常見問題</a>
                  <div className="pt-8">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90 rounded-full py-6 text-lg tracking-widest">
                      預約諮詢
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="`${BASE_PATH}images/hero_process_v3.png" 
            alt="From sketch to reality" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background"></div>
        </div>
        
        <div className="container relative z-10 px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-lg md:text-xl tracking-[0.3em] text-primary mb-6 uppercase font-light">
              Tru-Mi 永恆契約
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 md:mb-8 text-foreground drop-shadow-sm px-4">
              妳們的承諾<br/>
              <span className="italic font-light block mt-2">不該是標準品</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12 font-light leading-relaxed px-4">
              專屬婚/對戒訂製。從靈魂深處的故事開始，打造世界上獨一無二的愛情符號。
            </p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-10 py-6 text-lg tracking-widest shadow-lg shadow-primary/20 transition-all hover:scale-105">
              開啟共同創作之旅
            </Button>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-primary/50">
          <ArrowRight className="rotate-90 w-6 h-6" />
        </div>
      </section>

      {/* Part 1: Philosophy */}
      <section id="philosophy" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10"></div>
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-full h-full border border-primary/20 z-0"></div>
              <img 
                src="`${BASE_PATH}images/unique_rings_v3.png" 
                alt="Unique Rings" 
                className="relative z-10 w-full shadow-2xl"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 leading-snug">
                妳們的愛情，值得<br/>
                <span className="text-primary">獨一無二</span>的「永恆信物」
              </h2>
              <div className="space-y-6 text-muted-foreground font-light text-lg leading-relaxed">
                <p>
                  親愛的伴侶們：
                </p>
                <p>
                  妳們的愛情故事，從相遇、相知到決定攜手，經歷了無數獨特的瞬間。那麼，用來承載這份「永恆契約」的戒指，為什麼必須與別人相同呢？
                </p>
                <blockquote className="border-l-2 border-primary pl-6 py-2 my-8 text-foreground italic font-medium">
                  Tru-Mi 相信： 婚/對戒，不該只是珠寶店裡的「款式編號」，而是世界上獨一無二的，專屬妳們愛情的「符號」。
                </blockquote>
                <p>
                  我們承諾將妳們的愛情故事，融入設計之中，讓戒指成為妳們無法被複製的情感信物。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Part 2: Experience */}
      <section id="process" className="py-24 bg-secondary/30">
        <div className="container px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              妳們的專屬體驗：<br/>設計師一對一靈魂轉譯
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              這是一場超越珠寶的「共同創作之旅」，確保每一個細節都完美對齊妳們的獨特身份與未來風格。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <HeartHandshake className="w-10 h-10 text-primary" />,
                title: "設計師一對一深度諮詢",
                subtitle: "風格定調與手型分析",
                desc: "設計師不僅傾聽故事，更將從妳們的日常生活、穿搭風格、甚至指型特徵出發，共同討論出最適合妳們長久佩戴的專屬設計。"
              },
              {
                icon: <PenTool className="w-10 h-10 text-primary" />,
                title: "故事元素轉譯",
                subtitle: "將愛意隱藏於細節",
                desc: "無論是刻上彼此的指紋、鑲嵌有意義的寶石，或是妳們獨有的愛情密碼，我們將「看不見的愛」精準轉化為「看得見的符號」。"
              },
              {
                icon: <Gem className="w-10 h-10 text-primary" />,
                title: "材質與工藝專業",
                subtitle: "永恆的保障",
                desc: "針對 K金、鉑金等貴金屬的特性、耐久度，與日常佩戴習慣，提供最專業的建議，確保妳們的承諾，能經受時間的考驗。"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border/50"
              >
                <div className="mb-6 p-4 bg-primary/5 rounded-full w-fit mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 text-center">{item.title}</h3>
                <p className="text-primary text-sm font-bold tracking-wider text-center mb-4 uppercase">{item.subtitle}</p>
                <p className="text-muted-foreground font-light leading-relaxed text-center">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="`${BASE_PATH}images/consultation_v3.png" 
              alt="Consultation Process" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <Button variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/50 hover:bg-white hover:text-foreground px-8 py-6 text-lg tracking-widest">
                預約妳們的設計時光
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Part 3: Craftsmanship */}
      <section id="craftsmanship" className="py-24 relative">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 leading-snug">
                妳們的安心承諾：<br/>零誤差的製作儀式
              </h2>
              <p className="text-muted-foreground text-lg font-light mb-10">
                我們將製作過程視為一場嚴謹的儀式，確保妳們的信任，得到完美的結果。
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "專屬諮詢",
                    desc: "專注於傾聽妳們的故事，捕捉核心設計方向。"
                  },
                  {
                    step: "02",
                    title: "1:1 蠟模型確認",
                    desc: "在職人開始手工製作前，妳們將親手觸摸、試戴與實品尺寸相同的蠟模型。我們只在視覺、手感、比例都達到妳們的完美標準後，才進入下一步。"
                  },
                  {
                    step: "03",
                    title: "職人手工淬鍊",
                    desc: "蠟模確認後，交由經驗豐富的金工職人，將妳們的故事淬鍊成永恆的貴金屬。"
                  },
                  {
                    step: "04",
                    title: "專屬刻字與鑲鑽",
                    desc: "最終的細節打磨，確保戒指的內圍或隱藏處，永遠留存妳們的愛情密碼與光芒。"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="text-4xl font-heading font-bold text-primary/20">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 relative"
            >
              <div className="absolute -bottom-10 -right-10 w-full h-full border border-primary/20 z-0"></div>
              <img 
                src="`${BASE_PATH}images/craftsmanship_v3.png" 
                alt="Artisan Craftsmanship" 
                className="relative z-10 w-full shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Part 4: Emotional Anchor */}
      <section className="py-32 bg-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="`${BASE_PATH}images/identity_symbol_v3.png" 
            alt="Identity Symbol" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-tight text-foreground">
              這對戒指真正想提醒妳們的是什麼？
            </h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 text-muted-foreground">
              「妳們的愛是如此獨特且珍貴，值得世界上最獨一無二的信物，<br/>
              <span className="text-primary font-medium">永遠不必向任何人解釋妳們的愛。</span>」
            </p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-12 py-8 text-xl tracking-widest shadow-lg shadow-primary/20">
              立即預約專屬諮詢
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Part 4.5: Happy Moments */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">幸福見證</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              每一個笑容，都是我們最珍貴的收藏。
              <br />
              看見妳們戴上戒指的那一刻，是 Tru-Mi 存在的意義。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
            >
              <img 
                src="`${BASE_PATH}images/happy_couple_1.png" 
                alt="Happy Couple 1" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-white font-medium text-lg tracking-wide">「謝謝 Tru-Mi 讓我們的愛情有了最美的形狀。」</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
            >
              <img 
                src="`${BASE_PATH}images/happy_couple_2.png" 
                alt="Happy Couple 2" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-white font-medium text-lg tracking-wide">「戴上戒指的那一刻，我們知道這就是永遠。」</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
            >
              <img 
                src="`${BASE_PATH}images/happy_couple_3.png" 
                alt="Happy Couple 3" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-white font-medium text-lg tracking-wide">「每一個細節都充滿了我們的故事。」</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
            >
              <img 
                src="`${BASE_PATH}images/happy_couple_4.png" 
                alt="Happy Couple 4" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-white font-medium text-lg tracking-wide">「這是我們共同創作的，獨一無二的信物。」</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Part 4.8: Real Stories */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">真實案例故事</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              每一枚戒指背後，都藏著一段動人的愛情。
              <br />
              看看我們如何將這些故事，轉譯為永恆的信物。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[ 
              {
                title: "永恆守護",
                image: "`${BASE_PATH}images/story_guardian.png",
                quote: "「只有她壓得住我，我們是一見鍾情。」",
                desc: "W先生笑著，拿出自己畫的戒指草圖～他屬猴，太太屬豬，所以他設計了一枚「緊箍咒」，上頭有個小豬鼻～他打趣地說，自己脾氣不好，但偏偏對太太沒轍～這對戒指，是愛情的象徵，也是屬於彼此的暗號——我願意被你牢牢圈住...."
              },
              {
                title: "歸屬",
                image: "`${BASE_PATH}images/story_belonging.png",
                quote: "「只要她在，就是家...」",
                desc: "L先生特別挑選了女友的誕生石碧璽，想設計成婚戒。他說兩人最常一起去海邊，因此以「海浪」作為設計靈感，戒指內圍刻了個「指南針」。他說，人生像茫茫大海，有時會迷失方向，但只要她在，就是家..."
              },
              {
                title: "海龜的約定",
                image: "`${BASE_PATH}images/story_turtle.png",
                quote: "「兩人的愛隔著片台灣海峽...」",
                desc: "訂製戒指的是J先生，女友叫飛飛。因為一個在台灣，一個在香港，時常飛來飛去，所以給女友取的小名。兩人都很喜歡海龜，去年12月他們決定結婚了！婚戒上，有著兩人喜歡的海龜，戒腳的波紋，是海浪的形狀。戒指內圍有著711Km，是台灣與香港距離..."
              }
            ].map((story, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-heading font-bold mb-2">{story.title}</h3>
                    <p className="font-medium italic opacity-90">{story.quote}</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">
                    {story.desc}
                  </p>
                  <Button variant="link" className="mt-4 p-0 text-primary hover:text-primary/80 font-medium">
                    閱讀完整故事 <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 5: FAQ */}
      <section id="faq" className="py-24 bg-secondary/20">
        <div className="container px-6 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              婚戒訂製常見問題
            </h2>
            <p className="text-muted-foreground">Everything you need to know</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "訂製需要多久時間？會不會趕不上婚期？",
                a: "深度溝通與金工淬鍊約需 6-12 週。我們會在諮詢時確認妳的婚期或重要紀念日，並排定專屬製作時間表，確保戒指在約定時間內交付。"
              },
              {
                q: "我沒有設計概念，要怎麼跟設計師討論？",
                a: "這是我們的職責。妳們只需專注於分享妳們的愛情故事。我會負責捕捉其中的關鍵詞與情感，將其轉譯為動人的設計語言，這就是我們的「故事轉譯」專業。"
              },
              {
                q: "如果成品跟我想像的不一樣，怎麼辦？",
                a: "這就是我們提供 1:1 蠟模型 的意義。在正式製作前，妳們將親手觸摸、試戴蠟模，我們提供至少兩次的確認與調整機會，確保最終成品零誤差。"
              },
              {
                q: "可以用長輩的舊珠寶進行改造或傳承嗎？",
                a: "當然可以。 珠寶改造正是我們最擅長的服務之一。我們可以將傳家寶石 完美融入新設計，讓婚戒承載數代人的愛與祝福。"
              },
              {
                q: "婚戒戴久了會不會磨損、失去光澤？",
                a: "你們的故事值得被終身守護。我們提供終身專業維護服務，確保這份愛的符號，能經受時間考驗，永不黯淡。"
              }
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border/50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium text-lg py-6 hover:text-primary transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6 text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 border-t border-white/10">
        <div className="container px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="text-2xl font-heading font-bold tracking-widest mb-6">TRU-MI</div>
              <p className="text-background/60 font-light max-w-sm leading-relaxed">
                專屬婚/對戒訂製。讓戒指成為妳們無法被複製的情感信物。
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 tracking-widest uppercase text-sm text-primary">Contact</h4>
              <ul className="space-y-4 text-background/60 font-light">
                <li>台北市大安區...</li>
                <li>hello@trumi.com</li>
                <li>+886 2 1234 5678</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 tracking-widest uppercase text-sm text-primary">Social</h4>
              <ul className="space-y-4 text-background/60 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-16 pt-8 text-center text-background/40 text-sm font-light">
            © 2025 Tru-Mi Wedding Rings. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

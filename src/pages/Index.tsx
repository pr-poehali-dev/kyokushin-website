import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-secondary px-6 py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-montserrat font-bold text-white">
            КИОКУШИН <span className="text-accent">ЗАБАЙКАЛЬЕ</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-accent transition-colors font-roboto">Главная</a>
            <a href="#about" className="text-white hover:text-accent transition-colors font-roboto">О нас</a>
            <a href="#gallery" className="text-white hover:text-accent transition-colors font-roboto">Фото и видео</a>
            <a href="#contact" className="text-white hover:text-accent transition-colors font-roboto">Контакты</a>
          </div>
          <Button className="md:hidden" size="sm" variant="outline">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-black">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/img/5e49503a-427f-4af8-9071-8cecc01d87f7.jpg')`
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white px-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-montserrat font-black mb-6 leading-tight">
            ФЕДЕРАЦИЯ<br />
            <span className="text-accent">КИОКУШИН</span>
          </h1>
          <p className="text-xl md:text-2xl font-roboto mb-4 max-w-3xl mx-auto">
            Забайкальский край
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-lg font-roboto">
            <div className="flex items-center gap-2">
              <Icon name="Target" size={24} className="text-accent" />
              <span>Дисциплина</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={24} className="text-accent" />
              <span>Характер</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Trophy" size={24} className="text-accent" />
              <span>Спорт</span>
            </div>
          </div>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-secondary font-roboto font-semibold px-8 py-4 text-lg">
            Присоединиться к нам
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-secondary mb-6">
              О федерации
            </h2>
            <p className="text-xl text-gray-600 font-roboto max-w-3xl mx-auto">
              Федерация Киокушин Забайкальского края — это объединение спортсменов, 
              посвятивших себя развитию традиционного каратэ Киокушин
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="/img/ae14baa0-b42b-4e87-a9aa-7d1512b29271.jpg" 
                alt="Додзё Киокушин" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-montserrat">
                    <Icon name="Target" className="text-primary" size={28} />
                    Дисциплина
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-roboto">
                    Строгое следование традициям и правилам Киокушин каратэ, 
                    развитие самоконтроля и внутренней дисциплины
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-montserrat">
                    <Icon name="Shield" className="text-accent" size={28} />
                    Воспитание характера
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-roboto">
                    Формирование сильной личности через преодоление трудностей, 
                    развитие уверенности и стойкости духа
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-montserrat">
                    <Icon name="Trophy" className="text-primary" size={28} />
                    Спортивные достижения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-roboto">
                    Подготовка спортсменов к соревнованиям всех уровней, 
                    от региональных турниров до международных чемпионатов
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-muted px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-secondary mb-6">
              Фото и видео
            </h2>
            <p className="text-xl text-gray-600 font-roboto">
              Моменты тренировок и соревнований нашей федерации
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="Play" size={48} className="text-primary" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-montserrat font-semibold text-lg mb-2">
                    Тренировка {item}
                  </h3>
                  <p className="text-gray-600 font-roboto text-sm">
                    Интенсивная тренировка в додзё федерации
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-secondary mb-6">
              Контакты
            </h2>
            <p className="text-xl text-gray-600 font-roboto">
              Свяжитесь с нами для участия в тренировках
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-montserrat font-semibold text-lg mb-2">Адрес</h3>
                  <p className="text-gray-600 font-roboto">
                    г. Чита, ул. Спортивная, д. 15<br />
                    Спортивный комплекс "Энергия"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Phone" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-montserrat font-semibold text-lg mb-2">Телефон</h3>
                  <p className="text-gray-600 font-roboto">
                    +7 (3022) 123-456<br />
                    +7 (914) 123-45-67
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Mail" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-montserrat font-semibold text-lg mb-2">Email</h3>
                  <p className="text-gray-600 font-roboto">
                    info@kyokushin-zabaikal.ru<br />
                    president@kyokushin-zabaikal.ru
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Clock" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-montserrat font-semibold text-lg mb-2">Расписание</h3>
                  <p className="text-gray-600 font-roboto">
                    Понедельник, Среда, Пятница: 18:00 - 20:00<br />
                    Суббота: 10:00 - 12:00 (детская группа)
                  </p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat">Записаться на тренировку</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-roboto font-medium">Имя</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border rounded-md font-roboto" 
                    placeholder="Ваше имя"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-roboto font-medium">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border rounded-md font-roboto" 
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-roboto font-medium">Сообщение</label>
                  <textarea 
                    className="w-full p-3 border rounded-md font-roboto h-24 resize-none" 
                    placeholder="Ваше сообщение"
                  ></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 font-roboto font-semibold">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">
                КИОКУШИН <span className="text-accent">ЗАБАЙКАЛЬЕ</span>
              </h3>
              <p className="text-gray-300 font-roboto">
                Федерация Киокушин каратэ Забайкальского края. 
                Развиваем традиции боевых искусств с 1995 года.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2 font-roboto">
                <a href="#home" className="block text-gray-300 hover:text-accent transition-colors">Главная</a>
                <a href="#about" className="block text-gray-300 hover:text-accent transition-colors">О нас</a>
                <a href="#gallery" className="block text-gray-300 hover:text-accent transition-colors">Галерея</a>
                <a href="#contact" className="block text-gray-300 hover:text-accent transition-colors">Контакты</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="text-white border-gray-600 hover:border-accent hover:text-accent">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="sm" variant="outline" className="text-white border-gray-600 hover:border-accent hover:text-accent">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="sm" variant="outline" className="text-white border-gray-600 hover:border-accent hover:text-accent">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-roboto">
              © 2024 Федерация Киокушин Забайкальского края. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
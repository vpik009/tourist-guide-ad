<template>
  <q-page>
    
    
    <div class="q-pa-md">
      <Transition>
      <q-carousel
        style="border-radius: 10px;"
        animated
        v-model="slide"
        height="400px"
        navigation
        swipeable
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        v-if="page==1"
      >
        <q-carousel-slide :name="1" img-src="../../public/kl.jpg" />
        <q-carousel-slide :name="2" img-src="https://www.gentingskyworlds.com/content/dam/approved/genting-skyworlds/web/home/tickets/skyworlds_tickets.jpg" />
        <q-carousel-slide :name="3" img-src="../../public/batu1.jpg" />
        <q-carousel-slide :name="4" img-src="../../public/batu2.jpg" />
        <q-carousel-slide :name="5" img-src="../../public/batu3.jpg" />
        <q-carousel-slide :name="6" img-src="../../public/chinwee.jpeg" />
        <q-carousel-slide :name="7" img-src="../../public/svetlyachki.jpg" />
      </q-carousel>
      </Transition>
    </div>
    
    <div class="full-width row q-pl-md q-pr-md justify-center">

      <!-- <q-btn v-if="page==1" align="center" class="q-ml-sm text-weight-bold" flat color="primary" label="Главная" />
      <q-btn v-else align="center" class="q-ml-sm text-weight-bold" flat label="Главная" @click="page=1"/>

      <q-btn v-if="page==2" align="center" class="q-ml-sm text-weight-bold" flat color="primary" label="Экскурсии"  />
      <q-btn v-else align="center" class="q-ml-sm text-weight-bold" flat label="Экскурсии" @click="page=2"/>

      <q-btn v-if="page==3" align="center" class="q-ml-sm text-weight-bold" flat color="primary" label="Отзывы" />
      <q-btn v-else align="center" class="q-ml-sm text-weight-bold" flat label="Отзывы" @click="page=3"/> -->


      <q-tabs
        v-model="page"
        class="text-primary"
      >
        <q-tab name="1" icon="home" label="Главная" />
        <q-tab name="2" icon="airport_shuttle" label="Экскурсии" />
        <q-tab name="3" icon="rate_review" label="Отзывы" />
      </q-tabs>

    </div>

    
    <!--PAGE 1-->
    <!-- <Transition>  -->
    <div v-if="page==1">
      <!--NONE PHONE-->
      <div v-if="!$q.screen.lt.sm" class="q-pa-md row justify-center">

        <q-card class="my-card col-8">
          <q-card-section>

            <div class="q-ma-md q-mt-xl" >
              <text align="left" class="q-pa-md q-ml-xl text-h3  row" >О Нас</text>

              <q-separator/>

              <div class="text-center col-12 q-ma-md">
                <text class="row justify-center text-h6">Мы современная туристическая компания “Сату-Тур” которую ведёт Малайзийский Дух. Индивидуальный подход к каждому - залог нашего успеха. Наивысшее удовольствие для нас - счастливо-вдохновлённый Турист, с которым Мы поделились частичкой Культуры и Вдохновения этой многогранной страны-сказки. Наши гиды - Русскоговорящие Профессионалы пропитанные местной культурой. Они сумеют не только показать и рассказать Вам самое интересное про места входящие в выбранный Вами тур, но и поделиться с Вами самыми сокровенными мыслями о стране, которые Вы не найдёте в интернете. Мы ждём Вас! Вас ждёт Малайзия!</text>
                <text class="row justify-center text-subtitle1 q-mt-lg">Туристическое Агенство Сату-Тур</text>

                <text class="row justify-center text-subtitle1">Русско-говорящие гиды с широким опытом проведут Ваш персональный VIP тур.</text>

                <text class="row justify-center text-subtitle1">Для Ваших детей тур Бесплатен. (До 10 лет)</text>
              </div>

            </div>
          
          </q-card-section>
        </q-card>


        <q-btn round color="green-14" class="fixed-bottom-right q-ma-lg" size="xl" @click="whatsapp">
          <q-img src="../assets/iconswhatsapp.svg" style="height: 45px; max-width: 45px"/>  
        </q-btn>

      </div>


      <!--PHONE-->
      <div v-else>

        <div class="q-ma-md q-mt-xl col-12" >
          <text align="left" class="q-pa-md text-h5 col-12 row" >О Нас</text>

          <div class="text-center col-12 q-ma-md">
            <text class="row justify-center text-subtitle1">Мы современная туристическая компания “Сату-Тур” которую ведёт Малайзийский Дух. Индивидуальный подход к каждому - залог нашего успеха. Наивысшее удовольствие для нас - счастливо-вдохновлённый Турист, с которым Мы поделились частичкой Культуры и Вдохновения этой многогранной страны-сказки. Наши гиды - Русскоговорящие Профессионалы пропитанные местной культурой. Они сумеют не только показать и рассказать Вам самое интересное про места входящие в выбранный Вами тур, но и поделиться с Вами самыми сокровенными мыслями о стране, которые Вы не найдёте в интернете. Мы ждём Вас! Вас ждёт Малайзия!</text>
            <text class="row justify-center text-subtitle2 q-ma-md q-mt-lg">Туристическое Агенство Сату-Тур</text>

            <text class="row justify-center text-subtitle2 q-ma-md">Русско-говорящие гиды с широким опытом проведут Ваш персональный VIP тур.</text>

            <text class="row justify-center text-subtitle2 q-ma-md">Для Ваших детей тур Бесплатен. (До 10 лет)</text>
          </div>

        </div>


        <q-btn round color="green-14" class="fixed-bottom-right q-ma-sm" size="md" @click="whatsapp">
          <q-img src="../assets/iconswhatsapp.svg" style="height: 30px; max-width: 30px"/>  
        </q-btn>

      </div>
    </div>
    <!-- </Transition> -->

    <!--PAGE 2-->
    <!-- <Transition>  -->
    <div v-if="page==2">
      <!--NONE PHONE-->
      <div v-if="!$q.screen.lt.sm" class="q-pa-md row">

        <div v-for="(item, index) in excursions" :key="index" class="col-4">
          <q-card class="my-card q-ma-md" :style="item.class">
            <q-img :src="item.cardimg" style="height: 250px; max-width: 1000px">
              <div class="absolute-bottom">
                <div class="text-h6">{{ item.title }}</div>
              </div>
            </q-img>

            <q-card-actions>
              <q-btn flat @click="saveExcursionDetails(item), excursion_details=true, testdb()">Подробнее</q-btn>
            </q-card-actions>
          </q-card>

        </div>

        <!--DIALOG-->
          <q-dialog v-model="excursion_details"
          >
            <q-card class="my-card" style="width: 700px; max-width: 80vw;">
              <q-video
                v-if="currentExcursion.content"
                allowfullscreen
                :ratio="16/9"
                :src="currentExcursion.content"
                style="outline: none;"
              />
              <q-img v-else :src="currentExcursion.cardimg" style="height: 350px; max-width: 1000px"/>

              <!-- <iframe width="700" height="400" src="https://www.youtube.com/embed/Y1xuHnhphNo?list=RDY1xuHnhphNo" title="Throat singing - 'Olor Bolzo Olorim'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->

              <q-card-section>

                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis q-ma-md">
                    {{currentExcursion.title}}
                  </div>
                </div>

              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1 q-ma-md">
                  Стоимость Тура・{{currentExcursion.price}}
                </div>
                <div class="text-body2 text-grey-9 q-ma-md">
                  {{currentExcursion.description}}
                </div>
              </q-card-section>

              <q-separator />

              <q-card-actions align="right">
                <q-btn v-close-popup flat color="primary" label="Закрыть" />
              </q-card-actions>
            </q-card>
          </q-dialog>


        <q-btn round color="green-14" class="fixed-bottom-right q-ma-lg" size="xl" @click="whatsapp">
          <q-img src="../assets/iconswhatsapp.svg" style="height: 45px; max-width: 45px"/>  
        </q-btn>

      </div>
      <!--PHONE-->
      <div v-else>

        <div v-for="(item, index) in excursions" :key="index" class="col-4">

            <q-card class="my-card q-ma-md" :style="item.class">
              <q-img :src="item.cardimg" style="height: 250px; max-width: 1000px">
                <div class="absolute-bottom">
                  <div class="text-h6">{{ item.title }}</div>
                </div>
              </q-img>

              <q-card-actions>
                <q-btn flat @click="saveExcursionDetails(item), excursion_details=true">Подробнее</q-btn>
              </q-card-actions>
            </q-card>

        </div>

        <!--DIALOG-->
          <q-dialog v-model="excursion_details"
            full-width
          >
            <q-card class="my-card">

              <q-video
              style="height: 500px; max-width: 1000px"
                v-if="currentExcursion.content"
                allowfullscreen
                :ratio="16/9"
                :src="currentExcursion.content"
              />
              <q-img v-else :src="currentExcursion.cardimg" style="height: 300px; max-width: 1000px"/>


              <q-card-section>

                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis row q-ma-md">
                    {{currentExcursion.title}}
                  </div>
                </div>

              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1 q-ma-md">
                  Стоимость Тура・{{currentExcursion.price}}
                </div>
                <div class="text-body2 text-grey-9 q-ma-md">
                  {{currentExcursion.description}}
                </div>
              </q-card-section>

              <q-separator />

              <q-card-actions align="right">
                <q-btn v-close-popup flat color="primary" label="Закрыть" />
              </q-card-actions>
            </q-card>
          </q-dialog>

        <q-btn round color="green-14" class="fixed-bottom-right q-ma-sm" size="md" @click="whatsapp">
          <q-img src="../assets/iconswhatsapp.svg" style="height: 30px; max-width: 30px"/>  
        </q-btn>
      </div>

    </div>
    <!-- </Transition>  -->


    <!--PAGE 3-->
    <!-- <Transition>  -->
    <div v-if="page==3">

      <!--NONE PHONE-->
      <div v-if="!$q.screen.lt.sm" class="q-pa-md row justify-center q-mb-xl">

        <div class="col-8 justify-center q-ma-md q-mb-xl">
            <text class="text-h6 row col-12 q-ma-md q-mt-xl"> Оставьте свой отзыв </text>
            <q-rating
                    class="q-ma-md q-ma-md"
                    v-model="reviewScore"
                    size="2em"
                    color="orange"
                    disable
            />
            <q-input outlined disable v-model="reviewName" class="col-6" label="Имя (Отзывы временно отключены...)" />
            <q-input outlined disable v-model="reviewText" label="Комментарий (Отзывы временно отключены...)" />
            <div align="center">
              <q-btn disable color="primary" class="q-ma-md" label="Оставить отзыв" />
            </div>
      

          </div>

          <div class="col-8 justify-center q-ma-md q-mb-none">
            <text class="text-h4 row col-12 q-ma-md q-mt-xl"> Отзывы </text>
          </div>

          <q-card class="my-card col-8" v-for="(rating, index) in ratings" :key=index>
            <q-card-section>

              <div class="q-ma-md q-mt-xl row col-12" >
                <!-- <text align="left" class="q-pa-md q-ml-xl text-h3  row" >Отзывы отсутствуют...</text> -->

                <text class="text-weight-bold text-h6 q-ma-md">
                    {{ rating.name }}
                </text>
                <q-rating
                  class="q-ma-md q-ma-md"
                  v-model="rating.score"
                  size="2.5em"
                  color="orange"
                  readonly
                />
                <text class="text-subtitle1 q-ma-md row col-12">
                    {{ rating.comment }}
                </text>

                <!-- <q-separator/> -->

          
              </div>
            
            </q-card-section>
          </q-card>


          <q-btn round color="green-14" class="fixed-bottom-right q-ma-lg" size="xl" @click="whatsapp">
            <q-img src="../assets/iconswhatsapp.svg" style="height: 45px; max-width: 45px"/>  
          </q-btn>

        </div>


        <!--PHONE-->
        <div v-else>

          <div class="q-ma-md q-mt-xl col-12" >
            <text class="text-h6 row col-12 q-ma-md q-mt-xl"> Оставьте свой отзыв </text>
            <q-rating
                    class="q-ma-md q-ma-md"
                    v-model="reviewScore"
                    size="2em"
                    color="orange"
                    disable
            />
            <q-input outlined disable v-model="reviewName" class="col-6" label="Имя (Отзывы временно отключены...)" />
            <q-input outlined disable v-model="reviewText" label="Комментарий (Отзывы временно отключены...)" />
            <div align="center">
              <q-btn disable color="primary" class="q-ma-md" label="Оставить отзыв" />
            </div>

          </div>

          <div class="col-8 justify-center q-ma-md q-mb-none">
            <text class="text-h4 row col-12 q-ma-md q-mt-xl"> Отзывы </text>
          </div>

          <q-card class="my-card col-8" v-for="(rating, index) in ratings" :key=index>
            <q-card-section>

              <div class="q-ma-md q-mt-xl row col-12" >
                <!-- <text align="left" class="q-pa-md q-ml-xl text-h3  row" >Отзывы отсутствуют...</text> -->

                <text class="text-weight-bold text-subtitle1 q-ma-md q-mb-none">
                    {{ rating.name }}
                </text>
                <q-rating
                  class="q-ma-md q-ma-md q-mt-none"
                  v-model="rating.score"
                  size="2em"
                  color="orange"
                  readonly
                />
                <text class="text-subtitle1 q-ma-md row col-12">
                    {{ rating.comment }}
                </text>

                <!-- <q-separator/> -->

          
              </div>
            
            </q-card-section>
          </q-card>


          <q-btn round color="green-14" class="fixed-bottom-right q-ma-sm" size="md" @click="whatsapp">
            <q-img src="../assets/iconswhatsapp.svg" style="height: 30px; max-width: 30px"/>  
          </q-btn>

        </div>
    
    </div>
    <!-- </Transition>  -->

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Screen } from 'quasar'
import { db } from "../../db/firebase-config"
import { doc, setDoc } from "firebase/firestore"; 

export default{
  name: 'IndexPage',

  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  },
  data() {
    return{
      page: 1,
      excursion_details: false,
      reviewName: "",
      reviewText: "",
      reviewScore: 0,
      currentExcursion: {
          title: "",
          description: "",
          price: "",
          cardimg: "",
          content: "",
          location: ""
      },
      excursions: [
        { title: "Обзорный Тур по Куала-Лумпуру",
          description: "Обзорная экскурсия - это прекрасная возможность познакомиться с Куала Лумпуром. Небольшая прогулка по городу, позволит ознакомиться как со старинной частью города, так и современной. В программу включены одни из самых известных памятников архитектуры, а также просто интересные места. Среди них: Башни-близнецы Петронас (PETRONAS Twin Towers), площадь Независимости, Королевский дворец — символ Конституционной Монархии, Национальная мечеть, Буддийский храм Тян-Хоу. Данная экскурсия также дает возможность полюбоваться на прекрасные образцы мавританского искусства, яркими представителями которого является дворец Султана Абдула Самада и Железнодорожный вокзал. Экскурсию завершит посещение фабрики Батика,где вы увидите традиционное производство росписи по ткани «Батик».",
          price: "$55/персона при наличии двух или более персон. 120$ VIP тур для одного человека. Ваши дети проходят бесплатно.",
          program: "1. Фото стоп у башен Петронас\n2. Храм трёх религий Тян Хоу\n3. Национальная мечеть\n4. Старый ЖД вокзал\n5. Dataran Merdeka – Площадь Независимости\n6. Istana Negara – Королевский дворец\n7. Национальные ремесла",
          duration: "3,5 часа",
          cardimg: `kl.jpg`,
          content: "videos/video1.mp4",
          location: "Kuala Lumpur",
          class: ""
        }, 
        { title: "Обезьянки Лангуры, Холм Мелавати + Светлячки",
          description: "Окунитесь в Малайзийскую Сказку. Лангуры - добрые мартышки подарят Вам множество улыбок. Они будут рады не только банану, которым Вы можете их угостить, но и просто посидеть у Вас на плече, рассказывая Вам о жизни в джунглях. Светлячки будут вдохновлять Вас, разжигая свет в вашей Душе, в то время как мистические орлы парящие над Вами дадут ощутить Высоту собственного Духа. Экскурсию дополнит Храм невероятной красоты Богини Шакти, построенный из Розового Мрамора и Форт на холме Мелавати, который оборонял Малайцев от внешних нападений. Эта экскурсия насытит Вас самыми приятными и искренними эмоциями. ",
          price: "$135/персона при наличии двух или более персон. Ваши дети проходят бесплатно." ,
          program: "1. Храм из Розового Мрамора «Сри Шакти»\n2. Кормим Лангуров (милейших обезьян), фотографируемся с ними. \n3. Взбираемся на исторический Холм Мелавати. \n4. Ужин в Волшебном Китайском Ресторане (еда входит в стоимость тура)\n5. Любуемся сияющими светлячками из лодки. ",
          duration: "6 часов",
          cardimg: "svetlyachki.jpg",
          content: "videos/video2.mp4",
          location: "Kuala Lumpur",
          class: ""
        }, 
        { title: "Пещеры Бату + Гентинг",
          description: "Экскурсию открывают Пещеры Бату. Которые в 1878 году открыл Американский Натуралист, даже не предполагая, что через 12 лет это место станет главной точкой Индуизма всей Малайзии. Именно в этом месте празднуется знаменитый праздник Тайпусам, шествие которого собирает более 1.5 миллионов человек. Китайский храм Чин Сви силой Буддизма поделится и своими просветлениями. «Путь к Освобождению», проходящий 10 камер ада уверенно подтолкнёт на мысли. Переварить мысли поможет Гентинг Хайлендс - курорт состоящий из парка аттракционов, единственного казино в Малайзии, бесконечного количества ресторанов и всевозможных развлечений. Добро пожаловать в Вашу Фантазию!",
          price: "$140/персона при наличии двух или более персон.",
          program: "1. Поднимаемся на 272 мистические ступеньки что бы попасть в Пещеры Бату. Природный Храм. \n2. По канатной дороге поднимаемся в Китайский храм Чин Сви в горах Гентинга. \n3. Далее, по канатной дороге поднимаемся ещё Выше, что бы оказаться в Курорте Гентинг Хайлендс. Местный Disneyland для детей, Las Vegas для взрослых.  ",
          duration: "6 часов",
          cardimg: "batu3.jpg",
          content: "videos/video3.mp4",
          location: "Kuala Lumpur",
          class: ""
        },
        { title: "Авторский VIP Тур ",
          description: "Мы подберем воистину вдохновительный, индивидуально-продуманный тур, учитывающий каждое малейшее пожелание. \nВам достаточно выйти с нами на связь по WhatsApp. Мы обсудим все мысли и всевозможные детали. \nДо встречи в Малайзии! \nJumpa lagi!.",
          price: "$400",
          program: "",
          duration: "",
          cardimg: `viptour.jpeg`,
          content: "",
          location: "Kuala Lumpur",
          class: ""
        }, 
      ],
      ratings: [
        {
          name: "Наталья Степаненко",
          score: "5",
          comment: "Хочу сказать СПАСИБО за классный тур. Все было на высоте. Очень красиво, много фоток крутых) Организовано гладко. Гид интересный, интеллигентный, много мест посоветовал суперских. Муж и дети тоже довольны!"
        },
        {
          name: "Марк Эргашев",
          score: "5",
          comment: "Спасибо команде Сату-Тур. Приятно что всегда были на связи. Что вообще была возможность по телефону детально пообщаться и под нас подстроиться. Мы всего на 2 дня оставались и обратно в Тайланд. До новых встреч. Марк и Вера)"
        },
        {
          name: "Викентий Кузнецов",
          score: "4.5",
          comment: "Только вернулись с тура. Хочу сразу отписаться. Пещеры Бату очень понравились. Индуизм всегда манил. Ступеньки кстати не такие и страшные в прохождении, хоть их и 272. Главное - подходящая обувь, кроссовки. "
        }
      ]
    }
    
  },
  methods:{

    async testdb(){
      console.log("hi")
      await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CAAA",
        country: "USA"
      });
    },

    whatsapp(){
      window.location = "https://api.whatsapp.com/send?phone=+79150694774&text=Здравствуйте. Меня интересуют экскурсии компании Сату-Тур!";
    },
    saveExcursionDetails(excursion){
      this.currentExcursion.title = excursion.title;
      this.currentExcursion.description = excursion.description;
      this.currentExcursion.price = excursion.price;
      this.currentExcursion.cardimg = excursion.cardimg;
      this.currentExcursion.content = excursion.content;
      this.currentExcursion.location = excursion.location;
    }
  }
}
</script>

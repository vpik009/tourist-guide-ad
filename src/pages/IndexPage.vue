<template>
  <q-page>
    
    <div class="q-pa-md">
      <q-carousel
        animated
        v-model="slide"
        navigation
        swipeable
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Moonrise_over_kuala_lumpur.jpg" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      </q-carousel>
    </div>
    <div class="full-width row q-pl-md q-pr-md justify-center">

      <q-btn v-if="page==1" align="center" class="q-ml-sm text-weight-bold" flat color="primary" label="Главная" />
      <q-btn v-else align="center" class="q-ml-sm text-weight-bold" flat label="Главная" @click="page=1"/>

      <q-btn v-if="page==2" align="center" class="q-ml-sm text-weight-bold" flat color="primary" label="Экскурсии"  />
      <q-btn v-else align="center" class="q-ml-sm text-weight-bold" flat label="Экскурсии" @click="page=2"/>

      <q-btn v-if="page==3" align="center" class="q-ml-sm text-weight-bold" flat color="primary" label="Отзывы" />
      <q-btn v-else align="center" class="q-ml-sm text-weight-bold" flat label="Отзывы" @click="page=3"/>

    </div>

    
    <!--PAGE 1-->
    <Transition> 
    <div v-if="page==1">
      <!--NONE PHONE-->
      <div v-if="!$q.screen.lt.sm" class="q-pa-md row justify-center">

        <q-card class="my-card col-8">
          <q-card-section>

            <div class="q-ma-md q-mt-xl" >
              <text align="left" class="q-pa-md q-ml-xl text-h3  row" >О Нас</text>

              <q-separator/>

              <div class="text-center col-12 q-ma-md">
                <text class="row justify-center text-subtitle1">Туристическое Агенство Сату-Тур</text>

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
            <text class="row justify-center text-subtitle2 q-ma-md">Туристическое Агенство Сату-Тур</text>

            <text class="row justify-center text-subtitle2 q-ma-md">Русско-говорящие гиды с широким опытом проведут Ваш персональный VIP тур.</text>

            <text class="row justify-center text-subtitle2 q-ma-md">Для Ваших детей тур Бесплатен. (До 10 лет)</text>
          </div>

        </div>


        <q-btn round color="green-14" class="fixed-bottom-right q-ma-sm" size="md" @click="whatsapp">
          <q-img src="../assets/iconswhatsapp.svg" style="height: 30px; max-width: 30px"/>  
        </q-btn>

      </div>
    </div>
    </Transition>

    <!--PAGE 2-->
    <Transition> 
    <div v-if="page==2">
      <!--NONE PHONE-->
      <div v-if="!$q.screen.lt.sm" class="q-pa-md row">

        <div v-for="(item, index) in excursions" :key="index" class="col-4">
          <q-card class="my-card q-ma-md">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" style="height: 250px; max-width: 1000px">
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
          >
            <q-card class="my-card" style="width: 700px; max-width: 80vw;">
              <q-img :src="currentExcursion.img" />

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
          <q-card class="my-card q-ma-md">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" style="height: 250px; max-width: 1000px">
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
              <q-img :src="currentExcursion.img" />

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
    </Transition> 


    <!--PAGE 3-->
    <Transition> 
    <div v-if="page==3">

      <!--NONE PHONE-->
      <div v-if="!$q.screen.lt.sm" class="q-pa-md row justify-center">
          <q-card class="my-card col-8">
            <q-card-section>

              <div class="q-ma-md q-mt-xl" >
                <text align="left" class="q-pa-md q-ml-xl text-h3  row" >Отзывы отсутствуют...</text>

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
            <text align="left" class="q-pa-md text-h5 col-12 row" >Отзывы отсутствуют...</text>

          </div>


          <q-btn round color="green-14" class="fixed-bottom-right q-ma-sm" size="md" @click="whatsapp">
            <q-img src="../assets/iconswhatsapp.svg" style="height: 30px; max-width: 30px"/>  
          </q-btn>

        </div>
    
    </div>
    </Transition> 

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Screen } from 'quasar'

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
      currentExcursion: {
          title: "",
          description: "",
          price: "",
          img: "",
          location: ""
      },
      excursions: [
        { title: "Обзорный Тур по Куала-Лумпуру",
          description: "Обзорная экскурсия - это прекрасная возможность познакомиться с Куала Лумпуром. Небольшая прогулка по городу, позволит ознакомиться как со старинной частью города, так и современной. В программу включены одни из самых известных памятников архитектуры, а также просто интересные места. Среди них: Башни-близнецы Петронас (PETRONAS Twin Towers), площадь Независимости, Королевский дворец — символ Конституционной Монархии, Национальная мечеть, Буддийский храм Тян-Хоу. Данная экскурсия также дает возможность полюбоваться на прекрасные образцы мавританского искусства, яркими представителями которого является дворец Султана Абдула Самада и Железнодорожный вокзал. Экскурсию завершит посещение фабрики Батика,где вы увидите традиционное производство росписи по ткани «Батик».",
          price: "$65/персона при наличии двух персон. 130$ VIP тур для одного человека. Ваши дети проходят бесплатно. Максимальное количество участников 2 человека.",
          program: "1. Фото стоп у башен Петронас\n2. Храм трёх религий Тян Хоу\n3. Национальная мечеть\n4. Старый ЖД вокзал\n5. Dataran Merdeka – Площадь Независимости\n6. Istana Negara – Королевский дворец\n7. Национальные ремесла",
          duration: "3,5 часа",
          img: "https://cdn.quasar.dev/img/chicken-salad.jpg",
          location: "Kuala Lumpur"
        }, 
        { title: "Обезьянки Лангуры, Холм Мелавати + Светлячки",
          description: "Окунитесь в Малайзийскую Сказку. Лангуры - добрые мартышки подарят Вам множество улыбок. Они будут рады не только банану, которым Вы можете их угостить, но и просто посидеть у Вас на плече, рассказывая Вам о жизни в джунглях. Светлячки будут вдохновлять Вас, разжигая свет в вашей Душе, в то время как мистические орлы парящие над Вами дадут ощутить Высоту собственного Духа. Экскурсию дополнит Храм невероятной красоты Богини Шакти, построенный из Розового Мрамора и Форт на холме Мелавати, который оборонял Малайцев от внешних нападений. Эта экскурсия насытит Вас самыми приятными и искренними эмоциями. ",
          price: "$145/персона. при наличии двух персон. 290$ VIP тур для одного человека. Ваши дети проходят бесплатно. Максимальное количество участников 2 взрослых + 2 ребёнка (до 10 лет)",
          program: "1. Храм из Розового Мрамора «Сри Шакти»\n2. Кормим Лангуров (милейших обезьян), фотографируемся с ними. \n3. Взбираемся на исторический Холм Мелавати. \n4. Ужин в Волшебном Китайском Ресторане (еда входит в стоимость тура)\n5. Любуемся сияющими светлячками из лодки. ",
          duration: "6 часов",
          img: "https://cdn.quasar.dev/img/chicken-salad.jpg",
          location: "Kuala Lumpur"
        }, 
        { title: "Пещеры Бату + Гентинг",
          description: "Экскурсию открывают Пещеры Бату. Которые в 1878 году открыл Американский Натуралист, даже не предполагая, что через 12 лет это место станет главной точкой Индуизма всей Малайзии. Именно в этом месте празднуется знаменитый праздник Тайпусам, шествие которого собирает более 1.5 миллионов человек. Китайский храм Чин Сви силой Буддизма поделится и своими просветлениями. «Путь к Освобождению», проходящий 10 камер ада уверенно подтолкнёт на мысли. Переварить мысли поможет Гентинг Хайлендс - курорт состоящий из парка аттракционов, единственного казино в Малайзии, бесконечного количества ресторанов и всевозможных развлечений. Добро пожаловать в Вашу Фантазию!",
          price: "$140/персона при наличии двух персон. 280$ VIP тур для одного человека. Максимальное количество участников 2 взрослых + 2 ребёнка (до 10 лет)",
          program: "1. Поднимаемся на 272 мистические ступеньки что бы попасть в Пещеры Бату. Природный Храм. \n2. По канатной дороге поднимаемся в Китайский храм Чин Сви в горах Гентинга. \n3. Далее, по канатной дороге поднимаемся ещё Выше, что бы оказаться в Курорте Гентинг Хайлендс. Местный Disneyland для детей, Las Vegas для взрослых.  ",
          duration: "6 часов",
          img: "https://cdn.quasar.dev/img/chicken-salad.jpg",
          location: "Kuala Lumpur"
        }
      ]
    }
    
  },
  methods:{
    whatsapp(){
      window.location = "https://api.whatsapp.com/send?phone=+79150694774&text=Здравствуйте, меня интересуют туры САТУ";
    },
    saveExcursionDetails(excursion){
      this.currentExcursion.title = excursion.title;
      this.currentExcursion.description = excursion.description;
      this.currentExcursion.price = excursion.price;
      this.currentExcursion.img = excursion.img;
      this.currentExcursion.location = excursion.location;
    }
  }
}
</script>

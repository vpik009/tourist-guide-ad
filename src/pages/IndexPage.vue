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

              <text align="left" class="q-ml-xl q-mt-lg q-mr-xl text-body1 row"> Туристическое Агенство САТУ-ТУР... Уважаемые туристы, вашему вниманию предлагается экскурсионное обслуживание во время круиза по Юго-Восточной Азии. С ноября по март каждого года из ряда круизных терминалов Азии отправляются шикарные белоснежные теплоходы по самым разнообразным маршрутам. Одной из самых популярных отправных точек для круизов является город-государство Сингапур. Именно там находится крупнейший круизный терминал Юго-Восточной Азии. В Сингапур хоть и нужна виза для граждан большинства стран бывшего советского союза, но она оформляется в электронном виде без особых сложностей. Поэтому круизы из Сингапура пользуются очень большой популярностью у русскоязычных туристов.</text>
            </div>
          
          </q-card-section>
        </q-card>


        <q-btn round color="green-14" class="fixed-bottom-right q-ma-sm" size="lg" @click="whatsapp">
          <q-img src="../assets/iconswhatsapp.svg" style="height: 45px; max-width: 45px"/>  
        </q-btn>

      </div>


      <!--PHONE-->
      <div v-else>

        <div class="q-ma-md q-mt-xl col-12" >
          <text align="left" class="q-pa-md text-h5 col-12 row" >О Нас</text>

          <text align="left" class="q-ml-md q-mt-md q-mr-md q-mb-xl text-body2 col-6 row"> Туристическое Агенство САТУ-ТУР... Уважаемые туристы, вашему вниманию предлагается экскурсионное обслуживание во время круиза по Юго-Восточной Азии. С ноября по март каждого года из ряда круизных терминалов Азии отправляются шикарные белоснежные теплоходы по самым разнообразным маршрутам. Одной из самых популярных отправных точек для круизов является город-государство Сингапур. Именно там находится крупнейший круизный терминал Юго-Восточной Азии. В Сингапур хоть и нужна виза для граждан большинства стран бывшего советского союза, но она оформляется в электронном виде без особых сложностей. Поэтому круизы из Сингапура пользуются очень большой популярностью у русскоязычных туристов.</text>
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
              <q-btn flat @click="excursion_details=true">Подробнее</q-btn>
            </q-card-actions>
          </q-card>

          <!--DIALOG-->
          <q-dialog v-model="excursion_details"
          >
            <q-card class="my-card" style="width: 700px; max-width: 80vw;">
              <q-img :src="item.img" />

              <q-card-section>
                <q-btn
                  fab
                  color="primary"
                  icon="place"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%);"
                />

                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">
                    {{item.title}}
                  </div>
                  <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                    <q-icon name="place" />
                    {{ item.location }}
                  </div>
                </div>

              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1">
                  $・{{item.price}}
                </div>
                <div class="text-caption text-grey">
                  {{item.description}}
                </div>
              </q-card-section>

              <q-separator />

              <q-card-actions align="right">
                <q-btn v-close-popup flat color="primary" label="Reserve" />
                <q-btn v-close-popup flat color="primary" round icon="event" />
              </q-card-actions>
            </q-card>
          </q-dialog>

        </div>


        <q-btn round color="green-14" class="fixed-bottom-right q-ma-sm" size="lg" @click="whatsapp">
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
              <q-btn flat>Подробнее</q-btn>
            </q-card-actions>
          </q-card>

          <!--DIALOG-->

        </div>

        <q-btn round color="green-14" class="fixed-bottom-right q-ma-sm" size="md" @click="whatsapp">
          <q-img src="../assets/iconswhatsapp.svg" style="height: 30px; max-width: 30px"/>  
        </q-btn>
      </div>

    </div>
    </Transition> 


    <!--PAGE 3-->
    <Transition> 
    <div v-if="page==3">
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
      excursions: [
        { title: "Пещеры Бату1",
          description: "1",
          price: "1",
          img: "https://cdn.quasar.dev/img/chicken-salad.jpg",
          location: "Kuala Lumpur"
        }, 
        { title: "Пещеры Бату2",
          description: "2",
          price: "2",
          img: "https://cdn.quasar.dev/img/chicken-salad.jpg",
          location: "Kuala Lumpur"
        }, 
        { title: "Пещеры Бату3",
          description: "3",
          price: "3",
          img: "https://cdn.quasar.dev/img/chicken-salad.jpg",
          location: "Kuala Lumpur"
        }, 
        { title: "Пещеры Бату4",
          description: "4",
          price: "4",
          img: "https://cdn.quasar.dev/img/chicken-salad.jpg",
          location: "Kuala Lumpur"
        }, 
        { title: "Пещеры Бату5",
          description: "5",
          price: "5",
          img: "https://cdn.quasar.dev/img/chicken-salad.jpg",
          location: "Kuala Lumpur"
        }, 
        { title: "Пещеры Бату6",
          description: "6",
          price: "6",
          img: "https://cdn.quasar.dev/img/chicken-salad.jpg",
          location: "Kuala Lumpur"
        }, 
        { title: "Пещеры Бату7",
          description: "7",
          price: "7",
          img: "https://cdn.quasar.dev/img/chicken-salad.jpg",
          location: "Kuala Lumpur"
        }, 
        { title: "Пещеры Бату8",
          description: "8",
          price: "8",
          img: "https://cdn.quasar.dev/img/chicken-salad.jpg",
          location: "Kuala Lumpur"
        }, 
      ]
    }
    
  },
  methods:{
    whatsapp(){
      window.location = "https://api.whatsapp.com/send?phone=+79150694774&text=Здравствуйте, меня интересуют туры SATU";
    }
  }
}
</script>

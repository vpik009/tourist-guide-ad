<template>
  <q-page class="col-12">
    
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

      <q-btn v-if="page==1" align="center" class="q-ml-sm text-weight-bold" flat color="primary" label="Главная"/>
      <q-btn v-else align="center" class="q-ml-sm text-weight-bold" flat label="Главная" @click="page=1"/>

      <q-btn v-if="page==2" align="center" class="q-ml-sm text-weight-bold" flat color="primary" label="Экскурсии" />
      <q-btn v-else align="center" class="q-ml-sm text-weight-bold" flat label="Экскурсии" @click="page=2"/>

      <q-btn v-if="page==3" align="center" class="q-ml-sm text-weight-bold" flat color="primary" label="Отзывы" />
      <q-btn v-else align="center" class="q-ml-sm text-weight-bold" flat label="Отзывы" @click="page=3"/>

    </div>

    <!--NONE PHONE-->
    <div v-if="!$q.screen.lt.sm" class="q-pa-md row">
      <div class="q-ma-md q-mt-xl col-8" >
        <text align="left" class="q-pa-md q-ml-xl text-h4 col-12 row" >О Нас</text>

        <text align="left" class="q-ml-xl q-mt-lg q-mr-xl text-body1 col-6 row"> Туристическое Агенство САТУ-ТУР... Уважаемые туристы, вашему вниманию предлагается экскурсионное обслуживание во время круиза по Юго-Восточной Азии. С ноября по март каждого года из ряда круизных терминалов Азии отправляются шикарные белоснежные теплоходы по самым разнообразным маршрутам. Одной из самых популярных отправных точек для круизов является город-государство Сингапур. Именно там находится крупнейший круизный терминал Юго-Восточной Азии. В Сингапур хоть и нужна виза для граждан большинства стран бывшего советского союза, но она оформляется в электронном виде без особых сложностей. Поэтому круизы из Сингапура пользуются очень большой популярностью у русскоязычных туристов.</text>
      </div>


      <div class="col-3 q-mt-xl q-pa-md">
        <q-card align="right" class="my-card bg-grey-1 text-black">

          <q-card-section>
            <div class="text-h5">Контакт с гидом</div>
            <div class="text-subtitle1">Алексей Дорохов</div>
          </q-card-section>

          <q-separator/>

          <q-card-actions class="row">
            <q-btn align="center" class="col-12" color="green-14" icon="whatsapp" @click="whatsapp">

              <q-img src="../assets/iconswhatsapp.svg" style="height: 30px; max-width: 30px"/>   
              <text class=" text-weight-bold">+79150694774</text>

            </q-btn>

          </q-card-actions>
        </q-card>
      </div>


    </div>

    <!--PHONE-->
    <div v-else>

    </div>

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
      page: 2
    }
  },
  methods:{
    whatsapp(){
      window.location = "https://api.whatsapp.com/send?phone=+79150694774&text=SITE TEST";
    }
  }
}
</script>

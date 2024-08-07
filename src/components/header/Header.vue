<template>
  <header class="flexline space-between">
    <div class="flexline align-start">
      <router-link to="/" class="appicon"><img alt="App logo" src="../../../public/app-icon-512.png" /></router-link>
      <b class="sensorscount" v-if="countPoints > 0"><IconSensor/> {{countPoints}}</b>
    </div>

    <div class="flexline">
      <select v-model="locale">
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="el">Ελληνικά</option>
      </select>


      <div id="about" class="popover popover-top-right" popover>
        <template v-if="locale === 'en'">
          <h3>Web3 public sensors map</h3>
          <p>Welcome to the decentralized opensource sensors map which operates with the sole intent of serving 
            <a href="https://www.fsf.org/campaigns/priority-projects/decentralization-federation" target="_blank" rel="noopener">the free will of 
            individuals</a>, without any beneficiaries. It offers two distinct layers of decentralization at your choise: peer-to-peer 
            connectivity for direct access to sensor data, and the federative concept for accumulating sensor data and displaying measurement 
            history. Click <a href="https://robonomics.academy/en/learn/sensors-connectivity-course/sensors-connectivity-module/" target="_blank" rel="noopener">here</a> for further technical details.</p>
          <h3>Add your sensor on this map</h3>
          <p>You can <a href="https://robonomics.academy/en/learn/sensors-connectivity-course/sensor-hardware/" target="_blank" rel="noopener">assemble your own sensor</a> using components available on the free market. 
          Follow the instructions provided to <a href="https://robonomics.academy/en/learn/sensors-connectivity-course/setting-up-and-connecting-sensors/" target="_blank" rel="noopener">connect your sensor to the map</a>. We welcome your participation and look forward to expanding our 
          community together. Join us today!</p>
          <p><a href="https://youtu.be/AQ7ZzgbN7jU?si=Y_FsDCEw5T97" target="_blank" rel="noopener">YouTube video guide</a></p>
        </template>
        <template v-if="locale === 'ru'">
          <h3>Web3 открытая сеть датчиков</h3>
          <p>Добро пожаловать в открытую сеть датчиков, которая построена на open-source принципах и поддерживается энтузиастами (см. 
            <a href="https://www.fsf.org/campaigns/priority-projects/decentralization-federation" target="_blank" rel="noopener">the free will of 
            individuals</a>). Карта предлагает два разных уровня децентрализации: прямая peer-to-peer 
            связь датчиков и блокчейн для сбора и хранения истории показаний с датчиков. <a href="https://robonomics.academy/en/learn/sensors-connectivity-course/sensors-connectivity-module/" target="_blank" rel="noopener">Тут</a> можно ознакомиться более подробно с технической стороной.</p>
          <h3>Добавьте свой датчик на карту</h3>
          <p>Вы можете <a href="https://robonomics.academy/en/learn/sensors-connectivity-course/sensor-hardware/" target="_blank" rel="noopener">собрать свой датчик</a>, используя комплектующие 
          на открытом рынке электроники, <a href="https://robonomics.academy/en/learn/sensors-connectivity-course/setting-up-and-connecting-sensors/" target="_blank" rel="noopener">добавить датчик на карту</a>. 
          Мы с радостью приветствуем новых участников сообщества. Присоединяйтесь!</p>
          <p><a href="https://youtu.be/AQ7ZzgbN7jU?si=Y_FsDCEw5T97" target="_blank" rel="noopener">Видео-инструкция на YouTube</a></p>
        </template>
        <template v-if="locale === 'el'">
          <h3>Ανοιχτό δίκτυο αισθητήρων Web3</h3>
          <p>Καλώς ήρθατε στο δίκτυο ανοιχτών αισθητήρων, που βασίζεται σε αρχές ανοιχτού κώδικα και υποστηρίζεται από ενθουσιώδεις (δες 
            <a href="https://www.fsf.org/campaigns/priority-projects/decentralization-federation" target="_blank" rel="noopener">the free will of 
            individuals</a>). Η κάρτα προσφέρει δύο διαφορετικά επίπεδα αποκέντρωσης: άμεση επικοινωνία αισθητήρων peer-to-peer 
            και blockchain για τη συλλογή και αποθήκευση του ιστορικού των αναγνώσεων από αισθητήρες. <a href="https://robonomics.academy/en/learn/sensors-connectivity-course/sensors-connectivity-module/" target="_blank" rel="noopener">Εδώ</a> μπορείτε να μάθετε περισσότερα για την τεχνική πλευρά.</p>
          <h3>Προσθέστε τον αισθητήρα σας στον χάρτη</h3>
          <p>Μπορείτε <a href="https://robonomics.academy/en/learn/sensors-connectivity-course/sensor-hardware/" target="_blank" rel="noopener">να συναρμολογήσετε τον δικό σας αισθητήρα</a>, χρησιμοποιώντας εξαρτήματα στην ανοιχτή αγορά ηλεκτρονικών και <a href="https://robonomics.academy/en/learn/sensors-connectivity-course/setting-up-and-connecting-sensors/" target="_blank" rel="noopener">να προσθέσετε τον αισθητήρα στον χάρτη</a>. 
          Καλωσορίζουμε με χαρά τα νέα μέλη της κοινότητας. Ελα μαζί μας!</p>
          <p><a href="https://youtu.be/AQ7ZzgbN7jU?si=Y_FsDCEw5T97" target="_blank" rel="noopener">Κοίτα βίντεο στο YouTube</a></p>
        </template>

        <hr/>
        <section class="navlinks">
          <a href="https://github.com/airalab/sensors.robonomics.network" target="_blank" rel="noopener">{{$t('links.github')}}</a>
          <router-link to="/air-measurements">{{$t('links.measurement')}}</router-link>
          <router-link to="/privacy-policy">{{$t('links.privacy')}}</router-link>
        </section>
        <hr/>
        <section class="navlinks">
          <a href="https://pinout.cloud" target="_blank" rel="noopener">Supported by Pinout LTD</a>
        </section>
      </div>
      <button class="popovercontrol" popovertarget="about"><font-awesome-icon icon="fa-solid fa-bars" /></button>
  

    </div>
  </header>
</template>

<script>
import { useStore } from "@/store";
import IconSensor from "../icons/Sensor.vue";

export default {
  components: { IconSensor },

  data() {
    return {
      locale: localStorage.getItem("locale") || this.$i18n.locale || 'en',
      store: useStore(),
    }
  },
  watch: {
    locale(newValue) {
      this.$i18n.locale = newValue;
      localStorage.setItem("locale", newValue);
    }
  },
  computed: {
    countPoints() { return this.store.sensors.length }
  }
};
</script>

<style scoped>
  header {
    left: 0;
    padding: var(--app-controlsgap);
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: 10;
    pointer-events: none;
  }

  header > * {
    pointer-events: all;
  }

  .appicon {
    border-radius: .5rem;
    display: block;
    overflow: hidden;
    user-select: none;
    width: 2.5rem;
  }

  .appicon img {
    display: block;
    max-width: 100%;
  }

  .popover-top-right {
    top: calc(var(--gap) * 3 + var(--app-inputheight));
    right: var(--gap);
    width: 500px;
    max-width: calc(100vw - var(--gap) * 2);
  }

  @supports not selector(:popover-open) {
    .popover-top-right {
      right: var(--gap) !important;
    }
  }

  #about p {
    font-size: .9em;
  }

  .navlinks {
    font-weight: bold;
  }

  .navlinks a {
    display: block;
  }

  .navlinks a:not(:last-child) {
    margin-bottom: calc(var(--gap) * .5);
  }

  .sensorscount {
    color: #fff;
    background: var(--color-orange);
    padding: 4px 10px;
    display: block;
    border-radius: 5px;
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .sensorscount svg {
    width: 22px;
  }
</style>

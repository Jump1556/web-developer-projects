<template>
  <div v-if="isSubmitted" class="offertBackground">
    <h1>Prisförslag för bohagsflytt</h1>
    <div class="row d-flex justify-content-start">
      <div class="col-4">
        <p>Offertnummer: xxxxxxx</p>
        <p>{{ user.firstName + ' ' + user.lastName }}<br />
            {{ user.email }}</p>
        <p>Från: {{ user.from }}<br />
            Till: {{ user.to }}<br />
            Avstånd: {{ user.distance }} km</p>
        <p>Bostadens yta: {{ user.area }} kvm<br />
            Vind/Källare: {{ isBasement }} kvm
        </p>
        <p>Övrigt<br />
            Pianoflytt: {{ isPiano }}<br />
            Packhjälp: {{ isPack }}
        </p>
      </div>
      <div class="col-4">
        <h4>Uppskattat pris:<br />{{ totalPrice }} kr inkl moms</h4>
        <p>Vi sparar ditt prisförslag 90 dagar.<br />
            För att se prisförslaget igen, besök:
            <a href="/offert">htttp://move.it/offert/xxxxxx</a>
        </p>
        <p>Om du har frågor, kontakta<br />
            flytt@moveit.se
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isSubmitted: {
      type: Boolean,
      default: false
    },
    user: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      price: undefined
    }
  },
  computed: {
    avstandPrice() {
    var avstand = this.user.distance;
    return avstand < 50 ? (1000 + 10*avstand) : (avstand > 99) 
                        ? (10000 + 7*avstand) : (5000 + 8*avstand);
    },
    carAmount() {
      return Math.ceil((this.user.area + this.user.basement*2)/50);
    },
    piano() {
      return this.user.piano ? 5000 : 0;
    },
    totalPrice() {
      return this.avstandPrice*this.carAmount + this.piano;
    },
    isPiano() {
      return this.user.piano ? 'Ja' : 'Nej';
    },
    isPack() {
      return this.user.packing ? 'Ja' : 'Nej';
    },
    isBasement() {
      return this.user.basement ? this.user.basement : 0;
    }
  }
}
</script>



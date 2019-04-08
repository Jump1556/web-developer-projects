<template>
  <div>
    <div v-if="!isSubmitted" class="homeImage"></div>
    <!-- Header --> 
    <h1 class="d-flex justify-content-center">Välkommen till MoveMe</h1>

    <!-- Navigation bar --> 
    <ul class="nav d-flex justify-content-end align-items-start">
      <li class="nav-item mr-4">
        <router-link to='/priser'>Priser</router-link>
      </li>
      <li class="nav-item mr-4">
        <router-link to='/offert'>Din Offert</router-link>
      </li>
    </ul>
    
    <!-- Button and form area -->
    <div v-if="!isSubmitted" class="d-flex justify-content-center">
      <button v-if="!visible" 
              type="submit" 
              class="btn btn-success mb-2" 
              @click="visible=true">
              Boka nu
      </button>
      <form v-else>
        <div class="row">
          <div class="col">
            <input type="text"
                   class="form-control m-2"
                   v-model="newUser.firstName" 
                   placeholder="Förnamn"
                   required>
            <input type="email"
                   class="form-control m-2"
                   v-model="newUser.email"
                   placeholder="E-postadress"
                   required>
            <input type="text" 
                   class="form-control m-2"
                   v-model="newUser.from"
                   placeholder="Från (väg, stad)"
                   required>
            <input type="number" 
                   class="form-control m-2"
                   v-model.number="newUser.area"
                   placeholder="Bostadens yta (kvm)"
                   required>
          </div>
          <div class="col mr-2">
            <input type="text" 
                   class="form-control m-2"
                   v-model="newUser.lastName"
                   placeholder="Efternamn"
                   required>
            <input type="number" 
                   class="form-control m-2"
                   v-model.number="newUser.distance"
                   placeholder="Avstånd, km"
                   required>
            <input type="text"
                   class="form-control m-2" 
                   v-model="newUser.to"
                   placeholder="Till (väg, stad)" 
                   required>
            <input type="number" 
                   class="form-control m-2"
                   v-model.number="newUser.basement"
                   placeholder="Vind/Källare (kvm)"
                   required>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="form-check form-check-inline">
              <input class="form-check-input m-2" type="checkbox" id="piano" value="piano" v-model="newUser.piano">
              <label class="form-check-label" for="piano">Pianoflytt</label>
            </div>
          </div>
          <div class="col">
            <div class="form-check form-check-inline">
              <input class="form-check-input m-2" type="checkbox" id="pack" value="pack" v-model="newUser.packing">
              <label class="form-check-label" for="pack">Packhjälp</label>
            </div>
          </div>
        </div>
        <div class="row">
          <button type="submit" class="btn btn-success" @click="submitUser()">Boka</button>
        </div>
      </form>
    </div>
    <Offert 
      :isSubmitted="isSubmitted" 
      :user="newUser"
    />

    <!-- Footer -->
    <footer>
      <p>© 2019 MoveMe. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import Offert from './Offert.vue';

export default {
  name: 'Home',
  components: { Offert },
  data() {
    return {
      visible: false,
      isSubmitted: false,
      newUser: {
        firstName: '',
        lastName: '',
        email: '',
        distance: '',
        from: '',
        to: '',
        area: '',
        basement: '',
        piano: '',
        packing: ''
      }
    }
  },
  methods: {
    submitUser() { 
      this.isSubmitted = true;
    }
  }
}
</script>


<style scoped>
h1 {
  margin-top: 20px;
  color: antiquewhite;
  text-transform: uppercase;
}

a {
  color: brown;
}

.homeImage {
  background-image: url('../assets/louis-magnotti.jpg');
  background-color: antiquewhite;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center; 
  z-index: -1;
}

button {
  margin: auto;
}
</style>

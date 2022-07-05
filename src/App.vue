<template>
  <div class="container">
    <estacionaHeader></estacionaHeader>
    <div class="formContent">
      <div class="inputs">
        <labelsForm for="proprietario" class="label">Proprietário</labelsForm>
        <customInput class="input" type="text" id="proprietario" name="proprietario" placeholder="XXXXX"></customInput>

        <labelsForm for="placa" class="label">Placa do veículo</labelsForm>
        <customInput class="input" type="text" id="placa" name="placa" placeholder="XXX - XXXX"></customInput>

        <labelsForm for="horario" class="label">Horário de entrada</labelsForm>
        <customInput class="input" id="horario" name="horario" type="number" placeholder="XX : XX"></customInput>

        <div class="buttons">
          <customButton class="liberar" @click="mudarVaga">Liberar</customButton>
        </div>

        <p class="label">Vaga liberada !</p>
        <customDisplay class="display" :value="guardaVaga"></customDisplay>
      </div>
    </div>
    <estacionaFooter></estacionaFooter>
  </div>
</template>

<script>

import estacionaHeader from '@/components/estacionaHeader.vue';
import labelsForm from '@/components/labelsForm.vue';
import customInput from '@/components/customInput';
import estacionaFooter from '@/components/estacionaFooter';
import customButton from '@/components/customButton';
import customDisplay from '@/components/customDisplay';
import {sorteiaVaga, vagaSetor} from '@/scripts/functionDisplayVaga';

export default {
  name: 'App',
  components: {
    estacionaHeader,
    labelsForm,
    customInput,
    estacionaFooter,
    customButton,
    customDisplay,
  },
  data() {
    return {
      guardaVaga: '',
      vagas: vagaSetor()
    }
  },
  methods: {
    mudarVaga() {
      this.guardaVaga = sorteiaVaga(this.vagas)
    }
  }
}
</script>

<style scoped>
@import url(./styles/normalize.css);

.formContent {
  width: 40%;
  height: 42.125rem;

  background-color: #ddddbb;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2% 30%;

  border-radius: 1.25rem;
}

.label, .input, .display {
  margin-top: 1.25rem;
}

.buttons {
  margin: 30px 20px;
  transition: .6s;
}

.buttons:hover {
  opacity: 0.9;
}

.inputs {
  display: flex;
  flex-direction: column;
  text-align: center;

  width: 50%;
}

svg {
  height: 1.25rem;
}

.limpa {
  background-color: #4da6ff;
}

.liberar {
  background-color: #4da6ff;
}

@media screen and (max-width: 900px) {
  .formContent {
    width: 60%;
    margin: 2% 20%;
  }
} 

</style>

<template>
  <div id="app">
    <div>
      <b-container>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-row>
            <b-col sm>
              <!-- Фамилия -->
              <b-form-group
                id="input-group-2"
                label="Фамилия"
                label-for="LastName"
              >
                <b-form-input
                  id="LastName"
                  v-model="form.lastName"
                  placeholder="Фамилия"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <!-- Имя -->
            <b-col sm>
              <b-form-group
                id="input-group-2"
                label="Имя"
                label-for="FirstName"
              >
                <b-form-input
                  id="FirstName"
                  v-model="form.firstName"
                  placeholder="Имя"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <!-- Отчество -->
            <b-col sm>
              <b-form-group
                id="input-group-2"
                label="Отчество"
                label-for="MiddleName"
              >
                <b-form-input
                  id="MiddleName"
                  v-model="form.middleName"
                  placeholder="Отчество"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- дата рождения -->
          <b-row>
            <b-col cols="5">
          <b-form-group
            id="input-group-2"
            label="Выберете дату"
            label-for="inputDate"
          >
            <b-form-input
              type="date"
              id="inputDate"
              v-model="form.inputDate"
              required
            ></b-form-input>
          </b-form-group>
            </b-col>
          <!-- вид документа -->
          <b-col cols="7">
          <b-form-group
            id="input-group-3"
            label="Вид документа"
            label-for="input-3"
          >
            <b-form-select
              id="input-3"
              size="sm"
              v-model="form.food"
              :options="foods"
              required
            ></b-form-select>
          </b-form-group>
          </b-col>
          </b-row>
          <!-- серия паспорта -->
          <b-form-group
            id="input-group-2"
            label="серия паспорта"
            label-for="docSer"
          >
            <b-form-input
              type="number"
              id="docSer"
              v-model="form.docSer"
              required
            ></b-form-input>
          </b-form-group>
          <!-- номер паспорта -->
          <b-form-group
            id="input-group-2"
            label="номер паспорта"
            label-for="docNum"
          >
            <b-form-input
              type="number"
              id="docNum"
              v-model="form.docNum"
              required
            ></b-form-input>
          </b-form-group>
          <!-- кем выдан -->
          <b-form-group
            id="input-group-2"
            label="Кем выдан"
            label-for="textarea"
          >
            <b-form-textarea
              id="textarea"
              v-model="form.docIssuedBy"
              placeholder="Кем выдан"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <!-- Дата выдачи  -->
          <b-form-group
            id="input-group-2"
            label="Дата выдачи"
            label-for="docDate"
          >
            <b-form-input
              type="date"
              id="docDate"
              v-model="form.docDate"
              required
            ></b-form-input>
          </b-form-group>
          <!-- Годен до -->
          <b-form-group
            id="input-group-2"
            label="Годен до"
            label-for="docDateValid"
          >
            <b-form-input
              type="date"
              id="docDateValid"
              v-model="form.docDateValid"
              required
            ></b-form-input>
          </b-form-group>
          <!-- Гражданство -->
          <b-form-group
            id="input-group-2"
            label="Гражданство"
            label-for="сitizenshipCode"
          >
            <b-form-input
              id="сitizenshipCode"
              v-model="form.сitizenshipCode"
              placeholder="Гражданство"
              required
            ></b-form-input>
          </b-form-group>
          <!-- Адрес регистрации -->
          <b-form-group
            id="input-group-2"
            label="Адрес регистрации"
            label-for="officialAddress"
          >
            <b-form-input
              id="officialAddress"
              v-model="form.officialAddress"
              placeholder="Адрес регистрации"
              required
            ></b-form-input>
          </b-form-group>
          <!-- Должность -->
          <b-form-group
            id="input-group-2"
            label="Должность"
            label-for="position"
          >
            <b-form-input
              id="position"
              v-model="form.position"
              placeholder="Должность"
              required
            ></b-form-input>
          </b-form-group>
          <!-- Электронный адрес получателя пропуска  -->
          <b-form-group
            id="input-group-1"
            label="Электронный адрес получателя пропуска:"
            label-for="guestEmailAddress"
          >
            <b-form-input
              id="guestEmailAddress"
              v-model="form.guestEmailAddress"
              type="email"
              placeholder="Введите email"
              required
            ></b-form-input>
          </b-form-group>
          <!-- Кнопка Добавить данные еще одно физ. лица -->
          <div>
            <b-button variant="primary"
              >Добавить данные еще одно физ. лица</b-button
            >
          </div>
          <!-- Данные транспортного средства, на которое оформляется пропуск -->
          <div>
            <b-form-group
              id="input-group-2"
              label="Страна регистрации"
              label-for="carCitizenshipCode"
            >
              <b-form-input
                id="carCitizenshipCode"
                v-model="form.carCitizenshipCode"
                placeholder="Страна регистрации"
                required
              ></b-form-input>
            </b-form-group>
            <!-- Регистрационный знак  -->
            <b-form-group
              id="input-group-2"
              label="Регистрационный знак"
              label-for="carRegistrationNumber"
            >
              <b-form-input
                id="carRegistrationNumber"
                v-model="form.carRegistrationNumber"
                placeholder="Регистрационный знак"
                required
              ></b-form-input>
            </b-form-group>
            <!-- Марка -->
            <b-form-group id="input-group-2" label="Марка" label-for="carBrand">
              <b-form-input
                id="carBrand"
                v-model="form.carBrand"
                placeholder="Марка"
                required
              ></b-form-input>
            </b-form-group>
            <!-- Модель -->
            <b-form-group
              id="input-group-2"
              label="Модель"
              label-for="carModel"
            >
              <b-form-input
                id="carModel"
                v-model="form.carModel"
                placeholder="Модель"
                required
              ></b-form-input>
            </b-form-group>
            <!-- Цвет -->
            <b-form-group id="input-group-2" label="Цвет" label-for="carColor">
              <b-form-input
                id="carColor"
                v-model="form.carColor"
                placeholder="Цвет"
                required
              ></b-form-input>
            </b-form-group>
            <!-- Наличие прицепа -->
            <b-form-group
              id="input-group-3"
              label="Вид документа"
              label-for="trailer"
            >
              <b-form-select
                id="trailer"
                v-model="form.trailer"
                :options="trailers"
                required
              ></b-form-select>
            </b-form-group>
            <!-- Страна регистрации прицепа  -->
            <b-form-group
              id="input-group-2"
              label="Страна регистрации прицепа"
              label-for="trailerCitizenshipCode"
            >
              <b-form-input
                id="trailerCitizenshipCode"
                v-model="form.trailerCitizenshipCode"
                placeholder="Страна регистрации прицепа"
                required
              ></b-form-input>
            </b-form-group>
            <!-- Регистрационный знак прицепа   -->
            <b-form-group
              id="input-group-2"
              label="Регистрационный знак прицепа"
              label-for="trailerRegistrationNumber"
            >
              <b-form-input
                id="trailerRegistrationNumber"
                v-model="form.trailerRegistrationNumber"
                placeholder="Регистрационный знак прицепа"
                required
              ></b-form-input>
            </b-form-group>
          </div>

          <b-button type="submit" variant="primary">Отправить</b-button>
          <b-button type="reset" variant="danger">Сбросить</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </b-container>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  components: {},
  data() {
    return {
      form: {
        lastName: "",
        firstName: "",
        middleName: "",
        docIssuedBy: "",
        docDate: "",
        guestEmailAddress: "",
        carCitizenshipCode: "",
        carRegistrationNumber: "",
        carBrand: "",
        trailerCitizenshipCode: "",
        trailerRegistrationNumber: "",
        trailer: null,
        docDateValid: null,
        docSer: null,
        docNum: null,
        inputDate: null,
        selected: null,
        food: null,
      },
      foods: [
        { text: "Паспорт гражданина РФ", value: null },
        "Вид на жительство",
        "Водительское удостоверение гражданина РФ",
        "Временное удостоверение личности гражданина РФ",
        "Паспорт иностранного гражданина",
        "Свидетельство о предоставлении временного убежища на территории РФ",
        "Свидетельство о рассмотрении ходатайства о признании беженцем на территории РФ по существу",
        "Удостоверение личности военнослужащего РФ",
        "Удостоверение личности моряка",
        "Документ, удостоверяющий личность на период рассмотрения заявления о признании гражданином РФ или о приеме в гражданство РФ",
        "Водительское удостоверение международного образца",
      ],
      trailers: [{ text: "Нет", value: null }, "Да"],

      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(this.form);
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Сбросить значения нашей формы

      this.form.lastName = "";
      this.form.firstName = "";
      this.form.middleName = "";
      this.form.inputDate = null;
      this.form.food = null;

      // Уловка для сброса/очистки состояния проверки формы в собственном браузере
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>
</style>

<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="danger" class="mb-3">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <b-container>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-row>
          <b-col lg>
            <!-- Фамилия -->
            <b-form-group
              id="input-group-2"
              label="Фамилия"
              label-for="LastName"
            >
              <b-form-input
                id="LastName"
                v-model.trim="$v.form.lastName.$model"
                placeholder="Фамилия"
                :state="validateState('lastName')"
                aria-describedby="input-1-live-feedback"
                required
              ></b-form-input>
              <b-form-invalid-feedback id="input-1-live-feedback"
                >Вводите только русские буквы.</b-form-invalid-feedback
              >
            </b-form-group>
          </b-col>
          <!-- Имя -->
          <b-col lg>
            <b-form-group id="input-group-2" label="Имя" label-for="FirstName">
              <b-form-input
                id="FirstName"
                v-model.trim="$v.form.firstName.$model"
                placeholder="Имя"
                :state="validateState('firstName')"
                aria-describedby="input-1-live-feedback"
                required
              ></b-form-input>
              <b-form-invalid-feedback id="input-1-live-feedback"
                >Вводите только русские буквы.</b-form-invalid-feedback
              >
            </b-form-group>
          </b-col>
          <!-- Отчество -->
          <b-col lg>
            <b-form-group
              id="input-group-2"
              label="Отчество"
              label-for="MiddleName"
            >
              <b-form-input
                id="MiddleName"
                v-model.trim="$v.form.middleName.$model"
                placeholder="Отчество"
                :state="validateState('middleName')"
                aria-describedby="input-1-live-feedback"
                required
              ></b-form-input>
              <b-form-invalid-feedback id="input-1-live-feedback"
                >Вводите только русские буквы.</b-form-invalid-feedback
              >
            </b-form-group>
          </b-col>
        </b-row>
        <!-- дата рождения -->
        <b-row>
          <b-col lg>
            <b-form-group
              id="input-group-2"
              label="Выберете дату рождения"
              label-for="inputDate"
            >
              <b-form-input
                type="date"
                id="inputDate"
                v-model="$v.form.inputDate.$model"
                :state="validateState('inputDate')"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <!-- вид документа -->
          <b-col lg>
            <b-form-group
              id="input-group-3"
              label="Вид документа"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="$v.form.selected.$model"
                :options="docTypes"
                :state="validateState('selected')"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <!-- серия паспорта -->
            <b-form-group
              id="input-group-2"
              label="Серия паспорта"
              label-for="docSer"
            >
              <b-form-input
                type="number"
                id="docSer"
                placeholder="Серия паспорта"
                v-model="$v.form.docSer.$model"
                :state="validateState('docSer')"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <!-- номер паспорта -->
          <b-col>
            <b-form-group
              id="input-group-2"
              label="Номер паспорта"
              label-for="docNum"
            >
              <b-form-input
                type="number"
                id="docNum"
                placeholder="Номер паспорта"
                v-model="$v.form.docNum.$model"
                :state="validateState('docNum')"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- кем выдан -->
        <b-form-group id="input-group-2" label="Кем выдан" label-for="textarea">
          <b-form-textarea
            id="textarea"
            v-model="form.docIssuedBy"
            placeholder="Кем выдан"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        <!-- Дата выдачи  -->
        <b-row>
          <b-col>
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
          </b-col>
          <!-- Годен до -->
          <b-col>
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
          </b-col>
        </b-row>
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
        <b-form-group id="input-group-2" label="Должность" label-for="position">
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
        <b-row>
          <b-col>
            <!-- Кнопка Добавить данные еще одно физ. лица -->
            <div>
              <b-button variant="primary"
                >Добавить данные еще одно физ. лица</b-button
              >
            </div>
          </b-col>
          <b-col>
            <div>
              <b-button v-b-toggle.collapse-1 variant="primary"
                >Добавить машину</b-button
              >
              <b-collapse id="collapse-1" class="mt-2">
                <b-card>
                  <p class="card-text">Свернутое содержимое здесь</p>
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
                  <b-form-group
                    id="input-group-2"
                    label="Марка"
                    label-for="carBrand"
                  >
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
                  <b-form-group
                    id="input-group-2"
                    label="Цвет"
                    label-for="carColor"
                  >
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
                    label="Наличие прицепа"
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
                </b-card>
              </b-collapse>
            </div>
          </b-col>
        </b-row>
        <!-- Данные транспортного средства, на которое оформляется пропуск -->

        <b-button type="submit" variant="primary">Отправить</b-button>
        <b-button type="reset" variant="danger">Сбросить</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  components: {},
  mixins: [validationMixin],
  data() {
    return {
      form: {
        lastName: "",
        firstName: "",
        middleName: "",
        docIssuedBy: "",
        docDate: "",
        сitizenshipCode: "",
        officialAddress: "",
        position: "",
        guestEmailAddress: "",
        carCitizenshipCode: "",
        carRegistrationNumber: "",
        carBrand: "",
        carModel: "",
        carColor: "",
        trailerCitizenshipCode: "",
        trailerRegistrationNumber: "",
        trailer: "Нет",
        docDateValid: null,
        docSer: null,
        docNum: null,
        inputDate: null,
        selected: "Паспорт гражданина РФ",
        docType: null,
      },
      // selected: "Паспорт гражданина РФ",
      docTypes: [
        { text: "Паспорт гражданина РФ", value: "Паспорт гражданина РФ" },
        { text: "Вид на жительство", value: "Вид на жительство" },
        {
          text: "Водительское удостоверение гражданина РФ",
          value: "Водительское удостоверение гражданина РФ",
        },
        {
          text: "Временное удостоверение личности гражданина РФ",
          value: "Временное удостоверение личности гражданина РФ",
        },
        {
          text: "Паспорт иностранного гражданина",
          value: "Паспорт иностранного гражданина",
        },
        {
          text: "Свидетельство о предоставлении временного убежища на территории РФ",
          value:
            "Свидетельство о предоставлении временного убежища на территории РФ",
        },
        {
          text: "Свидетельство о рассмотрении ходатайства о признании беженцем на территории РФ по существу",
          value:
            "Свидетельство о рассмотрении ходатайства о признании беженцем на территории РФ по существу",
        },
        {
          text: "Удостоверение личности военнослужащего РФ",
          value: "Удостоверение личности военнослужащего РФ",
        },
        {
          text: "Удостоверение личности моряка",
          value: "Удостоверение личности моряка",
        },
        {
          text: "Документ, удостоверяющий личность на период рассмотрения заявления о признании гражданином РФ или о приеме в гражданство РФ",
          value:
            "Документ, удостоверяющий личность на период рассмотрения заявления о признании гражданином РФ или о приеме в гражданство РФ",
        },
        {
          text: "Водительское удостоверение международного образца",
          value: "Водительское удостоверение международного образца",
        },
      ],

      trailers: ["Нет", "Да"],

      show: true,
    };
  },
  validations: {
    form: {
      lastName: {
        required,
        simpleValidator(value) {
          const _isAlpha = /^[А-ЯЁ]+$/i.test(value);
          return _isAlpha;
        },
      },
      firstName: {
        required,
        simpleValidator(value) {
          const _isAlpha = /^[А-ЯЁ]+$/i.test(value);
          return _isAlpha;
        },
      },
      middleName: {
        required,
        simpleValidator(value) {
          const _isAlpha = /^[А-ЯЁ]+$/i.test(value);
          return _isAlpha;
        },
      },
      docSer: {
        required,
        simpleValidator(value) {
          let _isPassCorrect = true;
          if (this.form.selected === "Паспорт гражданина РФ") {
            _isPassCorrect = /^\d{4}$/i.test(value);
            console.log(_isPassCorrect);
            return _isPassCorrect;
          }
          console.log(_isPassCorrect);
          return _isPassCorrect;
        },
      },
      docNum: {
        required,
        simpleValidator(value) {
          let _isPassCorrect = true;
          if (this.form.selected === "Паспорт гражданина РФ") {
            _isPassCorrect = /^\d{6}$/i.test(value);
            console.log(_isPassCorrect);
            return _isPassCorrect;
          }
          console.log(_isPassCorrect);
          return _isPassCorrect;
        },
      },
      docIssuedBy: {},
      docDate: {},
      сitizenshipCode: {},
      officialAddress: {},
      position: {},
      guestEmailAddress: {},
      carCitizenshipCode: {},
      carRegistrationNumber: {},
      carBrand: {},
      carModel: {},
      carColor: {},
      trailerCitizenshipCode: {},
      trailerRegistrationNumber: {},
      trailer: {},
      docDateValid: {},

      inputDate: {},
      selected: {},
      docType: {},
    },
  },
  computed: {
    // nameErrors() {
    //   const errors = [];
    //   if (!this.$v.form.lastName.required)
    //     errors.push("Обязательно для заполнения.");
    //   return errors;
    // },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
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
      this.form.docIssuedBy = "";
      this.form.docDate = "";
      this.form.сitizenshipCode = "";
      this.form.officialAddress = "";
      this.form.position = "";
      this.form.guestEmailAddress = "";
      this.form.carCitizenshipCode = "";
      this.form.carRegistrationNumber = "";
      this.form.carBrand = "";
      this.form.carModel = "";
      this.form.carColor = "";
      this.form.trailerCitizenshipCode = "";
      this.form.trailerRegistrationNumber = "";
      this.form.trailer = "Нет";
      this.form.docDateValid = null;
      this.form.docSer = null;
      this.form.docNum = null;
      this.form.inputDate = null;
      this.form.selected = "Паспорт гражданина РФ";
      this.form.docType = null;

      // Уловка для сброса/очистки состояния проверки формы в собственном браузере
      // this.show = false;
      // this.$nextTick(() => {
      //   this.show = true;
      // });
    },
  },
};
</script>

<style>
</style>

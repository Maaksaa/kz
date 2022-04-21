<template>
  <div id="app">
    <b-navbar
      sticky
      fixed
      toggleable="lg"
      type="dark"
      variant="danger"
      class="mb-3"
    >
      <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->
      <b-button v-b-toggle.collapse-person class="m-1">+ Человек</b-button>
      <b-button v-b-toggle.collapse-car class="m-1">+ Машина</b-button>
    </b-navbar>
    <b-container>
      <b-collapse id="collapse-person">
        <b-card class="mb-4" header="Форма для заполнения" header-tag="h5">
          <b-form @submit="onSubmit">
            <b-row>
              <!-- Фамилия -->
              <b-col lg>
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
                    >Вводите только буквы.</b-form-invalid-feedback
                  >
                </b-form-group>
              </b-col>
              <!-- Имя -->
              <b-col lg>
                <b-form-group
                  id="input-group-2"
                  label="Имя"
                  label-for="FirstName"
                >
                  <b-form-input
                    id="FirstName"
                    v-model.trim="$v.form.firstName.$model"
                    placeholder="Имя"
                    :state="validateState('firstName')"
                    aria-describedby="input-1-live-feedback"
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback id="input-1-live-feedback"
                    >Вводите только буквы.</b-form-invalid-feedback
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
                    placeholder="Отчество (не обязательно)"
                    :state="validateState('middleName')"
                    aria-describedby="input-1-live-feedback"
                  ></b-form-input>
                  <b-form-invalid-feedback id="input-1-live-feedback"
                    >Вводите только буквы.</b-form-invalid-feedback
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
                  <b-form-invalid-feedback id="input-2-live-feedback"
                    >Должно быть 4 цифры</b-form-invalid-feedback
                  >
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
                  <b-form-invalid-feedback id="input-2-live-feedback"
                    >Должно быть 6 цифр</b-form-invalid-feedback
                  >
                </b-form-group>
              </b-col>
            </b-row>
            <!-- кем выдан -->
            <b-form-group
              id="input-group-2"
              label="Кем выдан"
              label-for="docIssuedBy"
            >
              <b-form-textarea
                id="docIssuedBy"
                v-model="$v.form.docIssuedBy.$model"
                :state="validateState('docIssuedBy')"
                placeholder="Кем выдан"
                rows="2"
                max-rows="2"
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
                    v-model="$v.form.docDate.$model"
                    :state="validateState('docDate')"
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
                    v-model="$v.form.docDateValid.$model"
                    :disabled="disableInput"
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
                v-model="$v.form.сitizenshipCode.$model"
                :state="validateState('сitizenshipCode')"
                :value="defaultCitizenshipCode"
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
                v-model="$v.form.officialAddress.$model"
                :state="validateState('officialAddress')"
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
                v-model="$v.form.position.$model"
                :state="validateState('position')"
                placeholder="Должность"
                required
              ></b-form-input>
              <b-form-invalid-feedback id="input-position-live-feedback"
                >Поле должно содержать только буквы</b-form-invalid-feedback
              >
            </b-form-group>
            <!-- Электронный адрес получателя пропуска  -->
            <!-- <b-form-group
              id="input-group-1"
              label="Электронный адрес получателя пропуска:"
              label-for="guestEmailAddress"
            >
              <b-form-input
                id="guestEmailAddress"
                v-model="$v.form.guestEmailAddress.$model"
                :state="validateState('guestEmailAddress')"
                type="email"
                placeholder="Введите email"
                required
              ></b-form-input>
            </b-form-group> -->
          </b-form>
        </b-card>
      </b-collapse>
      <b-collapse id="collapse-car">
        <b-card
          class="mb-4"
          header="Форма заполнения транспортного средства"
          header-tag="h5"
        >
          <b-form>
            <b-form-group
              id="input-group-2"
              label="Страна регистрации"
              label-for="carCitizenshipCode"
            >
              <b-form-input
                id="carCitizenshipCode"
                v-model="form.carCitizenshipCode"
                placeholder="Страна регистрации"
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
              ></b-form-input>
            </b-form-group>
            <!-- Марка -->
            <b-form-group id="input-group-2" label="Марка" label-for="carBrand">
              <b-form-input
                id="carBrand"
                v-model="form.carBrand"
                placeholder="Марка"
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
              ></b-form-input>
            </b-form-group>
            <!-- Цвет -->
            <b-form-group id="input-group-2" label="Цвет" label-for="carColor">
              <b-form-input
                id="carColor"
                v-model="$v.form.carColor.$model"
                :state="validateState('carColor')"
                placeholder="Цвет"
              ></b-form-input>
              <b-form-invalid-feedback id="input-car-color-live-feedback"
                >Поле должно содержать только буквы.</b-form-invalid-feedback
              >
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
              ></b-form-input>
            </b-form-group>
          </b-form>
        </b-card>
      </b-collapse>

      <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->
    </b-container>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { BIcon } from "bootstrap-vue";

export default {
  name: "App",
  components: {
    BIcon,
  },
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
        carCitizenshipCode: "Россия",
        carRegistrationNumber: "",
        carBrand: "",
        carModel: "",
        carColor: "",
        trailerCitizenshipCode: "Россия",
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

      show: false,
    };
  },
  // валидация
  validations: {
    form: {
      lastName: {
        required,
        simpleValidator(value) {
          const _isAlpha = /^[A-ZА-ЯЁ\s]+$/i.test(value);
          return _isAlpha;
        },
      },
      firstName: {
        required,
        simpleValidator(value) {
          const _isAlpha = /^[A-ZА-ЯЁ\s]+$/i.test(value);
          return _isAlpha;
        },
      },
      middleName: {
        simpleValidator(value) {
          const _isAlpha = /^[A-ZА-ЯЁ\s]+$/i.test(value);
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
      docIssuedBy: { required },
      docDate: { required },
      docDateValid: { required },
      сitizenshipCode: { required },
      officialAddress: { required },
      position: {
        required,
        simpleValidator(value) {
          const _isAlphaRuEn = /^[a-zа-яё\s]+$/iu.test(value);
          return _isAlphaRuEn;
        },
      },
      guestEmailAddress: { required, email },
      carCitizenshipCode: {},
      carRegistrationNumber: {},
      carBrand: {},
      carModel: {},
      carColor: {
        simpleValidator(value) {
          const _isAlphaRuEn = /^[a-zа-яё\s]+$/iu.test(value);
          return _isAlphaRuEn;
        },
      },
      trailerCitizenshipCode: {},
      trailerRegistrationNumber: {},
      trailer: {},

      inputDate: {},
      selected: {},
      docType: {},
    },
  },
  computed: {
    disableInput() {
      // сбрасываю значение поля, если была выбрана дата и теперь поле неактивно
      if (this.form.selected === "Паспорт гражданина РФ")
        this.form.docDateValid = null;

      // делаю неактивным, если выбран Паспорт гражданина РФ
      return this.form.selected === "Паспорт гражданина РФ" ? true : false;
    },
    defaultCitizenshipCode() {
      this.form.selected === "Паспорт гражданина РФ"
        ? (this.form.сitizenshipCode = "Паспорт гражданина РФ")
        : (this.form.сitizenshipCode = "");
    },

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
    // onReset(event) {
    //   event.preventDefault();
    //   // Сбросить значения нашей формы

    //   this.form.lastName = "";
    //   this.form.firstName = "";
    //   this.form.middleName = "";
    //   this.form.docIssuedBy = "";
    //   this.form.docDate = "";
    //   this.form.сitizenshipCode = "";
    //   this.form.officialAddress = "";
    //   this.form.position = "";
    //   this.form.guestEmailAddress = "";
    //   this.form.carCitizenshipCode = "";
    //   this.form.carRegistrationNumber = "";
    //   this.form.carBrand = "";
    //   this.form.carModel = "";
    //   this.form.carColor = "";
    //   this.form.trailerCitizenshipCode = "";
    //   this.form.trailerRegistrationNumber = "";
    //   this.form.trailer = "Нет";
    //   this.form.docDateValid = null;
    //   this.form.docSer = null;
    //   this.form.docNum = null;
    //   this.form.inputDate = null;
    //   this.form.selected = "Паспорт гражданина РФ";
    //   this.form.docType = null;
  },
};
</script>

<style>
</style>

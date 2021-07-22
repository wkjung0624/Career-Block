<template>
  <section class="page-section" id="contact">
    <div class="container px-4 px-lg-5 pt-5 rounded-3 bg-white">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-lg-8 col-xl-6 text-center">
          <h2 class="mt-0">CareerBlock과 함께해요</h2>
          <hr class="divider" />
          <p class="text-muted mb-5">
            커리어 블록과 함께 하시겠어요?<br />
            블록체인으로 검증된 이력서로 자신의 가치를 증명하세요.<br />
            당신을 찾을 수 있게 정보를 등록해주세요.
          </p>
        </div>
      </div>
      <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
        <div class="col-lg-6">
          <!-- * * * * * * * * * * * * * * *-->
          <!-- * * SB Forms Contact Form * *-->
          <!-- * * * * * * * * * * * * * * *-->
          <!-- This form is pre-integrated with SB Forms.-->
          <!-- To make this form functional, sign up at-->
          <!-- https://startbootstrap.com/solution/contact-forms-->
          <!-- to get an API token!-->

          <!-- Name input-->
          <div class="form-floating mb-3">
            <input
              class="form-control"
              id="name"
              type="text"
              placeholder="Enter your name..."
              data-sb-validations="required"
            />
            <label for="name">Full name</label>
            <div class="invalid-feedback" data-sb-feedback="name:required">
              A name is required.
            </div>
          </div>

          <div class="form-floating mb-3">
            <select
              class="form-select pt-2"
              aria-label="Default select example"
            >
              <option selected>Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">None</option>
            </select>
          </div>
          <!-- Birthday input-->

          <!-- <label class="text-start">Birthday</label> -->
          <div class="form-floating mb-3">
            <div class="input-group mb-3">
              <select
                class="form-select pt-2"
                aria-label="Default select example"
              >
                <option selected>Year</option>
                <option
                  v-bind:key="idx"
                  value="year"
                  v-for="(year, idx) in yearLists"
                >
                  {{ year }}
                </option>
              </select>

              <select
                class="form-select pt-2"
                aria-label="Default select example"
              >
                <option selected>Month</option>
                <option
                  v-bind:key="idx"
                  value="month"
                  v-for="(month, idx) in monthLists"
                >
                  {{ month }}
                </option>
              </select>

              <select
                class="form-select pt-2"
                aria-label="Default select example"
              >
                <option selected>Day</option>
                <option
                  v-bind:key="idx"
                  value="day"
                  v-for="(day, idx) in dayLists"
                >
                  {{ day }}
                </option>
              </select>
            </div>
          </div>
          <!-- Phone number input-->
          <div class="form-floating mb-3">
            <input
              class="form-control"
              id="phone"
              type="tel"
              placeholder="(123) 456-7890"
              data-sb-validations="required"
            />
            <label for="phone">Phone number</label>
            <div class="invalid-feedback" data-sb-feedback="phone:required">
              A phone number is required.
            </div>
          </div>
          <!-- Address input-->
          <div class="form-floating mb-3">
            <textarea
              class="form-control"
              id="address"
              type="text"
              placeholder="Enter your address here..."
              style="height: 80px"
              data-sb-validations="required"
            ></textarea>
            <label for="address">Address</label>
            <div class="invalid-feedback" data-sb-feedback="address:required">
              A address is required.
            </div>
          </div>
          <!-- Submit success message-->

          <!-- This is what your users will see when the form-->
          <!-- has successfully submitted-->
          <div class="d-none" id="submitSuccessMessage">
            <div class="text-center mb-3">
              <div class="fw-bolder">Form submission successful!</div>
              To activate this form, sign up at
              <br />
              <a href="https://startbootstrap.com/solution/contact-forms"
                >https://startbootstrap.com/solution/contact-forms</a
              >
            </div>
          </div>
          <!-- Submit error message-->
          <!---->
          <!-- CareerBlock에 정보가 등록됩니다. -->
          <!-- an error submitting the form-->
          <div class="d-none" id="submitErrorMessage">
            <div class="text-center text-danger mb-3">
              Error sending message!
            </div>
          </div>
          <!-- Submit Button-->
          <div class="btn-group-sm me-2" role="group" aria-label="submit group">
            <div class="d-grid">
              <button class="btn btn-primary btn-xl" @click="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-lg-4 text-center mb-5 mb-lg-0">
          <i class="bi-phone fs-2 mb-3 text-muted"></i>
          <div>+82 (010) 6720-4257</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      // yearLists : () => {
      //   let years = []
      //   const start = 1900;
      //   const end = 2021;
      //   for(var cur = start; cur <= end; cur++){
      //     years.push(start);
      //   }
      //   return years;
      // },
      yearLists: [
        1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
        2002, 2003, 2004,
      ],
      // monthLists:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      monthLists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      dayLists: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
      name: "",
      gender: "",
      phone: "",
      year: "",
      month: "",
      day: "",
      address: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    // searchUser(){
    //   this.$api('searchAccount').then((res) => {return res});
    // },
    submit() {
      this.$store.commit("Registration", {
        name: this.name,
        gender: 0,
        year: this.year,
        month: this.month,
        day: this.day,
        phone: this.phone,
        address: this.address,
      });

      console.table("test222", this.$store.state.reg);

      this.$store.commit("setPageIndex", 1);
    },
    async createUser() {
      //var list = await this.$api('searchUser');
      console.log("test");
      var list = await this.$api(
        "searchAccount",
        { email: "skyship36@gmail.com" },
        "post"
      );
      console.log(list);
    },
  },
};
</script>

<style></style>

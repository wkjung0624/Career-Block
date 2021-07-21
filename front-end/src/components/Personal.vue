<template>

    <section class="page-section" id="contact">
          <div class="container px-4 px-lg-5 pt-5 rounded-3 bg-white">
              <div class="row gx-4 gx-lg-5 justify-content-center">
                  <div class="col-lg-8 col-xl-6 text-center">
                      <h2 class="mt-0">Let's Get In Touch!</h2>
                      <hr class="divider" />
                      <p class="text-muted mb-5">Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>
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
                      <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                          <!-- Name input-->
                          <div class="form-floating mb-3">
                              <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                              <label for="name">Full name</label>
                              <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                          </div>
                          <!-- Email address input-->
                          <div class="form-floating mb-3">
                              <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                              <label for="email">Email address</label>
                              <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                              <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                          </div>
                          <!-- Phone number input-->
                          <div class="form-floating mb-3">
                              <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                              <label for="phone">Phone number</label>
                              <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                          </div>
                          <!-- Message input-->
                          <div class="form-floating mb-3">
                              <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style="height: 10rem" data-sb-validations="required"></textarea>
                              <label for="message">Message</label>
                              <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                          </div>
                          <!-- Submit success message-->
                          
                          <!-- This is what your users will see when the form-->
                          <!-- has successfully submitted-->
                          <div class="d-none" id="submitSuccessMessage">
                              <div class="text-center mb-3">
                                  <div class="fw-bolder">Form submission successful!</div>
                                  To activate this form, sign up at
                                  <br />
                                  <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                              </div>
                          </div>
                          <!-- Submit error message-->
                          <!---->
                          This is what your users will see when there is
                          <!-- an error submitting the form-->
                          <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                          <!-- Submit Button-->
                          <div class="btn-group-sm me-2" role="group" aria-label="submit group">
                            <div class="d-grid float-start"><button class="btn btn-primary btn-xl" id="submitButton" type="submit">cancel</button></div>
                            <div class="d-grid float-end"><button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Submit</button></div>
                          </div> 
                      </form>
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
      <!-- 
    <div class="container">
      <div
        style="
          color: #867ae9;
          font-size: 30pt;
          border-bottom: 2px solid #867ae9;
          margin-bottom: 20px;
        "
      >
        정보를 등록해주세요 :)
      </div>
      <table class="tb">
        <tr>
          <td>이름</td>
          <td><input type="text" v-model="name" style="width:150px; height:35px; font-size:30px; text-align:center; color:#867ae9;"/></td>
        </tr>
        <tr>
          <td>성별</td>
          <td>
            <input type="radio" :value="gender" />남
            <input type="radio" :value="gender" />여
          </td>
        </tr>
        <tr>
          <td>생년월일</td>
          <td><input type="text" v-model="age" style="width:180px; height:35px; font-size:25px; text-align:center; color:#867ae9;" /></td>
        </tr>
        <tr>
          <td>전화번호</td>
          <td><input type="tel" v-model="phone" style="width:250px; height:35px; font-size:25px; text-align:center; color:#867ae9;"/></td>
        </tr>
        <tr>
          <td>주소</td>
          <td><input type="text" v-model="address" style="width:300px; height:35px; font-size:20px; text-align:center; color:#867ae9;" /></td>
        </tr>
        <tr>
          <td>상세주소</td>
          <td><input type="text" v-model="address2" style="width:300px; height:35px; font-size:20px; text-align:center; color:#867ae9;" /></td>
        </tr>
      </table>
    </div>
     -->
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      name: "",
      gender: "",
      age: "",
      phone: "",
      address: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
  },
};
</script>

<style>
</style>

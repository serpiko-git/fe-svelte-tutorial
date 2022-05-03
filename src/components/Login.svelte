<script>  
  let leftArrSrc = './build/img/arrow.png';  
  let loginImg = './build/img/login.png';  
</script>

<div id="wrap">
  <div id="common_sub_top_bar">
    <div class="common_sub_top_bar_Menu">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src={leftArrSrc} />
    </div>
    <div class="common_sub_top_bar_Menu">로그인</div>
    <div class="common_sub_top_bar_Menu"></div>
  </div>
  <div id="container">
    <div id="loginMainImg">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src={loginImg} />
    </div>
    <div id="loginContent">
      <div class="loginDiv">
        <input class="loginInfoInput" placeholder="아이디" type="text" />
        <input class="loginInfoInput" placeholder="비밀번호" type="text" />        
        <div class="subLoginMenuDiv">
          <div id="autoLoginDiv">
            <input type="checkbox"/><span>자동 로그인</span>
          </div>
          <div id="idPwSearchDiv">
            아이디/비밀번호 찾기
          </div>
        </div>
      </div>     
    </div>
    <div id="loginBtnDiv">
      <button id="loginBtn">로그인</button>
    </div>
    <div id="signUpBtnDiv">
      <button id="signUpBtn">회원가입</button>
      <button id="signUpNaver">네이버로 시작</button>
      <button id="signUpKakao">카카오톡으로 시작</button>
    </div> 
  </div>
  <div class="footerLogo">
    ⓒURBAN DATA LAB
  </div>  
</div>


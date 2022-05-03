<script>  
  import {push, pop, replace} from 'svelte-spa-router' 
	let leftArrSrc = './build/img/arrow.png';  
  let signUpAgreeSrc = './build/img/signup_agree.png';  
</script>

<div id="wrap">
  <div id="common_sub_top_bar">
    <div class="common_sub_top_bar_Menu">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src={leftArrSrc} />
    </div>
    <div class="common_sub_top_bar_Menu">회원정보 등록</div>
    <div class="common_sub_top_bar_Menu"></div>
  </div>
  <div>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src={signUpAgreeSrc} id="mainImg"/>
  </div>
  <div id="container">
    <div id="companyInfoContent">
      <div class="companyInfoDiv">
        <div class="companyInfoTitleDiv">
          <div class="companyInfoTitle">
            <span>회원정보 등록<font color="blue">(선택)</font></span>
          </div>
        </div>              
        <input class="companyInfoInput" placeholder="회사 이름을 입력해 주세요." type="text" />
        <input class="companyInfoInput" placeholder="사업자등록정보를 입력해 주세요." type="text" />
        <input class="companyInfoInput" placeholder="회사 전화번호를 입력해 주세요." type="text" />   
        <div class="companyInputFile">
          <input class="companyInfoInput" value="사업자 등록증을 등록해 주세요." readonly>
          <label for="exFilename">선택</label>
          <input type="file" id="exFilename" class="uploadHidden">
        </div>
      </div>
    </div>
  </div>
  <div class="signUpBtn">
    <div>
      <button class="btn_menu_cancel" type="button" on:click={() => push('/login')}>로그안 바로가기</button>
    </div>
    <div>
      <button class="btn_menu_next" type="button" on:click={() => push('/coReg')}>회원정보등록</button>    
    </div>    
  </div>
  <div class="footerLogo">
    ⓒURBAN DATA LAB
  </div>  
</div>
